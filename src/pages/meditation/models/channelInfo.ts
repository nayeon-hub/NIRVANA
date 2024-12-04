import { Theme } from '@emotion/react';
import {
  ANXIETY_KEY,
  CONCENTRATION_KEY,
  FREEDOM_KEY,
  RELAXATION_KEY
} from '@pages/meditation/constants';

export const meditationChannelInfo = new Map([
  [
    CONCENTRATION_KEY,
    { label: '집중', id: '1', content: '마음의 진정과 스트레스 완화' }
  ],
  [
    ANXIETY_KEY,
    { label: '균형', id: '2', content: '몸의 긴장을 풀고 현재에 머무르기' }
  ],
  [
    FREEDOM_KEY,
    {
      label: '회복',
      id: '65017abcdfe8db5726b603c3',
      content: '몸을 강화하고 에너지 회복하기'
    }
  ],
  [
    RELAXATION_KEY,
    {
      label: '집중',
      id: '65017aa2dfe8db5726b603ba',
      content: '집중력을 높이고 수행 능력 향상하기'
    }
  ]
]);

export const meditationChannelsInfo: {
  label: string;
  id: string;
  content: string;
  color: keyof Theme['color'];
}[] = [
  {
    label: '휴식',
    id: '1',
    content: '마음의 진정과 스트레스 완화',
    color: 'linearGradientPurple'
  },
  {
    label: '균형',
    id: '2',
    content: '몸의 긴장을 풀고 현재에 머무르기',
    color: 'linearGradientBlue'
  },
  {
    label: '회복',
    id: '3',
    content: '몸을 강화하고 에너지 회복하기',
    color: 'linearGradientGreen'
  },
  {
    label: '집중',
    id: '4',
    content: '집중력을 높이고 수행 능력 향상하기',
    color: 'linearGradientYellow'
  }
];
