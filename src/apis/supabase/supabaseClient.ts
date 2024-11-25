import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase/DatabaseGenerated.types';

const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

const supabaseClient = createClient<Database>(supabaseUrl, supabaseKey);

export const postSignUpUser = async (userData: {
  email: string;
  password: string;
  fullName: string;
}) => {
  try {
    const response = await supabaseClient.auth.signUp({
      email: userData.email,
      password: userData.password,
      options: {
        data: {
          fullName: userData.fullName
        }
      }
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const postLogInUser = async (userData: {
  email: string;
  password: string;
}) => {
  try {
    const response = await supabaseClient.auth.signInWithPassword({
      email: userData.email,
      password: userData.password
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const postCreateNewPost = async (userId: string, formData: FormData) => {
  const response = await supabaseClient.from('posts').insert({
    ...formData,
    channel: parseInt(formData.channel),
    author: userId
  });

  return response;
};

export const getPosts = async (channelId: string, offset: number) => {
  const response = await supabaseClient
    .from('posts')
    .select(
      '_id, title, channel, image, meditationTime, updated_at, created_at, comments(_id, created_at, updated_at, post, comment, author), likes(_id, post, user, created_at, updated_at) author:profiles(_id, full_name)'
    )
    .eq('channel', parseInt(channelId));

  return response;
};
