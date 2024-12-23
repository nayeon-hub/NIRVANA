import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import GlobalStyle from '@styles/GlobalStyle';
import { Global } from '@emotion/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Global styles={GlobalStyle} />
      <App />
    </BrowserRouter>
  </ThemeProvider>
  // </React.StrictMode>
);
