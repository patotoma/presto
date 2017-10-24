import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute.js';
import Landing from '../Landing/Landing.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import Home from '../Home/Home.js';

import Header from './Header/Header.js';
import NoMatch from './NoMatch/NoMatch.js';
import LoadingBar from './LoadingBar/LoadingBar.js';

export class App extends React.PureComponent {
  static propTypes = {
    app: PropTypes.object.isRequired,
    user: PropTypes.object,
  };

  render() {
    const {
      app,
      user,
    } = this.props;

    if (app.loadingStorage) {
      return <div>Loading storage...</div>;
    }

    if (app.token && !user) {
      return <div>Loading user...</div>;
    }

    return (
      <div>
        <LoadingBar/>
        <Header/>

        {/* content */}
        <StyledContent>
          {/* switch renders the first child route that matches */}
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <ProtectedRoute path="/home" component={Home}/>

            {/* route with no path always matches */}
            <Route component={NoMatch}/>
          </Switch>
        </StyledContent>
      </div>
    );
  }
}

const StyledContent = styled.div`
  padding-top: 50px; ${'' /* fixed header offset */}
  height: 100%;
`;

export default connect(state => ({
  app: state.app,
  user: state.user,
}))(App);
