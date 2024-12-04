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

export const getEmailCheck = async (email: string) => {
  try {
    const response = await supabaseClient
      .from('profiles')
      .select('*')
      .eq('email', email);
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

export const postCreateNewPost = async (
  userId: string,
  formData: { title: string; meditationTime: number; channel: string }
) => {
  const response = await supabaseClient.from('posts').insert({
    ...formData,
    channel: parseInt(formData.channel)
  });

  return response;
};

export const getPosts = async (channelId: string, offset: number) => {
  const response = await supabaseClient
    .from('posts')
    .select(
      '_id, title, channel, image, meditationTime, updatedAt, createdAt, author, comments(_id, createdAt, updatedAt, post, comment, user), likes(_id, post, user, createdAt, updatedAt), profiles(_id, fullName, image, email, coverImage)'
    )
    .eq('channel', parseInt(channelId))
    .range(0, offset);

  return response;
};

export const getSearchPosts = async (query: string) => {
  try {
    const response = await supabaseClient
      .from('posts')
      .select(
        '_id, title, channel, image, meditationTime, updatedAt, createdAt, author, comments(_id, createdAt, updatedAt, post, comment, user), likes(_id, post, user, createdAt, updatedAt)'
      )
      .like('title', `%${query}%`);

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getSearchUsers = async (query: string) => {
  try {
    const response = await supabaseClient
      .from('profiles')
      .select('*')
      .like('fullName', `%${query}%`);

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async (author: string) => {
  try {
    const response = await supabaseClient
      .from('profiles')
      .select('*')
      .eq('_id', author)
      .single();

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getPost = async (postId: string) => {
  try {
    const response = await supabaseClient
      .from('posts')
      .select(
        '_id, title, channel, image, meditationTime, updatedAt, createdAt, author, comments(_id, createdAt, updatedAt, post, comment, profiles(_id, fullName, email, coverImage, image)), likes(_id, post, user, createdAt, updatedAt), profiles(_id, fullName, image, email, coverImage), channels(_id, name)'
      )
      .eq('_id', postId)
      .single();

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = async (postId: string) => {
  try {
    const response = await supabaseClient
      .from('posts')
      .select(
        '_id, title, channel, image, meditationTime, updatedAt, createdAt, author, comments(_id, createdAt, updatedAt, post, comment, author), likes(_id, post, user, createdAt, updatedAt), profiles(_id, fullName, image, email), channels(_id, name)'
      )
      .eq('_id', postId)
      .single();

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const postComment = async ({
  postId,
  comment
}: {
  postId: string;
  comment: string;
}) => {
  try {
    const response = await supabaseClient.from('comments').insert({
      post: parseInt(postId),
      comment: comment
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};
