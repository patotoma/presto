import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading-bar';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { media } from '../../Theme.js';
import NoMatch from '../../components/NoMatch/NoMatch.js';
import Landing from '../Landing/Landing.js';
import Login from '../Login/Login.js';
import Home from '../Home/Home.js';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute.js';

class App extends PureComponent {
  static propTypes = {
    app: PropTypes.object.isRequired,
  };

  render() {
    const {
      app,
    } = this.props;

    if (app.loadingStorage) {
      return <div>Loading storage...</div>;
    }

    return (
      <div>
        <LoadingBar style={{
          position: 'fixed',
          zIndex: 999999999999,
          backgroundColor: '#85ce26',
          height: '2px',
        }}/>

        <Container>
          {/* switch renders the first child route that matches */}
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/login" component={Login}/>
            <ProtectedRoute path="/home" component={Home}/>

            {/* route with no path always matches */}
            <Route component={NoMatch}/>
          </Switch>
        </Container>
      </div>
    );
  }
}

const Container = styled.div`
  color: #333;
  padding: 0 40px;
  ${media.lg`
    padding: 0 20px;
  `}
  ${media.md`
    padding: 0 10px;
  `}
  ${media.sm`
    padding: 0 5px;
  `}
  ${media.xs`
    padding: 0;
  `}
`;

export default connect(state => ({
  app: state.app,
}))(App);
