import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { meditationChannelsInfo } from '@pages/meditation/models/channelInfo';
import { PostContents } from './components/PostContents';
import { StyledPostsPage, ThemePickerContainer } from './Posts.style';
import { Button } from '@components/Button';
import { meditationChannelsInfoType } from '@pages/meditation/types';
import ApiErrorBoundary from '@/ApiErrorBoundary';

const Posts = () => {
  const locate = useLocation();
  const [channelIdx, setChannelIdx] = useState<number>(
    locate.state?.channelInfo ? locate.state.channelInfo.idx : 0
  );

  const [picked, setPicked] = useState<meditationChannelsInfoType>(
    meditationChannelsInfo[channelIdx]
  );

  const clickThemePicker = (selectedIdx: number) => {
    setChannelIdx(selectedIdx);
  };

  return (
    <StyledPostsPage>
      <ThemePickerContainer>
        {meditationChannelsInfo.map((value, idx) => {
          return (
            <Button
              key={value.id}
              width='80px'
              height='28px'
              bold={false}
              dark={picked.label === value.label}
              label={value.label}
              handleClick={() => {
                setPicked(value);
                clickThemePicker && clickThemePicker(idx);
              }}
            />
          );
        })}
      </ThemePickerContainer>
      <ApiErrorBoundary>
        <PostContents channel={meditationChannelsInfo[channelIdx]} />
      </ApiErrorBoundary>
    </StyledPostsPage>
  );
};

export default Posts;
