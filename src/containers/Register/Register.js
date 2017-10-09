import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import {
  Grid,
  Row,
  PageHeader,
  Form,
  FormGroup,
  Col,
  FormControl,
  ControlLabel,
  Checkbox,
  Button,
  Alert,
} from 'react-bootstrap';

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
    remember: false,
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
      remember,
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
        remember: remember,
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
      <Grid>
        <Row>
          <PageHeader>Sign up</PageHeader>
        </Row>
        <Row>
          <Col sm={12} md={6} mdOffset={3}>

            <StyledForm horizontal action="" onSubmit={this.register}>
              <FormGroup controlId="formHorizontalName">
                <Col componentClass={ControlLabel} sm={2}>Name</Col>
                <Col sm={5}>
                  <FormControl
                    type="text"
                    placeholder="John"
                    required
                    onChange={e => { this.setState({firstName: e.currentTarget.value}); }}
                  />
                </Col>
                <Col sm={5}>
                  <FormControl
                    type="text"
                    placeholder="Doe"
                    required
                    onChange={e => { this.setState({surname: e.currentTarget.value}); }}
                  />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>Email</Col>
                <Col sm={10}>
                  <FormControl
                    type="email"
                    placeholder="email"
                    required
                    onChange={e => { this.setState({email: e.currentTarget.value}); }}
                  />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>Password</Col>
                <Col sm={5}>
                  <FormControl
                    type="password"
                    placeholder="password"
                    required
                    minLength="6"
                    onChange={e => { this.setState({password: e.currentTarget.value}); }}
                  />
                </Col>
                <Col sm={5}>
                  <FormControl
                    type="password"
                    placeholder="repeat password"
                    required
                    minLength="6"
                    onChange={e => { this.setState({repeatPassword: e.currentTarget.value}); }}
                  />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Checkbox
                    checked={this.state.remember}
                    onChange={e => { this.setState({remember: e.currentTarget.checked}); }}
                  >Remember me</Checkbox>
                </Col>
              </FormGroup>

              {this.state.errors.length > 0 &&
                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Alert bsStyle="danger">
                      {this.state.errors.map((error, i) =>
                        <p key={i}>{error}</p>
                      )}
                    </Alert>
                  </Col>
                </FormGroup>
              }

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit">Sign up</Button>
                </Col>
              </FormGroup>
            </StyledForm>

          </Col>
        </Row>
      </Grid>
    );
  }
}

const StyledForm = styled(Form)`
  margin-top: 50px;
`;

export default connect(state => ({
  user: state.user,
}))(Register);
