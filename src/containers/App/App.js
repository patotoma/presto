import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading-bar';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import * as actionTypes from '../../sagas/actionTypes.js';

import NoMatch from '../../components/NoMatch/NoMatch.js';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute.js';
import NavBar from '../../components/NavBar/NavBar.js';

// pages
import Landing from '../Landing/Landing.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import Home from '../Home/Home.js';

export class App extends React.PureComponent {
  static propTypes = {
    app: PropTypes.object.isRequired,
    user: PropTypes.object,
    history: PropTypes.object.isRequired,
  };

  handleNavBarSelect = eventKey => {
    switch (eventKey) {
    case 'home':
      this.props.history.push('/home');
      break;
    case 'logout':
      this.props.dispatch({
        type: actionTypes.LOGOUT.request,
      });
      break;
    default:
    }
  }

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
        <StyledLoadingBar/>
        <NavBar
          user={user}
          handleSelect={this.handleNavBarSelect}
        />

        {/* switch renders the first child route that matches */}
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <ProtectedRoute path="/home" component={Home}/>

          {/* route with no path always matches */}
          <Route component={NoMatch}/>
        </Switch>
      </div>
    );
  }
}

const StyledLoadingBar = styled(LoadingBar)`
  background-color: #28ddff;
  height: 2px;
  position: fixed;
  z-index: 10000;
`;

export default connect(state => ({
  app: state.app,
  user: state.user,
}))(App);
