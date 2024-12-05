import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import type { User } from '@/types/User';

import { GetMyLike } from './utils';
import { PostDetailPage } from './PostDetail.style';
import { PostCommentInput, PostComments, PostContent } from './components';
import { getPost } from '@apis/supabase/supabaseClient';
import formatDate from '@utils/formatDate';
import useSessionStorage from '@hooks/useSessionStorage';
import { PostPreviewSkeleton } from '@components/Skeleton';

const PostDetail = () => {
  const { postId } = useParams<{ postId: string }>();

  const {
    isLoading,
    data: { data },
    refetch
  } = useQuery({
    queryKey: ['postDetail', postId],
    queryFn: async () => getPost(postId),
    enabled: !!postId,
    suspense: true
  });

  const [{ token, _id, image, fullName }] = useSessionStorage<
    Pick<User, '_id' | 'token' | 'image' | 'fullName'>
  >('userData', {
    _id: '',
    token: '',
    image: '',
    fullName: ''
  });

  return (
    <PostDetailPage>
      {isLoading ? (
        <PostPreviewSkeleton />
      ) : (
        <PostContent
          postId={parseInt(postId)}
          profiles={data?.profiles}
          currentUserId={_id}
          content={data?.title}
          meditationTime={data?.meditationTime}
          createdAt={formatDate(data?.createdAt)}
        />
      )}
      <PostCommentInput
        userId={data?.profiles._id}
        postId={postId}
        avatarSrc={image}
        userName={fullName}
        refetch={() => {
          refetch();
        }}
      />
      <PostComments
        userId={data?.profiles._id}
        postId={postId}
        currentUserId={_id}
        token={'Bearer ' + token}
        refetch={() => {
          refetch();
        }}
        comments={data?.comments}
        myLike={GetMyLike(data?.likes)}
        likeCounts={data?.likes?.length}
      />
    </PostDetailPage>
  );
};

export default PostDetail;
