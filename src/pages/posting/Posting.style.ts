import styled from '@emotion/styled';
import { Theme } from '@emotion/react';

type StyledPostingProps = {
  background: keyof Theme['color'];
};

export const StyledPosting = styled.div<StyledPostingProps>`
  width: 100%;
  height: 100%;
  background: ${({ theme, background }) => theme.color[background]};
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  ${({ theme }) => theme.style.flexAlignCenter};
  flex-direction: column;
`;

export const StyledDescription = styled.div`
  width: 100%;
  min-height: 130px;
  ${({ theme }) => theme.style.flexCenter};
  flex-direction: column;
  color: ${({ theme }) => theme.color.white};

  > p {
    font-size: 16px;
    padding: 10px 0px;
  }
`;
