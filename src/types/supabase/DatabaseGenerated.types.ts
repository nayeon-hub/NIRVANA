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
