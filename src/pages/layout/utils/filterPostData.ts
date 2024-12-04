import { SearchEditedPost } from '@/types';
import isPost from '../types/typeGuard';
import { Database } from '@/types/supabase/Database.types';
import { Post } from '@/types';

const filterPostData = (resultData: Post[]): Post[] => {
  return resultData.filter(isPost);
};

export default filterPostData;
