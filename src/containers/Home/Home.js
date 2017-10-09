import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Grid,
  Row,
  Col,
  PageHeader,
  ButtonGroup,
  Button,
} from 'react-bootstrap';

import * as actionTypes from '../../sagas/actionTypes.js';

import { capitalize } from '../../utils/string.js';
import { spin } from '../../utils/style.js';
import { media } from '../../Theme.js';
import logo from '../../assets/imgs/logo.svg';

class Home extends React.PureComponent {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
  };

  state = {
    value: null,
  };

  _input = null;

  componentWillMount() {
    this.props.dispatch({type: actionTypes.GET_POSTS.request});
    this.props.dispatch({type: actionTypes.GET_COMMENTS.request});
  }

  select = e => {
    const newValue = e.currentTarget.value;
    this.setState(state => {
      if (state.value === newValue) {
        return null; // react16 way to prevent state update
      }
      this._input.value = capitalize(newValue); // set input value
      // update state
      return {
        value: newValue,
      };
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <PageHeader>Welcome inside!</PageHeader>
        </Row>
        <Row>
          <StyledBox>
            <p>this box is very responsive</p>
          </StyledBox>
        </Row>
        <Row>
          <Col md={6}>
            <StyledImage src={logo} alt="logo"/>
          </Col>
          <Col md={6}>
            <input type="text" disabled ref={c => { this._input = c; }}/>
            <p>Clicking any button below will set this input</p>
            <div>
              <ButtonGroup>
                <Button type="button" value="left" onClick={this.select}>Left</Button>
                <Button type="button" value="middle" onClick={this.select}>Middle</Button>
                <Button type="button" value="right" onClick={this.select}>Right</Button>
              </ButtonGroup>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const StyledImage = styled.img`
  width: 250px;
  display: block;
  margin: 0 auto;
  animation: ${spin} infinite 5s linear;
`;

const StyledBox = styled.div`
  background-color: #a7a7a7;
  color: white;
  padding: 0;
  margin: 20px 0 30px;
  border-radius: 5px;
  ${media.lg`
    padding: 40px;
  `}
  ${media.md`
    padding: 20px;
  `}
  ${media.sm`
    padding: 10px;
  `}
  ${media.xs`
    padding: 0;
  `}
`;

export default connect(state => ({
  posts: state.posts,
  comments: state.comments,
}))(Home);
