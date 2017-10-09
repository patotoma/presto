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
} from 'react-bootstrap';

import * as actionTypes from '../../sagas/actionTypes.js';

export class Login extends React.PureComponent {
  static propTypes = {
    user: PropTypes.object,
  };

  state = {
    email: '',
    password: '',
    remember: false,
    errors: [],
  };

  login = e => {
    e.preventDefault();

    const { email, password, remember } = this.state;
    this.props.dispatch({
      type: actionTypes.LOGIN.request,
      email: email,
      password: password,
      remember: remember,
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
      <Grid>
        <Row>
          <PageHeader>Sign in</PageHeader>
        </Row>
        <Row>
          <Col sm={12} md={6} mdOffset={3}>

            <StyledForm horizontal action="" onSubmit={this.login}>
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
                <Col sm={10}>
                  <FormControl
                    type="password"
                    placeholder="password"
                    required
                    minLength="6"
                    onChange={e => { this.setState({password: e.currentTarget.value}); }}
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

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit">Sign in</Button>
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
}))(Login);
