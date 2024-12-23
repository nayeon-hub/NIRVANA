import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MeditationPage } from './Meditation.style';
import MeditationCircle from './components/MeditationCircle';
import { Icon } from '@components/Icon';
import {
  MeditationActionHeader,
  MeditationActionLayout
} from './Meditation.style';
import MeditationTimer from './components/MeditationTimer';

const MeditationAction = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { color: channelColor, label: channelLabel, setTime } = location.state;
  const [pause, setPause] = useState(false);

  return (
    <MeditationPage
      flex={'flexAlignCenter'}
      color={channelColor}>
      <MeditationActionHeader>
        <div
          onClick={() => {
            navigate('/meditation', {
              state: {
                ...location.state
              }
            });
          }}>
          <Icon
            name={'chevron_left'}
            size={40}
            color={'white'}
          />
        </div>
        {channelLabel}
      </MeditationActionHeader>
      <MeditationActionLayout>
        <MeditationCircle
          pause={pause}
          color={channelColor}
          mode='action'
        />
        <MeditationTimer
          settingTime={setTime}
          pause={pause}
          setPause={setPause}
        />
      </MeditationActionLayout>
    </MeditationPage>
  );
};

export default MeditationAction;
