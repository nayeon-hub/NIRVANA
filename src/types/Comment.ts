import { User } from '@/types/User';

export interface Comment {
  _id: number;
  comment: string;
  user: string | User;
  post: number;
  createdAt: string;
  updatedAt: string;
}

type OmitComment = Omit<Comment, 'user'>;

export interface CommentAddedUser extends OmitComment {
  user: User;
}
