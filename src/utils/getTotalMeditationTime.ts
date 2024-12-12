import { Post } from '@/types/Post';

const getTotalMeditationTime = (posts: Post[]) => {
  return posts.reduce((acc, cur) => acc + Number(cur.meditationTime), 0);
};

export default getTotalMeditationTime;
