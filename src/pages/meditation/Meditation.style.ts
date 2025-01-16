import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
type MeditationPageProps = {
  flex: keyof Theme['style'];
  color: keyof Theme['color'];
};

export const MeditationPage = styled.div<MeditationPageProps>`
  ${({ theme, flex }) => theme.style[flex]};
  flex-direction: column;
  width: 100%;
  background: ${({ theme, color }) => theme.color[color]};
  padding: 5px 20px;
  min-height: 100vh;
`;

export const MeditationLayout = styled.div``;

export const MeditationActionLayout = styled.div``;

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
  margin-top: 10%;
  margin-bottom: 8%;

  @media (min-width: 320px) and (max-width: 400px) {
    margin-top: 0;
    margin-bottom: 4%;
  }

  @media (min-width: 401px) and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const MeditationStartBtn = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 260px;
  margin-bottom: 5%;
  & > button {
    height: 55px;
  }

  @media (min-width: 0) and (max-width: 320px) {
    width: 225px;
    margin-bottom: 0;
    & > button {
      height: 40px;
    }
  }

  @media (min-width: 321px) and (max-width: 768px) {
    margin-bottom: 0;
    width: 260px;
    & > button {
      height: 50px;
    }
  }
`;
