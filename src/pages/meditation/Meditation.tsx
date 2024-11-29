import { useState } from 'react';
import { MeditationPage } from './Meditation.style';
import ThemeSlide from './components/ThemeSlide';
import MeditationCircle from './components/MeditationCircle';
import { meditationChannelsInfo } from './models/channelInfo';

const Meditation = () => {
  const meditationChannels = meditationChannelsInfo;
  const [currentIdx, setCurrentIdx] = useState(0);

  return (
    <MeditationPage color={meditationChannels[currentIdx].color}>
      <MeditationCircle
        time={10}
        color={meditationChannels[currentIdx].color}
      />
      <ThemeSlide
        mediTheme={meditationChannels}
        currentIdx={currentIdx}
        setCurrentIdx={setCurrentIdx}
      />
    </MeditationPage>
  );
};

export default Meditation;
