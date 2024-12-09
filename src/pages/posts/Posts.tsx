import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { meditationChannelInfo } from '@pages/meditation/models/channelInfo';
import { PostContents } from './components/PostContents';
import { ThemeInfoType } from '@components/ThemePicker/ThemePicker';
import { StyledPostsPage, ThemePickerContainer } from './Posts.style';
import { CONCENTRATION_KEY } from '@pages/meditation/constants';
import { Button } from '@components/Button';

const Posts = () => {
  const locate = useLocation();
  const [channel, setChannel] = useState<ThemeInfoType>(
    locate.state?.channelInfo
      ? locate.state.channelInfo
      : meditationChannelInfo.get(CONCENTRATION_KEY)
  );
  const [picked, setPicked] = useState<ThemeInfoType>(
    meditationChannelInfo.get(CONCENTRATION_KEY)
  );

  const clickThemePicker = (selected: ThemeInfoType) => {
    setChannel(selected);
  };

  return (
    <StyledPostsPage>
      <ThemePickerContainer>
        {Array.from(meditationChannelInfo).map(([key, value]) => (
          <Button
            key={key}
            width='80px'
            height='28px'
            bold={false}
            dark={picked.label === value.label}
            label={value.label}
            handleClick={() => {
              setPicked(value);
              clickThemePicker && clickThemePicker(value);
            }}
          />
        ))}
      </ThemePickerContainer>
      <PostContents channel={channel} />
    </StyledPostsPage>
  );
};

export default Posts;
