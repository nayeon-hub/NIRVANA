import { PostCommentsSection } from './PostComments.style';
import { PostComment, PostCommentHeader } from './';
import { CommentAddedUser } from '@/types/Comment';
import { Like } from '@/types/Like';

interface PostCommentsProps {
  postId: string;
  token: string;
  currentUserId: string;
  comments: CommentAddedUser[];
  refetch: () => void;
  myLike: Like;
  likeCounts: number;
  userId?: string;
}

const PostComments = ({
  postId,
  token,
  currentUserId,
  refetch,
  comments,
  myLike,
  likeCounts,
  userId
}: PostCommentsProps) => {
  return (
    <PostCommentsSection>
      <PostCommentHeader
        userId={userId}
        postId={postId}
        token={token}
        refetch={refetch}
        myLike={myLike}
        likeCounts={likeCounts}
        postCommentCount={comments?.length}
      />
      {comments?.map((comment) => (
        <PostComment
          key={comment._id}
          id={comment._id}
          author={comment.user}
          text={comment.comment}
          myComment={comment.user._id === currentUserId}
          refetch={refetch}
        />
      ))}
    </PostCommentsSection>
  );
};

export default PostComments;
