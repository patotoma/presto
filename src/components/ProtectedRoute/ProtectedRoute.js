import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({
  path,
  component: Component,
  appToken,
  redirectTo,
  ...rest
}) => (
  <Route path={path} {...rest} render={props =>
    appToken ?
      <Component {...props}/>
      :
      <Redirect to={{
        pathname: redirectTo,
        state: { referrer: props.location },
      }}/>
  }/>
);

ProtectedRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  appToken: PropTypes.string,
  redirectTo: PropTypes.string,
};

ProtectedRoute.defaultProps = {
  redirectTo: '/login',
};

export default connect(state => ({
  appToken: state.app.token,
}))(ProtectedRoute);
