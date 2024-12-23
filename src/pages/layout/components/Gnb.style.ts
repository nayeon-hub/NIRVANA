import styled from '@emotion/styled';

export const GnbLayout = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  z-index: 2;
`;

export const GnbSection = styled.div`
  height: 64px;
`;

export const GnbMenu = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  min-width: 320px;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.white};
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.color.white800};
  padding: 0 35px;
  box-sizing: border-box;
  transform: translateZ(0);
`;
