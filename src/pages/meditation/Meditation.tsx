import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ThemeSlide from './components/ThemeSlide';
import MeditationCircle from './components/MeditationCircle';
import MeditationTimeSetting from './components/MeditationTimeSetting';
import { Button } from '@components/Button';
import { Icon } from '@components/Icon';

import {
  MeditationMainHeader,
  MeditationPage,
  PageH3
} from './Meditation.style';
import { meditationChannelsInfo } from './models/channelInfo';
import { TIME_ARRAY } from './constants';
import useLocalStorage from '@hooks/useLocalStorage';

const Meditation = () => {
  const navigate = useNavigate();
  const [meditationData, setMeditationData] = useLocalStorage(
    'meditationInfo',
    {
      setTime: TIME_ARRAY[0],
      currIdx: 0
    }
  );
  const meditationChannels = meditationChannelsInfo;
  const [themCurrentIdx, setThemeCurrentIdx] = useState(meditationData.currIdx);
  const [currMin, setCurrMin] = useState(meditationData.setTime);

  return (
    <MeditationPage
      flex={'flexAlignCenter'}
      color={meditationChannels[themCurrentIdx].color}>
      <MeditationMainHeader>
        <div
          onClick={() => {
            navigate('/posts');
            localStorage.removeItem('meditationInfo');
          }}>
          <Icon
            name={'close'}
            size={40}
            color={'white'}
          />
        </div>
        <PageH3>천천히 심호흡을 해보세요</PageH3>
      </MeditationMainHeader>
      <MeditationCircle
        time={8}
        color={meditationChannels[themCurrentIdx].color}
      />
      <ThemeSlide
        mediTheme={meditationChannels}
        themCurrentIdx={themCurrentIdx}
        setThemeCurrentIdx={setThemeCurrentIdx}
      />
      <MeditationTimeSetting
        initialSlide={currMin}
        setCurrMin={setCurrMin}
        timeArr={TIME_ARRAY}
      />
      <Button
        width='100%'
        height='45px'
        borderRadius={30}
        fontSize={15}
        handleClick={() => {
          setMeditationData({
            setTime: currMin,
            currIdx: themCurrentIdx
          });
          navigate('/meditation/action', {
            state: {
              ...meditationChannelsInfo[themCurrentIdx],
              setTime: currMin,
              currIdx: themCurrentIdx
            }
          });
        }}>
        시작
      </Button>
    </MeditationPage>
  );
};

export default Meditation;
