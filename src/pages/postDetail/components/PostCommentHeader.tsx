import { Icon } from '@components/Icon';
import { useMutation } from '@tanstack/react-query';
import { postLike, deleteLike } from '@apis/supabase/supabaseClient';
import {
  PostCommentHeaderContainer,
  PostCommentHeaderText,
  PostLikeContainer
} from './PostCommentHeader.style';
import { Like } from '@/types/Like';
// import { postNotifications } from '@apis/notice';

interface PostCommentHeaderProps {
  postId: string;
  token: string;
  likeCounts: number;
  refetch: () => void;
  myLike: Like;
  postCommentCount: number;
  userId?: string;
}

const PostCommentHeader = ({
  postId,
  refetch,
  myLike,
  likeCounts,
  userId,
  postCommentCount = 0
}: PostCommentHeaderProps) => {
  const { mutate, isLoading } = useMutation(
    () => {
      return myLike ? deleteLike(myLike._id) : postLike(postId);
    },
    {
      onSuccess: () => {
        console.log(userId);
        // !myLike &&
        //   postNotifications(token, {
        //     notificationType: 'LIKE',
        //     notificationTypeId: res._id,
        //     userId: userId,
        //     postId: res.post
        //   });
        refetch();
      }
    }
  );

  const handleLikeClick = () => {
    if (!isLoading) {
      mutate();
    }
  };

  return (
    <PostCommentHeaderContainer>
      <PostLikeContainer onClick={handleLikeClick}>
        <Icon
          name='favorite'
          color='purpleVivid'
          fill={myLike ? true : false}
        />
      </PostLikeContainer>
      <PostCommentHeaderText>{likeCounts}</PostCommentHeaderText>
      <PostCommentHeaderText>댓글 {postCommentCount}개</PostCommentHeaderText>
    </PostCommentHeaderContainer>
  );
};

export default PostCommentHeader;
