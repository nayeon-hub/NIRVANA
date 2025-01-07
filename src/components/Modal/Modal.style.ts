import styled from '@emotion/styled';

export const StyledDeemBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.black600};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const StyledModalBackground = styled.div`
  width: 330px;
  height: 390px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  flex-direction: column;
  padding: 20px;
  ${({ theme }) => theme.style.flexAlignCenter}
`;

export const IconContainer = styled.div`
  ${({ theme }) => theme.style.flexCenter}
  width: 100%;
  height: 50%;
  font-size: 80px;
`;

export const ContentContainer = styled.div`
  width: 80%;
  white-space: pre-line;
  text-align: center;
  line-height: 1.5;
  font-weight: bold;
  font-size: 16px;
  position: relative;
`;

export const NavButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  & > button + button {
    margin-left: 10px;
  }
`;
