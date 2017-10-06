import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actionTypes from '../../sagas/actionTypes.js';
import logo from '../../assets/imgs/logo.svg';

// keyframes
// import styled, { keyframes } from 'styled-components';
//
// const fadeIn = keyframes`
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// `;
//
// const FadeInButton = styled.button`
//   animation: 1s ${fadeIn} ease-out;
// `;

class Home extends PureComponent {
  static propTypes = {
    home: PropTypes.object.isRequired,
  };

  state = {
    city: null,
  };

  button = null;

  selectCity = e => {
    const newValue = e.currentTarget.value;
    this.setState(state => {
      if (state.city === newValue) {
        return null; // react16 way to prevent state update
      }
      return {
        city: newValue,
      };
    });
  }

  logout = e => {
    e.preventDefault();

    this.props.dispatch({
      type: actionTypes.LOGOUT.request,
    });
  }

  render() {
    const {
      home,
      match,
    } = this.props;

    return (
      <div>
        <div>
          <a href="" onClick={this.logout}>Log out</a>
        </div>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <button ref={c => { this.button = c; }}>Toggle</button>
        <button type="button" value="paris" onClick={this.selectCity}>Paris</button>
        <button type="button" value="vienna" onClick={this.selectCity}>Vienna</button>
      </div>
    );
  }
}

export default connect(state => ({
  home: state.home,
}))(Home);
