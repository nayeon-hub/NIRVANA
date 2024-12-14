import type { EditedPost } from '@/types';

import { PostPreview } from '@components/PostPreview';

interface PostPreviewListProps {
  postsData: EditedPost[];
}

const PostPreviewList = ({ postsData }: PostPreviewListProps) => {
  return (
    <>
      {postsData.map((post: EditedPost, index) => {
        const { title, likes, comments } = post;
        return (
          title !== '' && (
            <PostPreview
              key={index}
              post={post}
              totalLikes={likes.length}
              totalComments={comments.length}
              noneProfile={false}
            />
          )
        );
      })}
    </>
  );
};

export default PostPreviewList;
