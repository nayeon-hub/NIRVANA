import { Theme } from '@emotion/react';
import {
  CircleBox,
  CircleL,
  CircleM,
  CircleS,
  CircleSS,
  CircleLine
} from './MeditationCircle.style';

const MeditationCircle = ({
  time = 10,
  color,
  mode = 'notAction',
  pause = false
}: {
  time?: number;
  color: keyof Theme['color'];
  mode?: string;
  pause?: boolean;
}) => {
  return (
    <CircleBox mode={mode}>
      <CircleLine mode={mode}></CircleLine>
      <CircleL
        color={color}
        time={time}
        mode={mode}
        pause={pause}></CircleL>
      <CircleM
        color={color}
        time={time}
        mode={mode}
        pause={pause}></CircleM>
      <CircleS
        color={color}
        time={time}
        mode={mode}
        pause={pause}></CircleS>
      <CircleSS
        color={color}
        time={time}
        mode={mode}
        pause={pause}></CircleSS>
    </CircleBox>
  );
};

export default MeditationCircle;
