import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
  background-color: white;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.5px ${({ theme }) => theme.color.greyLight} solid;
  border-bottom: 1.5px ${({ theme }) => theme.color.black} solid;
  border-left: 1.5px ${({ theme }) => theme.color.black} solid;
  border-right: 1.5px ${({ theme }) => theme.color.black} solid;
  padding: 0 35px;
`;