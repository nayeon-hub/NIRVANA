import styled from '@emotion/styled';
import { keyframes, Theme } from '@emotion/react';

type CircleProps = {
  color: keyof Theme['color'];
  time: number;
  mode: string;
  pause: boolean;
};

export const CircleBox = styled.div<{ mode: string }>`
  position: relative;
  width: ${({ mode }) => (mode === 'notAction' ? '300px' : '400px')};
  height: ${({ mode }) => (mode === 'notAction' ? '300px' : '400px')};
  margin-bottom: 35px;
`;

export const CircleLine = styled.div<{ mode: string }>`
  position: absolute;
  width: ${({ mode }) => (mode === 'notAction' ? '200px' : '350px')};
  height: ${({ mode }) => (mode === 'notAction' ? '200px' : '350px')};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: ${({ mode }) => (mode === 'notAction' ? '5px' : '8px')} solid
    rgba(173, 181, 189, 0.1);
  border-radius: 50%;
`;

const CircleSFade = keyframes` 
  0% {
      transform: translate(-50%, -50%) scale(1);
  }
  50% {
      transform: translate(-50%, -50%) scale(1.15);  

  }
  100% {
      transform: translate(-50%, -50%) scale(1);  
  }`;

const CircleMFade = keyframes` 
  0% {
      transform: translate(-50%, -50%) scale(1);
  }
  50% {
      transform: translate(-50%, -50%) scale(1.3);  

  }
  100% {
      transform: translate(-50%, -50%) scale(1);  
  }`;

const CircleLFade = keyframes` 
  0% {
      transform: translate(-50%, -50%) scale(1);
  }
  50% {
      transform: translate(-50%, -50%) scale(1.45);  

  }
  100% {
      transform: translate(-50%, -50%) scale(1);  
  }`;

export const CircleSS = styled.div<CircleProps>`
  position: absolute;
  width: ${({ mode }) => (mode === 'notAction' ? '100px' : '200px')};
  height: ${({ mode }) => (mode === 'notAction' ? '100px' : '200px')};
  z-index: 4;
  border-radius: 50%;
  background: ${({ theme, color }) => theme.color[color]};
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  opacity: 0.9;
  animation-play-state: ${({ pause }) => (pause ? 'paused' : 'running')};
`;

export const CircleS = styled.div<CircleProps>`
  position: absolute;
  width: ${({ mode }) => (mode === 'notAction' ? '100px' : '200px')};
  height: ${({ mode }) => (mode === 'notAction' ? '100px' : '200px')};
  z-index: 3;
  border-radius: 50%;
  background: ${({ theme, color }) => theme.color[color]};
  animation: ${CircleSFade} ${({ time }) => time}s ease infinite;
  top: 50%;
  left: 50%;
  opacity: 0.8;
  animation-play-state: ${({ pause }) => (pause ? 'paused' : 'running')};
`;

export const CircleM = styled.div<CircleProps>`
  position: absolute;
  width: ${({ mode }) => (mode === 'notAction' ? '100px' : '200px')};
  height: ${({ mode }) => (mode === 'notAction' ? '100px' : '200px')};
  z-index: 2;
  border-radius: 50%;
  background: ${({ theme, color }) => theme.color[color]};
  top: 50%;
  left: 50%;
  animation: ${CircleMFade} ${({ time }) => time}s ease infinite;
  opacity: 0.7;
  animation-play-state: ${({ pause }) => (pause ? 'paused' : 'running')};
`;

export const CircleL = styled.div<CircleProps>`
  position: absolute;
  width: ${({ mode }) => (mode === 'notAction' ? '100px' : '200px')};
  height: ${({ mode }) => (mode === 'notAction' ? '100px' : '200px')};
  color: black;
  z-index: 1;
  border-radius: 50%;
  background: ${({ theme, color }) => theme.color[color]};
  top: 50%;
  left: 50%;
  animation: ${CircleLFade} ${({ time }) => time}s ease infinite;
  opacity: 0.6;
  animation-play-state: ${({ pause }) => (pause ? 'paused' : 'running')};
`;
