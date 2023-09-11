import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getUserData } from '@/apis/user/getUserData';
import { ProfileInfoContainer, ProfilePage } from './Profile.style';
import { ProfileInfo } from './components/ProfileInfo';
import { ProfileCover } from './components/ProfileCover';
import { ProfileHeader } from './components/ProfileHeader';
import { ProfileTabs, ProfileTabItem } from './components/ProfileTabs';
import { ProfileCarousel } from './components/ProfileCarousel';
import { PROFILE_TABS } from './constants/profileTabs';

const Profile = () => {
  const { userId } = useParams<{ userId: string }>();

  const { data, isLoading, isError, error } = useQuery(
    ['userData', userId],
    () => getUserData(userId),
    { enabled: !!userId }
  );
  console.log(data, isLoading, isError, error);

  return (
    <ProfilePage>
      <ProfileCover src={isLoading ? '' : data.cover} />
      <ProfileInfoContainer>
        <ProfileInfo
          email={isLoading ? '' : data.email}
          fullName={isLoading ? '' : data.fullName}
          avatarImgSrc={isLoading ? '' : data.image}
          meditationStack={50}
        />
        <ProfileHeader />
        <ProfileTabs>
          <ProfileTabItem
            title={`${isLoading ? 0 : data.posts.length} ${
              PROFILE_TABS.MEDITATION
            }`}
            index={0}
          />
          <ProfileTabItem
            title={`${isLoading ? 0 : data.following.length} ${
              PROFILE_TABS.FOLLOWER
            }`}
            index={1}
          />
          <ProfileTabItem
            title={`${isLoading ? 0 : data.followers.length} ${
              PROFILE_TABS.FOLLOWING
            }`}
            index={2}
          />
          <ProfileTabItem
            title={`${PROFILE_TABS.INFO}`}
            index={3}
          />
        </ProfileTabs>
        <ProfileCarousel totalIndex={PROFILE_TABS.TOTAL_INDEX} />
      </ProfileInfoContainer>
    </ProfilePage>
  );
};

export default Profile;
