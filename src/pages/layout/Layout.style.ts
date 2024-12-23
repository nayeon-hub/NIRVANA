import styled from '@emotion/styled';

export const CommonLayoutContainer = styled.div`
  min-width: 320px;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const LayoutContainer = styled.div`
  height: calc(100% - 50px - 64px);
  width: 100%;
  min-height: 667px;
`;
