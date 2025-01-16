import styled from '@emotion/styled';
import logo from '../../assets/logo.svg';

export const LoginMain = styled.main`
  background: ${({ theme }) => theme.color.linearGradientPurple};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  min-height: 100vh;

  @media (min-width: 0px) and (max-width: 360px) {
    justify-content: space-evenly;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media (min-width: 361px) and (max-width: 389px) {
    justify-content: space-between;
    padding-top: 110px;
    padding-bottom: 50px;
  }

  @media (min-width: 390px) and (max-width: 479px) {
    justify-content: space-between;
    padding-top: 100px;
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
  margin: 0 auto 65px;

  @media (min-width: 0px) and (max-width: 400px) {
    width: 225px;
    height: 40px;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  @media (min-width: 401px) and (max-width: 495px) {
    width: 245px;
    height: 60px;
    margin: 0 auto;
  }

  @media (min-width: 496px) {
    width: 295px;
    height: 65px;
  }
`;
