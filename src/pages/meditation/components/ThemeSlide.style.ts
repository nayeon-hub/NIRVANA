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

export const SlideMain = styled.div``;

export const SlideButtonContainer = styled.div``;

export const SlideButton = styled.button`
  background: none;
  outline: none;
  border: none;
  position: absolute;
  z-index: 1;
`;

export const SlideLeftButton = styled(SlideButton)`
  left: 10px;
  top: 35%;
`;

export const SlideRightButton = styled(SlideButton)`
  right: 10px;
  top: 35%;
`;

export const SlideItemContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
  user-select: none;
`;

export const SlideItemWrapper = styled.div`
  display: flex;
  transition: transform 1s;
`;

export const SlideItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
`;

export const SlidePagination = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;
export const SlideCircle = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#333' : '#aaa')};
`;

export const ThemeH2 = styled.h2`
  font-size: 23px;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 10px;
`;

export const ThemeSpan = styled.span`
  color: ${({ theme }) => theme.color.white};
  font-size: 15px;
`;
