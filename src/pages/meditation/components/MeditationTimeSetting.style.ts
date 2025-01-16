import styled from '@emotion/styled';

export const SettingContainer = styled.div`
  position: relative;
  border-radius: 100px;
  background: rgba(0, 0, 0, 0.1);
  width: 198px;
  height: 62px;

  @media (min-width: 0) and (max-width: 320px) {
    width: 140px;
    height: 40px;

    & > div {
      width: 140px;
      height: 40px;
    }
  }

  @media (min-width: 321px) and (max-width: 400px) {
    width: 198px;
    height: 50px;

    & > div {
      height: 50px;
    }
  }
`;

export const MinuteSpan = styled.span`
  font-size: 10px;

  @media (min-width: 0) and (max-width: 320px) {
    font-size: 8px;
  }
`;
