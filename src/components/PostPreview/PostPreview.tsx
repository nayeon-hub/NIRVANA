import type { EditedPost } from '@/types';

import PostHeader from './PostHeader';
import { Link } from '@components/Link';
import {
  PostContent,
  PostContentContainer,
  PostHeaderContainer,
  PreviewContainer
} from './PostPreview.style';

interface PostPreviewProps {
  post: EditedPost;
  totalLikes: number;
  totalComments: number;
  noneProfile: boolean;
}

const PostPreview = ({
  post,
  totalLikes,
  totalComments,
  noneProfile = false
}: PostPreviewProps) => {
  const { content, _id } = post;

  return (
    <PreviewContainer>
      <PostHeaderContainer>
        <PostHeader
          post={post}
          totalLikes={totalLikes}
          totalComments={totalComments}
          noneProfile={noneProfile}
          showCommentStatus={true}
        />
      </PostHeaderContainer>
      <PostContentContainer>
        <Link
          pageLink={`/posts/${_id}`}
          color='black'>
          <PostContent>{content}</PostContent>
        </Link>
      </PostContentContainer>
    </PreviewContainer>
  );
};
export default PostPreview;
