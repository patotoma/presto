import React from 'react';
import ReactDOM from 'react-dom';

import { ErrorBoundary } from './ErrorBoundary.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ErrorBoundary />, div);
});
