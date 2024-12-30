import styled from '@emotion/styled';

export const UnknownErrorContainer = styled.div`
  height: calc(100vh - 64px - 50px - 70px);
  ${({ theme }) => theme.style.flexCenter};
  flex-direction: column;
`;

export const UnknownErrorH2 = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 500;
`;

export const UnknownErrorSpan = styled.span`
  font-size: 13px;
  width: 50%;
  line-height: 1.4;
  text-align: center;
  display: block;
  margin-bottom: 12px;
`;
