import React from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';

import { theme } from './constants.js';

injectGlobal`
  ${'' /* @font-face {
    font-family: 'Operator Mono';
    src: url('./assets/fonts/Operator-Mono.ttf');
  } */}

  html {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #FFF;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
  }

  input {
    border: 0;
    box-sizing: border-box;
    outline: 0;
    padding: 8px 10px;
    min-width: 220px;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
  }

  a {
    color: #46A19C;
  }

  ::-webkit-input-placeholder {
    color: #929292;
  }
  ::-moz-placeholder {
    color: #929292;
  }
  :-ms-input-placeholder {
    color: #929292;
  }
  :-moz-placeholder {
    color: #929292;
  }
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Layout;
