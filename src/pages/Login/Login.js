import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import {
  Grid,
  Segment,
  Form,
  Header,
  Message,
  Button,
} from 'semantic-ui-react';

import * as actionTypes from '../../sagas/actionTypes.js';

export class Login extends React.PureComponent {
  static propTypes = {
    user: PropTypes.object,
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
      user,
      location,
    } = this.props;

    if (user) {
      const { from } = location.state || { from: { pathname: '/home' } };
      return <Redirect to={from}/>;
    }

    return (
      <StyledLogin>
        <StyledGrid textAlign='center' verticalAlign='middle'>
          <StyledGridColumn>
            <Header as='h2' color='teal' textAlign='left'>
              Log-in to your account
            </Header>
            <Form size='large' action="" onSubmit={this.login}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                  type="email"
                  required
                  onChange={e => { this.setState({email: e.currentTarget.value}); }}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  required
                  minLength="6"
                  onChange={e => { this.setState({password: e.currentTarget.value}); }}
                />

                <Button type='submit' color='teal' fluid size='large'>Login</Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Link to="/register">Sign Up</Link>
            </Message>
          </StyledGridColumn>
        </StyledGrid>
      </StyledLogin>
    );
  }
}

const StyledLogin = styled.div`
  height: 100%;
  background-color: #f7f7f7;
`;

const StyledGrid = styled(Grid)`
  height: 100%;
`;

const StyledGridColumn = styled(Grid.Column)`
  max-width: 450px;
`;

export default connect(state => ({
  user: state.user,
}))(Login);
