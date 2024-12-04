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
          Relationships: [
            {
              foreignKeyName: 'channels_posts_fkey';
              columns: ['posts'];
              isOneToOne: false;
              referencedRelation: 'posts';
              referencedColumns: ['_id'];
            }
          ];
        };
        comments: {
          Row: {
            _id: number;
            comment: string | null;
            createdAt: string;
            post: number | null;
            updatedAt: string;
            user: string | null;
          };
          Insert: {
            _id?: number;
            comment?: string | null;
            createdAt?: string;
            post?: number | null;
            updatedAt?: string;
            user?: string | null;
          };
          Update: {
            _id?: number;
            comment?: string | null;
            createdAt?: string;
            post?: number | null;
            updatedAt?: string;
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
        likes: {
          Row: {
            _id: number;
            createdAt: string;
            post: number | null;
            updatedAt: string;
            user: string | null;
          };
          Insert: {
            _id?: number;
            createdAt?: string;
            post?: number | null;
            updatedAt?: string;
            user?: string | null;
          };
          Update: {
            _id?: number;
            createdAt?: string;
            post?: number | null;
            updatedAt?: string;
            user?: string | null;
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
            author: string | null;
            channel: number | null;
            comments: number | null;
            createdAt: string;
            image: string | null;
            likes: number | null;
            meditationTime: number | null;
            title: string | null;
            updatedAt: string;
          };
          Insert: {
            _id?: number;
            author?: string | null;
            channel?: number | null;
            comments?: number | null;
            createdAt?: string;
            image?: string | null;
            likes?: number | null;
            meditationTime?: number | null;
            title?: string | null;
            updatedAt?: string;
          };
          Update: {
            _id?: number;
            author?: string | null;
            channel?: number | null;
            comments?: number | null;
            createdAt?: string;
            image?: string | null;
            likes?: number | null;
            meditationTime?: number | null;
            title?: string | null;
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
            createdAt: string | null;
            email: string | null;
            fullName: string | null;
            image: string | null;
            updatedAt: string | null;
          };
          Insert: {
            _id: string;
            coverImage?: string | null;
            createdAt?: string | null;
            email?: string | null;
            fullName?: string | null;
            image?: string | null;
            updatedAt?: string | null;
          };
          Update: {
            _id?: string;
            coverImage?: string | null;
            createdAt?: string | null;
            email?: string | null;
            fullName?: string | null;
            image?: string | null;
            updatedAt?: string | null;
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
