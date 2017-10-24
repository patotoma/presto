import React from 'react';
import RRLoadingBar from 'react-redux-loading-bar';
import styled from 'styled-components';

export const LoadingBar = () => <StyledLoadingBar/>;

const StyledLoadingBar = styled(RRLoadingBar)`
  background-color: #2185d0;
  height: 2px;
  position: fixed;
  z-index: 10000;
`;

export default LoadingBar;
