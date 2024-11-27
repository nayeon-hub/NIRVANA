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
            auth_required: boolean | null;
            created_at: string;
            description: string | null;
            name: string | null;
            updated_at: string | null;
          };
          Insert: {
            _id?: number;
            auth_required?: boolean | null;
            created_at?: string;
            description?: string | null;
            name?: string | null;
            updated_at?: string | null;
          };
          Update: {
            _id?: number;
            auth_required?: boolean | null;
            created_at?: string;
            description?: string | null;
            name?: string | null;
            updated_at?: string | null;
          };
          Relationships: [];
        };
        comments: {
          Row: {
            _id: number;
            author: string | null;
            comment: string | null;
            created_at: string;
            post: number | null;
            updated_at: string | null;
          };
          Insert: {
            _id?: number;
            author?: string | null;
            comment?: string | null;
            created_at?: string;
            post?: number | null;
            updated_at?: string | null;
          };
          Update: {
            _id?: number;
            author?: string | null;
            comment?: string | null;
            created_at?: string;
            post?: number | null;
            updated_at?: string | null;
          };
          Relationships: [
            {
              foreignKeyName: 'comments_author_fkey';
              columns: ['author'];
              isOneToOne: false;
              referencedRelation: 'profiles';
              referencedColumns: ['_id'];
            },
            {
              foreignKeyName: 'comments_post_fkey';
              columns: ['post'];
              isOneToOne: false;
              referencedRelation: 'posts';
              referencedColumns: ['_id'];
            }
          ];
        };
        likes: {
          Row: {
            _id: number;
            created_at: string;
            post: number | null;
            updated_at: string | null;
            user: string | null;
          };
          Insert: {
            _id?: number;
            created_at?: string;
            post?: number | null;
            updated_at?: string | null;
            user?: string | null;
          };
          Update: {
            _id?: number;
            created_at?: string;
            post?: number | null;
            updated_at?: string | null;
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
            created_at: string;
            image: string | null;
            meditationTime: number | null;
            title: string | null;
            updated_at: string | null;
          };
          Insert: {
            _id?: number;
            author?: string | null;
            channel?: number | null;
            created_at?: string;
            image?: string | null;
            meditationTime?: number | null;
            title?: string | null;
            updated_at?: string | null;
          };
          Update: {
            _id?: number;
            author?: string | null;
            channel?: number | null;
            created_at?: string;
            image?: string | null;
            meditationTime?: number | null;
            title?: string | null;
            updated_at?: string | null;
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
            cover_image: string | null;
            created_at: string | null;
            email: string | null;
            full_name: string | null;
            image: string | null;
            updated_at: string | null;
          };
          Insert: {
            _id: string;
            cover_image?: string | null;
            created_at?: string | null;
            email?: string | null;
            full_name?: string | null;
            image?: string | null;
            updated_at?: string | null;
          };
          Update: {
            _id?: string;
            cover_image?: string | null;
            created_at?: string | null;
            email?: string | null;
            full_name?: string | null;
            image?: string | null;
            updated_at?: string | null;
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
