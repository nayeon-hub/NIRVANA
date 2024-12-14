import { useState, useEffect, useRef, Dispatch } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Icon } from '@components/Icon';
import {
  MeditationTimerContainer,
  MeditationPlayBox,
  MeditationTimeBox
} from './MeditationTimer.style';

const MeditationTimer = ({
  settingTime,
  pause,
  setPause
}: {
  settingTime: number;
  pause: boolean;
  setPause: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [total, setTotal] = useState(settingTime * 60);
  const timerId = useRef(null);

  useEffect(() => {
    if (pause) {
      clearInterval(timerId.current);
    } else {
      timerId.current = setInterval(() => {
        setTotal((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timerId.current);
  }, [pause]);

  useEffect(() => {
    if (total === 0) {
      clearInterval(timerId.current);
      setPause(true);
      localStorage.removeItem('meditationInfo');

      const {
        label: channelLabel,
        id: channelId,
        color: channelColor,
        setTime: totalTime,
        currIdx: channelIdx
      } = location.state;

      navigate('/posting', {
        state: {
          channelLabel,
          channelColor,
          channelId,
          channelIdx,
          totalTime,
          validation: true
        }
      });
    }
  }, [total, setPause, navigate, location]);

  const min = Math.floor(total / 60);
  const sec = Math.floor(total % 60);

  return (
    <MeditationTimerContainer>
      <MeditationPlayBox>
        {pause ? (
          <div
            onClick={() => {
              setPause(false);
            }}>
            <Icon
              name={'play_circle'}
              size={60}
              color={'white'}
            />
          </div>
        ) : (
          <div
            onClick={() => {
              setPause(true);
            }}>
            <Icon
              name={'pause_circle'}
              size={60}
              color={'white'}
            />
          </div>
        )}
        <MeditationTimeBox
          onClick={() => {
            setPause(true);

            if (confirm('종료할까요?')) {
              localStorage.removeItem('meditationInfo');
              navigate('/posts');
            }
          }}>
          <Icon
            name={'stop_circle'}
            size={40}
            color={'white'}
          />
        </MeditationTimeBox>
      </MeditationPlayBox>
      <MeditationTimeBox>
        {min}:{sec < 10 ? `0${sec}` : sec}
      </MeditationTimeBox>
    </MeditationTimerContainer>
  );
};

export default MeditationTimer;
