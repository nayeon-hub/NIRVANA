import { User } from './User';
import { Channel } from './Channel';
import { Comment, CommentAddedUser } from './Comment';
import { Like } from './Like';

export interface Post {
  _id: number;
  title: string;
  channel: number | Channel;
  createdAt: string;
  updatedAt: string;
  author: User;
  likes?: Like[];
  comments?: Comment[];
  image?: string;
  imagePublicId?: string;
  meditationTime?: number;
}

export interface EditedPost extends Post {
  content: string | undefined;
}

type OmitAuthorPost = Omit<Post, 'author'>;
type OmitCommentsPost = Omit<Post, 'comments'>;

export interface SearchEditedPost extends OmitAuthorPost {
  author: string;
}

export interface getPostSimpledComment extends OmitCommentsPost {
  comments: CommentAddedUser[];
}
