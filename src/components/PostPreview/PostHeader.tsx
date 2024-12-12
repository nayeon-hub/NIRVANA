import type { EditedPost } from '@/types';
import { Icon } from '../Icon';
import { Avatar } from '../Avatar';
import {
  AvatarContainer,
  PostInfoContainer,
  PostDetailInfoContainer,
  UserContainer,
  NameContainer,
  IdContainer
} from './PostPreview.style';
import { Link } from '@components/Link';
import { UserId } from '@components/UserText';

interface PostHeaderProps {
  post: Pick<EditedPost, '_id' | 'createdAt' | 'meditationTime' | 'author'>;
  totalLikes?: number;
  totalComments?: number;
  noneProfile: boolean;
  showCommentStatus: boolean;
}

const PostHeader = ({
  post,
  totalLikes,
  totalComments,
  noneProfile,
  showCommentStatus
}: PostHeaderProps) => {
  const {
    author: { _id: authorId, fullName, image, email },
    createdAt,
    meditationTime,
    _id
  } = post;
  const iconDescription = [
    { name: 'favorite', size: 12, total: totalLikes },
    { name: 'chat', size: 12, total: totalComments }
  ];

  return (
    <>
      {!noneProfile && (
        <AvatarContainer>
          <Link
            pageLink={`/profile/${authorId}`}
            color='black'>
            <Avatar
              alt={fullName}
              src={image}
              size={45}
            />
          </Link>
        </AvatarContainer>
      )}
      <PostInfoContainer>
        <Link
          setActiveStyle={false}
          pageLink={`/posts/${_id}`}
          color='black'>
          {!noneProfile && (
            <UserContainer>
              <NameContainer>{fullName}</NameContainer>
              <IdContainer>
                <UserId email={email} />
              </IdContainer>
            </UserContainer>
          )}
          <PostDetailInfoContainer noneProfile={noneProfile}>
            {createdAt} / {meditationTime}분
            {showCommentStatus &&
              iconDescription.map((iconInfo, index) => {
                return (
                  <div key={index}>
                    <Icon
                      name={iconInfo.name}
                      size={iconInfo.size}
                      color={'greyLight'}
                    />
                    {iconInfo.total}
                  </div>
                );
              })}
          </PostDetailInfoContainer>
        </Link>
      </PostInfoContainer>
    </>
  );
};

export default PostHeader;
