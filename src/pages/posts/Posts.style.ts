import styled from '@emotion/styled';

const StyledPostsPage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.white};
`;

const ThemePickerContainer = styled.div`
  width: 100%;
  height: 70px;
  ${({ theme }) => theme.style.flexAlignCenter};
  justify-content: left;
  padding-left: 20px;

  @media (min-width: 0) and (max-width: 389px) {
    justify-content: space-evenly;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 0px;

    & > button {
      width: 68px;
      font-size: 14px;
    }
  }

  @media (min-width: 340px) and (max-width: 495px) {
    justify-content: space-evenly;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 0px;
  }

  @media (min-width: 496px) and (max-width: 1279px) {
    & > button + button {
      margin-left: 10px;
    }
  }
`;

export { StyledPostsPage, ThemePickerContainer };
