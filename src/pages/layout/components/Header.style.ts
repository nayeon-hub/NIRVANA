import styled from '@emotion/styled';

export const HeaderLayout = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const HeaderSection = styled.div`
  width: 100%;
  min-width: 320px;
  max-width: 600px;
  height: 50px;
  background-color: ${({ theme }) => theme.color.purpleDark};
  display: flex;
  margin: 0 auto;
`;

export const HeaderNavSection = styled(HeaderSection)`
  justify-content: space-between;
  padding: 0 20px;
`;

export const HeaderSearchSection = styled(HeaderSection)`
  align-items: center;
  ${({ theme }) => theme.style.flexCenter};
`;
