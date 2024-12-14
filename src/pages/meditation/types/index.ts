import { Theme } from '@emotion/react';
export interface MeditationStatusType {
  started: boolean;
  paused: boolean;
  ended: boolean;
}

export type meditationChannelsInfoType = {
  label: string;
  id: string;
  content: string;
  color: keyof Theme['color'];
};
