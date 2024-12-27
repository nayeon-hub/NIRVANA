import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
type MeditationPageProps = {
  flex: keyof Theme['style'];
  color: keyof Theme['color'];
};

export const MeditationPage = styled.div<MeditationPageProps>`
  ${({ theme, flex }) => theme.style[flex]};
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: ${({ theme, color }) => theme.color[color]};
  padding: 5px 20px;
  min-height: 768px;

  @media (min-width: 320px) and (max-width: 400px) {
    grid-template-rows: 55% 15% 15% 10%;
    min-height: 640px;
  }

  @media (min-width: 401px) and (max-width: 768px) {
    grid-template-rows: 55% 15% 15% 10%;
    min-height: 667px;
  }
`;

export const MeditationLayout = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 60% 18% 12% 10%;

  @media (min-width: 320px) and (max-width: 400px) {
    grid-template-rows: 55% 15% 15% 10%;
  }

  @media (min-width: 401px) and (max-width: 768px) {
    grid-template-rows: 56% 20% 14% 10%;
  }
`;

export const MeditationActionLayout = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 70% 30%;

  @media (min-width: 320px) and (max-width: 400px) {
    grid-template-rows: 65% 30%;
  }
`;

export const MeditationMainHeader = styled.div`
  position: relative;
  width: 100%;
  color: ${({ theme }) => theme.color.white};
  height: 120px;
  ${({ theme }) => theme.style.flexCenter}

  & > div {
    position: absolute;
    left: 0;
  }

  @media (min-width: 320px) and (max-width: 400px) {
    height: 75px;
    & span {
      font-size: 35px;
    }
  }

  @media (min-width: 401px) and (max-width: 768px) {
    height: 83px;
  }
`;

export const MeditationActionHeader = styled.div`
  position: relative;
  width: 100%;
  color: ${({ theme }) => theme.color.white};
  height: 120px;
  ${({ theme }) => theme.style.flexCenter};
  font-size: 27px;

  & > div {
    position: absolute;
    left: 0;
  }

  @media (min-width: 320px) and (max-width: 400px) {
    height: 75px;
    font-size: 23px;
  }

  @media (min-width: 401px) and (max-width: 768px) {
    height: 83px;
    font-size: 25px;
  }
`;

export const PageH3 = styled.h3`
  font-size: 21px;
  color: ${({ theme }) => theme.color.white};
  letter-spacing: 1px;

  @media (min-width: 320px) and (max-width: 400px) {
    font-size: 16px;
  }

  @media (min-width: 401px) and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const MeditationTimeSettingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MeditationStartBtn = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 80%;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 80%;
  }
`;
