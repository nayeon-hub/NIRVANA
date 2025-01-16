import styled from '@emotion/styled';

export const PostContainer = styled.div`
  min-width: 300px;
  max-width: 400px;
  width: 80%;
  position: relative;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.white};
  margin: 0 auto;
  padding-bottom: 18px;
`;

export const TextAreaContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const TextArea = styled.textarea`
  width: 100%;
  border-radius: 10px;
  min-height: 350px;
  line-height: 1.5;
  border: none;
  outline: none;
  resize: none;
  font-size: 16px;
  padding: 30px 30px;

  &:focus {
    border: none;
    outline: none;
  }

  @media (min-width: 0px) and (max-width: 320px) {
    padding: 20px 20px;
    min-height: 290px;
  }
`;

export const TextLengthInfo = styled.span`
  position: absolute;
  bottom: 10px;
  right: 30px;
  color: ${({ theme }) => theme.color.greyLight};
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => theme.style.flexCenter};
  margin-top: 20px;
  padding: 0 30px;

  @media (min-width: 0px) and (max-width: 320px) {
    padding: 0 20px;
    margin-top: 15px;
    & > button {
      height: 45px;
      font-size: 14px;
    }
  }
`;
