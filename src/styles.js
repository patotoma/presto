import { css } from 'styled-components';

import { screenBreakpoints } from './constants.js';

export const theme = {
  fontColor: '#fff',
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
