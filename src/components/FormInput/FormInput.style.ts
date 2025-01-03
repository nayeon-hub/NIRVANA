import styled from '@emotion/styled';

export const InputContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 10px 0;
`;

export const InputBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 300px;
  height: 45px;
  padding: 0 10px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.color.white500};
  border-radius: 10px;
  display: flex;
`;

export const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-weight: 700;
  margin-left: 10px;
  margin-bottom: 10px;

  @media (min-width: 0px) and (max-width: 400px) {
    font-size: 14px;
  }
`;

export const Input = styled.input`
  width: ${({ width }) => `${width}`};
  border: none;
  &:active,
  &:focus {
    outline: none;
  }
`;

export const StyledTitle = styled.span`
  min-height: 20px;
  margin-right: 5px;
  ${({ theme }) => theme.style.flexAlignCenter};
`;

export const ErrorMessage = styled.span`
  line-height: 1.2;
  /* min-width: 200px; */
  min-height: 20px;
  ${({ theme }) => theme.style.flexAlignCenter};
  color: ${({ theme }) => theme.color.redVivid};
  font-size: 12px;
  font-weight: 400;
  white-space: pre-line;
`;

export const SuccessMessage = styled.span`
  line-height: 1.2;
  min-width: 200px;
  min-height: 20px;
  ${({ theme }) => theme.style.flexAlignCenter};
  color: ${({ theme }) => theme.color.greenVivid};
  font-size: 12px;
  white-space: pre-line;
  font-weight: 400;
`;
