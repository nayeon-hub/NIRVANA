import styled from '@emotion/styled';

export const SkeletonPostsPage = styled.div`
  width: 100%;
  height: calc(100vh - 64px - 50px - 70px);
  background-color: ${({ theme }) => theme.color.white};
  overflow: hidden;
`;
