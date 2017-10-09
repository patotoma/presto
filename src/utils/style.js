import { css, keyframes } from 'styled-components';

export const toEm = px => px / 16;

export function truncate(width) {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
}

// import { truncate } from './utils/style.js';
//
// // Make this div truncate the text with an ellipsis
// const Box = styled.div`
//   ${ truncate('250px') }
//   background: papayawhip;
// `;

// complex mixin
export const complexMixin = css`
  color: ${props => props.whiteColor ? 'white': 'black'}
`;

// import { complexMixin } from './utils/style.js';
//
// const StyledComp = styled.div`
//   /* This is an example of a nested interpolation */
//   ${props => props.complex ? complexMixin : 'color: blue;'}
// `;

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
