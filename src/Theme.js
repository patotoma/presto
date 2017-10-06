import React from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';

import { theme } from './constants.js';

injectGlobal`
  ${'' /* @font-face {
    font-family: 'Operator Mono';
    src: url('./assets/fonts/Operator-Mono.ttf');
  } */}

  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: ${props => props.theme.fontSize};
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};
  }
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Layout;
