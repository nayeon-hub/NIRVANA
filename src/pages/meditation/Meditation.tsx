import { useState } from 'react';
import { MeditationPage, PageH3 } from './Meditation.style';
import ThemeSlide from './components/ThemeSlide';
import MeditationCircle from './components/MeditationCircle';
import { meditationChannelsInfo } from './models/channelInfo';
import MeditationTimeSetting from './components/MeditationTimeSetting';
import { Button } from '@components/Button';

const timeArr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59
];

const Meditation = () => {
  const meditationChannels = meditationChannelsInfo;
  const [currentIdx, setCurrentIdx] = useState(0);
  const [currMin, setCurrMin] = useState(timeArr[0]);

  return (
    <MeditationPage
      flex={'flexAlignCenter'}
      color={meditationChannels[currentIdx].color}>
      <PageH3>천천히 심호흡을 해보세요</PageH3>
      <MeditationCircle
        time={8}
        color={meditationChannels[currentIdx].color}
      />
      <ThemeSlide
        mediTheme={meditationChannels}
        currentIdx={currentIdx}
        setCurrentIdx={setCurrentIdx}
      />
      <MeditationTimeSetting
        setCurrMin={setCurrMin}
        timeArr={timeArr}
      />
      <Button
        width={'100%'}
        height={'45px'}
        borderRadius={30}
        fontSize={15}
        handleClick={() => {
          console.log(currMin, meditationChannelsInfo[currentIdx]);
        }}>
        시작
      </Button>
    </MeditationPage>
  );
};

export default Meditation;
