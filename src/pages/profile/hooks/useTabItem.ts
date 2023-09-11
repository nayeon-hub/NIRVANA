import { User } from '@/types';
import { PROFILE_TABS } from '../constants/profileTabs';

export const useTabItem = (
  tabData: Pick<User, 'followers' | 'following' | 'posts'>,
  isLoading: boolean
) => {
  const tabItems = [
    {
      label: PROFILE_TABS.MEDITATION,
      value: isLoading ? 0 : tabData.posts.length,
      data: isLoading ? [] : tabData.posts
    },
    {
      label: PROFILE_TABS.FOLLOWING,
      value: isLoading ? 0 : tabData.following.length,
      data: isLoading ? [] : tabData.following
    },
    {
      label: PROFILE_TABS.FOLLOWER,
      value: isLoading ? 0 : tabData.followers.length,
      data: isLoading ? [] : tabData.followers
    },
    {
      label: PROFILE_TABS.INFO,
      value: '',
      data: isLoading ? [] : [tabData.posts.length]
    }
  ];

  return { tabItems };
};
