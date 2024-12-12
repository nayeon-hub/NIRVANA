import type { EditedPost, Post } from '@/types';

const editTimeForm = (time: string) => {
  return time.split('T')[0].split('-').join('.');
};

const editPostData = (posts: Post[] | unknown[]): EditedPost[] => {
  if (!posts) {
    return [];
  }
  return posts.map((post: Post) => {
    post.createdAt = editTimeForm(post.createdAt);
    post.updatedAt = editTimeForm(post.updatedAt);

    if (post.title.length === 0) {
      return { ...post, content: '내용이 없습니다.' };
    }

    return { ...post, content: post.title };
  });
};

export { editPostData };
