import styled from '@emotion/styled';
import logo from '../../assets/logo.svg';

export const LandingMain = styled.main`
  background: ${({ theme }) => theme.color.linearGradientPurple};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding-top: 55px;
  padding-bottom: 35px;
  min-height: 100vh;

  @media (min-width: 0px) and (max-width: 320px) {
    padding-top: 82px;
    padding-bottom: 34px;
    min-height: 568px;
    justify-content: space-between;
  }

  @media (min-width: 321px) and (max-width: 400px) {
    padding-top: 110px;
    padding-bottom: 80px;
    justify-content: space-around;
  }

  @media (min-width: 401px) and (max-width: 479px) {
    padding-top: 180px;
    justify-content: space-around;
  }
`;

export const HeadingContentContainer = styled.div`
  width: 100%;
  ${({ theme }) => theme.style.flexAlignCenter};
`;

export const Heading = styled.h1`
  width: 230px;
  height: 45px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin: 0 auto 240px;

  @media (min-width: 0px) and (max-width: 320px) {
    margin: 0 auto 40px;
  }

  @media (min-width: 321px) and (max-width: 400px) {
    width: 225px;
    height: 40px;
  }

  @media (min-width: 401px) and (max-width: 495px) {
    width: 245px;
    height: 60px;
  }

  @media (min-width: 496px) {
    width: 295px;
    height: 65px;
  }
`;

export const BottomContentContainer = styled.div`
  width: 100%;
`;

export const LinkContainer = styled.div`
  ${({ theme }) => theme.style.flexAlignCenter};
  flex-direction: column;

  > a {
    margin: 5px 0px;
  }

  @media (min-width: 0px) and (max-width: 320px) {
    & button {
      width: 260px;
      height: 45px;
      font-size: 14px;
    }
  }

  @media (min-width: 321px) and (max-width: 400px) {
    & button {
      width: 260px;
      height: 45px;
      font-size: 14px;
    }
  }
`;

export const PreviewLink = styled.div`
  ${({ theme }) => theme.style.flexAlignCenter};
  flex-direction: column;
  margin-bottom: 20px;
  & > span {
    color: ${({ theme }) => theme.color.white};
    margin-bottom: 2px;
    text-align: center;
    letter-spacing: 0.5px;
    font-size: 12px;
  }

  & > a {
    ${({ theme }) => theme.style.flexAlignCenter};
    border-bottom: 1px solid ${({ theme }) => theme.color.white};
    font-weight: bold;
    padding: 5px 0px;
    font-size: 12px;
  }

  & > a > span {
    margin-left: 3px;
  }
`;

export const PreviewSpan = styled.span`
  font-size: 12px;
`;
