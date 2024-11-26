import styled from '@emotion/styled';

export const SignUpFormContainer = styled.form`
  ${({ theme }) => theme.style.flexCenter};
  flex-direction: column;
  box-sizing: border-box;
  flex-grow: 2;
  background-color: ${({ theme }) => theme.color.white};
  width: 80%;
  min-width: 300px;
  max-width: 450px;
  max-height: 600px;
  padding: 25px 20px;
  border-radius: 10px;
  margin-bottom: 50px;
  box-shadow: 2px 2px 10px ${({ theme }) => theme.color.black250};
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => theme.style.flexJustifyCenter};
  width: 100%;
  margin-top: 15px;

  & > button {
    margin: 0px 5px;
  }
`;

export const FormInputContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 10px 0;
  position: relative;
`;

export const EmailConfirmButton = styled.button`
  position: absolute;
  top: 49%;
  right: 6px;
  width: 85px;
  height: 32px;
  border: none;
  background-color: #47346d;
  color: #ffffff;
  font-weight: normal;
  border-radius: 10px;
  font-size: 13px;
  padding: 0;
  cursor: pointer;
`;
