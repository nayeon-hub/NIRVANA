import styled from '@emotion/styled';

export const MeditationTimerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MeditationPlayBox = styled.div`
  ${({ theme }) => theme.style.flexCenter};
  margin-bottom: 40px;
  margin-top: 20px;

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

  @media (min-width: 320px) and (max-width: 400px) {
    margin-bottom: 30px;
    margin-top: 0;
  }
`;

export const MeditationStopBox = styled.div``;
export const MeditationTimeBox = styled.div`
  ${({ theme }) => theme.style.flexCenter};
  font-size: 24px;
  color: ${({ theme }) => theme.color.white};

  @media (min-width: 320px) and (max-width: 400px) {
    font-size: 20px;
  }
`;
