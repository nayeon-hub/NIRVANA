import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
type MeditationPageProps = {
  color: keyof Theme['color'];
};

export const MeditationPage = styled.div<MeditationPageProps>`
  ${({ theme }) => theme.style.flexCenter};
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: ${({ theme, color }) => theme.color[color]};
  position: relative;
`;
