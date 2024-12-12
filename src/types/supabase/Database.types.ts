import { MergeDeep } from 'type-fest';
import { Database as DatabaseGenerated } from './DatabaseGenerated.types';

export type Database = MergeDeep<
  DatabaseGenerated,
  {
    public: {
      Tables: {
        channels: {
          Row: {
            _id: number;
            authRequired: boolean | null;
            createdAt: string;
            description: string | null;
            name: string | null;
            posts: number | null;
            updatedAt: string;
          };
          Insert: {
            _id?: number;
            authRequired?: boolean | null;
            createdAt?: string;
            description?: string | null;
            name?: string | null;
            posts?: number | null;
            updatedAt?: string;
          };
          Update: {
            _id?: number;
            authRequired?: boolean | null;
            createdAt?: string;
            description?: string | null;
            name?: string | null;
            posts?: number | null;
            updatedAt?: string;
          };
          Relationships: [];
        };
        comments: {
          Row: {
            _id: number;
            comment: string | null;
            createdAt: string;
            post: number | null;
            updatedAt: string | null;
            user: string | null;
          };
          Insert: {
            _id?: number;
            comment?: string | null;
            createdAt?: string;
            post?: number | null;
            updatedAt?: string | null;
            user?: string | null;
          };
          Update: {
            _id?: number;
            comment?: string | null;
            createdAt?: string;
            post?: number | null;
            updatedAt?: string | null;
            user?: string | null;
          };
          Relationships: [
            {
              foreignKeyName: 'comments_post_fkey';
              columns: ['post'];
              isOneToOne: false;
              referencedRelation: 'posts';
              referencedColumns: ['_id'];
            },
            {
              foreignKeyName: 'comments_user_fkey';
              columns: ['user'];
              isOneToOne: false;
              referencedRelation: 'profiles';
              referencedColumns: ['_id'];
            }
          ];
        };
        followers: {
          Row: {
            _id: number;
            createdAt: string;
            follower: string;
            updatedAt: string;
            user: string;
          };
          Insert: {
            _id?: number;
            createdAt?: string;
            follower?: string;
            updatedAt?: string;
            user: string;
          };
          Update: {
            _id?: number;
            createdAt?: string;
            follower?: string;
            updatedAt?: string;
            user?: string;
          };
          Relationships: [
            {
              foreignKeyName: 'follows_user_fkey';
              columns: ['user'];
              isOneToOne: false;
              referencedRelation: 'profiles';
              referencedColumns: ['_id'];
            }
          ];
        };
        likes: {
          Row: {
            _id: number;
            createdAt: string;
            post: number;
            updatedAt: string;
            user: string;
          };
          Insert: {
            _id?: number;
            createdAt?: string;
            post: number;
            updatedAt?: string;
            user?: string;
          };
          Update: {
            _id?: number;
            createdAt?: string;
            post?: number;
            updatedAt?: string;
            user?: string;
          };
          Relationships: [
            {
              foreignKeyName: 'likes_post_fkey';
              columns: ['post'];
              isOneToOne: false;
              referencedRelation: 'posts';
              referencedColumns: ['_id'];
            },
            {
              foreignKeyName: 'likes_user_fkey';
              columns: ['user'];
              isOneToOne: false;
              referencedRelation: 'profiles';
              referencedColumns: ['_id'];
            }
          ];
        };
        posts: {
          Row: {
            _id: number;
            author: string;
            channel: number;
            createdAt: string;
            image: string | null;
            meditationTime: number;
            title: string;
            updatedAt: string;
          };
          Insert: {
            _id?: number;
            author?: string;
            channel: number;
            createdAt?: string;
            image?: string | null;
            meditationTime: number;
            title?: string;
            updatedAt?: string;
          };
          Update: {
            _id?: number;
            author?: string;
            channel?: number;
            createdAt?: string;
            image?: string | null;
            meditationTime?: number;
            title?: string;
            updatedAt?: string;
          };
          Relationships: [
            {
              foreignKeyName: 'posts_author_fkey';
              columns: ['author'];
              isOneToOne: false;
              referencedRelation: 'profiles';
              referencedColumns: ['_id'];
            },
            {
              foreignKeyName: 'posts_channel_fkey';
              columns: ['channel'];
              isOneToOne: false;
              referencedRelation: 'channels';
              referencedColumns: ['_id'];
            }
          ];
        };
        profiles: {
          Row: {
            _id: string;
            coverImage: string | null;
            createdAt: string;
            email: string;
            following: string[] | null;
            fullName: string;
            image: string | null;
            updatedAt: string;
          };
          Insert: {
            _id?: string;
            coverImage?: string | null;
            createdAt: string;
            email: string;
            following?: string[] | null;
            fullName: string;
            image?: string | null;
            updatedAt: string;
          };
          Update: {
            _id?: string;
            coverImage?: string | null;
            createdAt?: string;
            email?: string;
            following?: string[] | null;
            fullName?: string;
            image?: string | null;
            updatedAt?: string;
          };
          Relationships: [];
        };
      };
      Views: {
        [_ in never]: never;
      };
      Functions: {
        [_ in never]: never;
      };
      Enums: {
        [_ in never]: never;
      };
      CompositeTypes: {
        [_ in never]: never;
      };
    };
  }
>;
