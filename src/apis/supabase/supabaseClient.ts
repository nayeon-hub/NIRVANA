import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase/DatabaseGenerated.types';
import { User } from '@/types/User';
import { Post, SearchEditedPost, getPostSimpledComment } from '@/types/Post';
import { v4 as uuid } from 'uuid';

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

export const putUpdatePassword = async (password: string) => {
  const response = await supabaseClient.auth.updateUser({
    password: password
  });

  return response;
};

export const LogOutUser = async () => {
  try {
    const response = await supabaseClient.auth.signOut();

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

export const getPosts = async (
  channelId: string,
  offset: number
): Promise<Post[]> => {
  const response = await supabaseClient
    .from('posts')
    .select(
      '_id, title, channel, image, meditationTime, updatedAt, createdAt, author:profiles(_id, fullName, image, email, coverImage), comments(_id, createdAt, updatedAt, post, comment, user), likes(_id, post, user, createdAt, updatedAt)'
    )
    .eq('channel', parseInt(channelId))
    .order('createdAt', { ascending: false })
    .range(offset, offset + 9);

  return response.data;
};

export const getSearchPosts = async (
  query: string
): Promise<SearchEditedPost[]> => {
  try {
    const response = await supabaseClient
      .from('posts')
      .select(
        '_id, title, channel, image, meditationTime, updatedAt, createdAt, author, comments(_id, createdAt, updatedAt, post, comment, user), likes(_id, post, user, createdAt, updatedAt)'
      )
      .like('title', `%${query}%`);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getSearchUsers = async (query: string): Promise<User[]> => {
  try {
    const response = await supabaseClient
      .from('profiles')
      .select('_id, createdAt, updatedAt, fullName, image, email, coverImage')
      .like('fullName', `%${query}%`);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async (author: string): Promise<User> => {
  try {
    const response = await supabaseClient
      .from('profiles')
      .select(
        '_id, createdAt, updatedAt, fullName, image, email, coverImage, followers(_id, user, follower, createdAt, updatedAt), following:followers(_id, user, follower, createdAt, updatedAt), comments(_id), posts(_id, image, author:profiles(_id, createdAt, updatedAt, fullName, image, email, coverImage), title, meditationTime, updatedAt, createdAt, channel, likes(_id, user, post, createdAt, updatedAt), comments(_id, user, post, createdAt, updatedAt, comment))'
      )
      .eq('_id', author)
      .single();

    return {
      ...response.data,
      comments: Object.values(response.data.comments).map((el) => el.toString())
    };
  } catch (err) {
    console.log(err);
  }
};

export const putUpdateUser = async ({
  fullName,
  userId
}: {
  fullName: string;
  userId: string;
}) => {
  const response = await supabaseClient
    .from('profiles')
    .update({ fullName: fullName })
    .eq('_id', userId);
  return response.data;
};

export const getPost = async (
  postId: string
): Promise<getPostSimpledComment> => {
  try {
    const response = await supabaseClient
      .from('posts')
      .select(
        '_id, title, image, meditationTime, updatedAt, createdAt, author:profiles(_id, fullName, image, email, coverImage), comments(_id, createdAt, updatedAt, post, comment, user:profiles(_id, createdAt, updatedAt, fullName, image, email, coverImage)), likes(_id, post, user, createdAt, updatedAt), channel'
      )
      .eq('_id', postId)
      .single();

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const putPost = async ({
  postData,
  postId
}: {
  postData: string;
  postId: number;
}) => {
  const response = await supabaseClient
    .from('posts')
    .update({ title: postData })
    .eq('_id', postId);
  return response;
};

export const deletePost = async ({ postId }: { postId: number }) => {
  const response = await supabaseClient
    .from('posts')
    .delete()
    .eq('_id', postId);
  return response;
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

export const deleteComment = async ({ id }: { id: number }) => {
  const response = await supabaseClient.from('comments').delete().eq('_id', id);
  return response;
};

export const postLike = async (postId: string) => {
  const response = await supabaseClient.from('likes').insert({
    post: parseInt(postId)
  });
  return response;
};

export const deleteLike = async (id: number) => {
  const response = await supabaseClient.from('likes').delete().eq('_id', id);
  return response;
};

export const postUploadPhoto = async (
  image: File,
  userId: string,
  isCover: boolean
) => {
  try {
    const newFileName = uuid();
    const { data } = await supabaseClient.storage
      .from('avatars')
      .upload(`${newFileName}`, image);
    if (isCover) {
      await supabaseClient
        .from('profiles')
        .update({
          coverImage: `${supabaseUrl}/storage/v1/object/public/${data.fullPath}`
        })
        .eq('_id', userId);
    } else {
      await supabaseClient
        .from('profiles')
        .update({
          image: `${supabaseUrl}/storage/v1/object/public/${data.fullPath}`
        })
        .eq('_id', userId);
    }
  } catch (err) {
    console.log(err);
  }
};
