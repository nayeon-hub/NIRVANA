import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
type MeditationPageProps = {
  flex: keyof Theme['style'];
  color: keyof Theme['color'];
};

export const MeditationPage = styled.div<MeditationPageProps>`
  ${({ theme, flex }) => theme.style[flex]};
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: ${({ theme, color }) => theme.color[color]};
  position: relative;
  padding: 60px 20px 0;
`;

export const PageH3 = styled.h3`
  font-size: 15px;
  color: ${({ theme }) => theme.color.white};
  letter-spacing: 1px;
  margin-bottom: 53px;
`;
