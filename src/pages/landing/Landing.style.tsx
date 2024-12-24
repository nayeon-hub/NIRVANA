import styled from '@emotion/styled';
import logo from '../../assets/logo.svg';

export const LandingMain = styled.main`
  background: ${({ theme }) => theme.color.linearGradientPurple};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  min-height: 768px;
  padding-top: 147px;
  padding-bottom: 50px;

  @media (min-width: 0px) and (max-width: 389px) {
    padding-top: 120px;
    padding-bottom: 50px;
    min-height: 533px;
  }

  @media (min-width: 400px) and (max-width: 480px) {
    padding-top: 180px;
    padding-bottom: 50px;
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
  margin: 0 auto;

  @media (min-width: 0px) and (max-width: 400px) {
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
