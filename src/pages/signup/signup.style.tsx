import styled from '@emotion/styled';
import logo from '../../assets/logo.svg';

export const SignupMain = styled.main`
  background: ${({ theme }) => theme.color.linearGradientPurple};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100vh;
  min-height: 768px;
  padding-top: 147px;
  padding-bottom: 100px;

  @media (min-width: 0px) and (max-width: 389px) {
    padding-top: 65px;
    padding-bottom: 30px;
    min-height: 533px;
    align-items: center;
    justify-content: space-between;
  }
  @media (min-width: 390px) and (max-width: 495px) {
    justify-content: space-between;
    padding-top: 50px;
    padding-bottom: 30px;
  }
`;

export const SignupHeading = styled.h1`
  width: 230px;
  height: 45px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin: 0 auto 100px;
  width: 295px;
  height: 65px;

  @media (min-width: 0px) and (max-width: 389px) {
    width: 225px;
    height: 40px;
    margin: 0 auto 37px;
  }

  @media (min-width: 390px) and (max-width: 495px) {
    width: 245px;
    height: 60px;
  }
`;
