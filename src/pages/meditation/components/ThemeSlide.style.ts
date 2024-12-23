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

export const SlideMain = styled.div`
  /* margin-bottom: 34px; */
`;

export const SlideButtonContainer = styled.div``;

export const SlideButton = styled.button`
  background: none;
  outline: none;
  border: none;
  position: absolute;
  z-index: 1;
  opacity: 0.7;
`;

export const SlideLeftButton = styled(SlideButton)`
  left: 10px;
  top: 20%;
  height: 300px;

  @media (min-width: 320px) and (max-width: 400px) {
    top: 12%;
  }

  @media (min-width: 401px) and (max-width: 884px) {
    top: 19%;
  }
`;

export const SlideRightButton = styled(SlideButton)`
  right: 10px;
  top: 20%;
  height: 300px;

  @media (min-width: 320px) and (max-width: 400px) {
    top: 12%;
  }

  @media (min-width: 401px) and (max-width: 884px) {
    top: 19%;
  }
`;

export const SlideItemContainer = styled.div`
  width: 100%;
  height: 110px;
  position: relative;
  overflow: hidden;
  user-select: none;
  @media (min-width: 320px) and (max-width: 400px) {
    height: 90px;
  }
`;

export const SlideItemWrapper = styled.div`
  display: flex;
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

  @media (min-width: 320px) and (max-width: 400px) {
    bottom: 20px;
  }
  @media (min-width: 401px) and (max-width: 884px) {
  }
`;
export const SlideCircle = styled.div<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  background-color: ${({ theme, active }) =>
    active ? theme.color.white : '#aaa'};
  opacity: 0.6;
`;

export const ThemeH2 = styled.h2`
  font-size: 25px;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 12px;

  @media (min-width: 320px) and (max-width: 400px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
  @media (min-width: 401px) and (max-width: 884px) {
    font-size: 23px;
    margin-bottom: 10px;
  }
`;

export const ThemeSpan = styled.span`
  color: ${({ theme }) => theme.color.white};
  font-size: 17px;

  @media (min-width: 320px) and (max-width: 400px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
  @media (min-width: 401px) and (max-width: 884px) {
    font-size: 15px;
    margin-bottom: 10px;
  }
`;
