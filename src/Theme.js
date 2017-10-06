import React from 'react';
import { injectGlobal, ThemeProvider, css } from 'styled-components';

import { screenBreakpoints } from './constants.js';

export const theme = {
  fontColor: '#333',
  fontSize: '20px',
  backgroundColor: '#fff',
};

// iterate through the sizes and create a media template
export const media = Object.keys(screenBreakpoints).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = screenBreakpoints[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

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
