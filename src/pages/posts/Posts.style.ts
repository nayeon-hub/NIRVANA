import styled from '@emotion/styled';

const StyledPostsPage = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.white};
`;

const ThemePickerContainer = styled.div`
  width: 100%;
  height: 70px;
  ${({ theme }) => theme.style.flexCenter};
  & > button + button {
    margin-left: 10px;
  }
`;

export { StyledPostsPage, ThemePickerContainer };
