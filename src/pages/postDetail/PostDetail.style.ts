import styled from '@emotion/styled';

export const PostDetailPage = styled.div`
  ${({ theme }) => theme.style.flexAlignCenter};
  background-color: ${({ theme }) => theme.color.white};
  padding: 30px 20px;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
  height: 100%;
`;
