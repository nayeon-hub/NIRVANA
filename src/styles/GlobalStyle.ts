import { css } from '@emotion/react';

const GlobalStyle = css`
  * {
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
  }

  #root {
    font-family: 'Pretendard Variable', sans-serif;
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 768px;
    margin: 0 auto;
  }

  #modal-root {
    position: absolute;
    left: 0;
    top: 0;
    max-width: 768px;
  }
`;

export default GlobalStyle;
