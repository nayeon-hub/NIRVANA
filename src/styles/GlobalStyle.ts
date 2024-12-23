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

  .swiper {
    width: 180px;
    height: 60px;
  }
  .swiper-slide {
    text-align: center;
    line-height: 60px;
    font-size: 12px;
    background: #fff;
    background: transparent;
    color: white;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide-active {
    font-size: 18px;
  }
`;

export default GlobalStyle;
