import { User } from './User';
import { Channel } from './Channel';
import { Comment } from './Comment';
import { Like } from './Like';

export interface Post {
  likes: Like[];
  comments: Comment[];
  _id: number;
  image?: string;
  imagePublicId?: string;
  title: string;
  channel: number | Channel;
  author: User | string;
  createdAt: string;
  updatedAt: string;
  profiles: User;
  meditationTime?: number;
}

export interface EditedPost extends Post {
  content: string | undefined;
}

type OmitPost = Omit<Post, 'author'>;

export interface SearchEditedPost extends OmitPost {
  author: string;
}

export type RawTitleData = {
  title: string;
  meditationTime: number;
};
