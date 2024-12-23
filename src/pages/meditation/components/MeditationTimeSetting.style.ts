import styled from '@emotion/styled';

export const SettingContainer = styled.div`
  position: relative;
  border-radius: 100px;
  background: rgba(0, 0, 0, 0.1);
  width: 198px;
  height: 62px;

  @media (min-width: 320px) and (max-width: 400px) {
    width: 198px;
    height: 50px;

    & > div {
      height: 50px;
    }
  }
`;

export const MinuteSpan = styled.span`
  font-size: 10px;
`;
