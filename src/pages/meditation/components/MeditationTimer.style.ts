import styled from '@emotion/styled';

export const MeditationTimerContainer = styled.div``;

export const MeditationPlayBox = styled.div`
  ${({ theme }) => theme.style.flexAlignCenter};
  margin-bottom: 40px;

  & > div + div {
    margin-left: 44px;
  }

  & > div:nth-of-type(1)::before {
    display: block;
    width: 40px;
    height: 40px;
    margin-right: 44px;
    content: '';
  }

  & > div:nth-of-type(1) {
    ${({ theme }) => theme.style.flexAlignCenter};
  }
`;
export const MeditationTimeBox = styled.div`
  width: 100%;
  ${({ theme }) => theme.style.flexCenter};
  font-size: 24px;
  color: ${({ theme }) => theme.color.white};
`;
