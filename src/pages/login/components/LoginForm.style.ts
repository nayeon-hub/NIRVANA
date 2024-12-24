import styled from '@emotion/styled';

export const LoginFormContainer = styled.form`
  background-color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.style.flexCenter};
  flex-direction: column;
  box-sizing: border-box;
  max-width: 450px;
  max-height: 400px;
  padding: 25px 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px ${({ theme }) => theme.color.black250};

  @media (min-width: 0px) and (max-width: 400px) {
    width: 290px;
    height: 380px;
    font-size: 14px;
  }

  @media (min-width: 401px) and (max-width: 495px) {
    width: 335px;
    height: 380px;
  }

  @media (min-width: 496px) and (max-width: 884px) {
    width: 372px;
    height: 380px;
  }
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => theme.style.flexJustifyCenter};
  width: 100%;
  max-width: 300px;
  margin-top: 20px;

  @media (min-width: 0px) and (max-width: 400px) {
    & > button {
      font-size: 14px;
    }
  }
`;
