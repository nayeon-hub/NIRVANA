export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
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
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
      PublicSchema['Views'])
  ? (PublicSchema['Tables'] &
      PublicSchema['Views'])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
  ? PublicSchema['Enums'][PublicEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
  ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
  : never;
