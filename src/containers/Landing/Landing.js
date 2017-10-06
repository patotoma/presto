import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Landing extends PureComponent {
  static propTypes = {};

  render() {
    return (
      <div>
        <p>Welcome!</p>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Landing;
