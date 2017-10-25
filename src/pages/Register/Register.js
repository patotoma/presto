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

export class Register extends React.PureComponent {
  static propTypes = {
    user: PropTypes.object,
  };

  state = {
    firstName: '',
    surname: '',
    email: '',
    password: '',
    repeatPassword: '',
    errors: [],
  };

  register = e => {
    e.preventDefault();

    const {
      firstName,
      surname,
      email,
      password,
      repeatPassword,
    } = this.state;

    const errors = [];
    if (password !== repeatPassword) {
      errors.push('Passwords do not match!');
    }

    this.setState({
      errors: errors,
    });
    if (errors.length === 0) {
      this.props.dispatch({
        type: actionTypes.REGISTER.request,
        firstName: firstName,
        surname: surname,
        email: email,
        password: password,
      });
    }
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
      <StyledRegister>
        <StyledGrid textAlign='center' verticalAlign='middle'>
          <StyledGridColumn>
            <Header as='h2' color='teal' textAlign='left'>
              Register new account
            </Header>
            <Form size='large' action="" onSubmit={this.register}>
              <Segment stacked>
                <Form.Group widths='equal'>
                  <Form.Input
                    fluid
                    type="text"
                    placeholder="First name"
                    required
                    onChange={e => { this.setState({firstName: e.currentTarget.value}); }}
                  />
                  <Form.Input
                    fluid
                    type="text"
                    placeholder="Last name"
                    required
                    onChange={e => { this.setState({surname: e.currentTarget.value}); }}
                  />
                </Form.Group>
                <Form.Input
                  fluid
                  type="email"
                  placeholder="Email address"
                  required
                  onChange={e => { this.setState({email: e.currentTarget.value}); }}
                />
                <Form.Input
                  fluid
                  placeholder='Password'
                  type='password'
                  required
                  minLength="6"
                  onChange={e => { this.setState({password: e.currentTarget.value}); }}
                />
                <Form.Input
                  fluid
                  placeholder='Repeat password'
                  type='password'
                  required
                  minLength="6"
                  onChange={e => { this.setState({repeatPassword: e.currentTarget.value}); }}
                />

                <Button type='submit' color='teal' fluid size='large'>Register</Button>
              </Segment>
            </Form>
            <Message>
              Already have an account? <Link to="/login">Sign In</Link>
            </Message>
          </StyledGridColumn>
        </StyledGrid>
      </StyledRegister>
    );
  }
}

const StyledRegister = styled.div`
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
}))(Register);
