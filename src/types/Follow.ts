import { User } from './User';

export interface Follow {
  _id: number;
  user: string;
  follower: string;
  createdAt: string;
  updatedAt: string;
}

type OmitFollow = Omit<Follow, 'user'>;

export interface FollowAddedUser extends OmitFollow {
  user: User;
}
