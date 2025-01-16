import styled from '@emotion/styled';
import { Theme } from '@emotion/react';

type PostingMainProps = {
  background: keyof Theme['color'];
};

export const PostingMain = styled.div<PostingMainProps>`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme, background }) => theme.color[background]};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 147px;
  padding-bottom: 100px;

  @media (min-width: 0px) and (max-width: 389px) {
    justify-content: top;
    padding-top: 0;
    padding-bottom: 0;
  }

  @media (min-width: 390px) and (max-width: 480px) {
    justify-content: top;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const ContentHeader = styled.div`
  width: 100%;
  min-height: 130px;
  ${({ theme }) => theme.style.flexCenter};
  flex-direction: column;
  color: ${({ theme }) => theme.color.white};
`;

export const ContentContainer = styled.div`
  width: 100%;
`;

export const ContentPara = styled.div`
  font-size: 16px;
  padding: 10px 0px;
`;

export const TimeStrong = styled.strong`
  font-weight: 700;
`;
