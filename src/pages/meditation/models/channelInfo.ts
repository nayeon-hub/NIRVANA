import {
  ANXIETY_KEY,
  CONCENTRATION_KEY,
  FREEDOM_KEY,
  RELAXATION_KEY,
  STRESS_KEY
} from '@pages/meditation/constants';

export const meditationChannelInfo = new Map([
  [CONCENTRATION_KEY, { label: '집중', id: '1' }],
  [ANXIETY_KEY, { label: '불안', id: '2' }],
  [FREEDOM_KEY, { label: '자유', id: '65017abcdfe8db5726b603c3' }],
  [RELAXATION_KEY, { label: '휴식', id: '65017aa2dfe8db5726b603ba' }],
  [STRESS_KEY, { label: '스트레스', id: '65017a5edfe8db5726b603b1' }]
]);

type ChannelValue = {
  label: string;
  id: string;
};

export interface meditationChannelsInfo {
  [CONCENTRATION_KEY]: ChannelValue;
  [ANXIETY_KEY]: ChannelValue;
  [FREEDOM_KEY]: ChannelValue;
  [RELAXATION_KEY]: ChannelValue;
  [STRESS_KEY]: ChannelValue;
}

export const meditationChannelsInfo: meditationChannelsInfo = {
  [CONCENTRATION_KEY]: { label: '집중', id: '1' },
  [ANXIETY_KEY]: { label: '불안', id: '2' },
  [FREEDOM_KEY]: { label: '자유', id: '65017abcdfe8db5726b603c3' },
  [RELAXATION_KEY]: { label: '휴식', id: '65017aa2dfe8db5726b603ba' },
  [STRESS_KEY]: { label: '스트레스', id: '65017a5edfe8db5726b603b1' }
};
