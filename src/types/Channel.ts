export interface Channel {
  authRequired?: boolean; // 사용되지 않음
  posts?: string[];
  _id: number;
  name: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
}
