import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import * as actionTypes from '../../sagas/actionTypes.js';

class Login extends PureComponent {
  static propTypes = {
    appToken: PropTypes.string,
  };

  state = {
    email: '',
    password: '',
    errors: [],
  };

  login = e => {
    e.preventDefault();

    const { email, password } = this.state;
    this.props.dispatch({
      type: actionTypes.LOGIN.request,
      email: email,
      password: password,
    });
  }

  render() {
    const {
      appToken,
      location,
    } = this.props;

    if (appToken) {
      const { from } = location.state || { from: { pathname: '/home' } };
      return <Redirect to={from}/>;
    }

    return (
      <div>
        <p>Log in:</p>

        <form action="" onSubmit={this.login}>
          <Input
            type="email"
            placeholder="email"
            required
            onChange={e => { this.setState({email: e.currentTarget.value}); }}
          />
          <Input
            type="password"
            placeholder="password"
            required
            minlength="6"
            onChange={e => { this.setState({password: e.currentTarget.value}); }}
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

const Input = styled.input.attrs({
  // we can define static props
  // type: 'password',

  // or we can define dynamic ones
  margin: props => props.size || '1em',
  padding: props => props.size || '1em',
})`
  ${'' /* color: palevioletred; */}
  color: ${props => props.theme.fontColor},
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed props */
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;

export default connect(state => ({
  appToken: state.app.token,
}))(Login);
