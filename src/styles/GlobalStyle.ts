import { css } from '@emotion/react';

const GlobalStyle = css`
  * {
    box-sizing: border-box;
  }

  body {
    height: 100vh;
  }

  #root {
    font-family: 'Pretendard Variable', sans-serif;
    position: relative;
    height: 100%;
  }

  #modal-root {
    position: absolute;
    left: 0;
    top: 0;
    max-width: 768px;
  }
`;

export default GlobalStyle;
