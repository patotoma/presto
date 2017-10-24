import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Segment,
  Container,
  List,
} from 'semantic-ui-react';

import * as actionTypes from '../../sagas/actionTypes.js';

import { capitalize } from '../../utils/string.js';
import { spin } from '../../utils/style.js';
import logo from '../../assets/imgs/logo.svg';

export class Home extends React.PureComponent {
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
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <List divided relaxed>
            <List.Item>
              <List.Icon name='github' size='large' verticalAlign='middle' />
              <List.Content>
                <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                <List.Description as='a'>Updated 10 mins ago</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='github' size='large' verticalAlign='middle' />
              <List.Content>
                <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>
                <List.Description as='a'>Updated 22 mins ago</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='github' size='large' verticalAlign='middle' />
              <List.Content>
                <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                <List.Description as='a'>Updated 34 mins ago</List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Container>
      </Segment>
    );

    // return (
    //   <Grid>
    //     <Row>
    //       <PageHeader>Welcome inside!</PageHeader>
    //     </Row>
    //     <Row>
    //       <Col md={6}>
    //         <StyledImage src={logo} alt="logo"/>
    //       </Col>
    //       <Col md={6}>
    //         <input type="text" disabled ref={c => { this._input = c; }}/>
    //         <p>Clicking any button below will set this input</p>
    //         <div>
    //           <ButtonGroup>
    //             <Button type="button" value="left" onClick={this.select}>Left</Button>
    //             <Button type="button" value="middle" onClick={this.select}>Middle</Button>
    //             <Button type="button" value="right" onClick={this.select}>Right</Button>
    //           </ButtonGroup>
    //         </div>
    //       </Col>
    //     </Row>
    //   </Grid>
    // );
  }
}

const StyledImage = styled.img`
  width: 250px;
  display: block;
  margin: 0 auto;
  animation: ${spin} infinite 5s linear;
`;

export default connect(state => ({
  posts: state.posts,
  comments: state.comments,
}))(Home);
