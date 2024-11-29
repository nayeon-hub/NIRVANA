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
  color
}: {
  time: number;
  color: keyof Theme['color'];
}) => {
  return (
    <CircleBox>
      <CircleLine></CircleLine>
      <CircleL
        color={color}
        time={time}></CircleL>
      <CircleM
        color={color}
        time={time}></CircleM>
      <CircleS
        color={color}
        time={time}></CircleS>
      <CircleSS
        color={color}
        time={time}></CircleSS>
    </CircleBox>
  );
};

export default MeditationCircle;
