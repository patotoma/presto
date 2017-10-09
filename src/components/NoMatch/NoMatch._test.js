import React from 'react';
import ReactDOM from 'react-dom';

import { NoMatch } from './NoMatch.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NoMatch />, div);
});
