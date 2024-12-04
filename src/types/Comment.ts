import { User } from './User';

export interface Comment {
  _id: number;
  comment: string;
  author?: User;
  profiles?: User;
  post: number;
  createdAt: string;
  updatedAt: string;
}
