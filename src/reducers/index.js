import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { reducer as formReducer } from 'redux-form';

import * as actionTypes from '../sagas/actionTypes.js';
import { promiseTypeSuffixes } from '../constants.js';
import { reportActionFailure } from '../services/errorReporting.js';

// other reducers
import appReducer from './appReducer.js';
import userReducer from './userReducer.js';
import postsReducer from './postsReducer.js';
import commentsReducer from './commentsReducer.js';

let rootReducer = combineReducers({
  loadingBar: loadingBarReducer,
  app: appReducer,
  user: userReducer,
  posts: postsReducer,
  comments: commentsReducer,
  form: formReducer, // redux-form
});

// reset app state on logout HOR
const resetOnLogout = (reducer, initialState) => (state, action) => {
  if (action.type === actionTypes.LOGOUT.success) {
    // Delete whole app state except some fixtures.
    state = {
      app: state.app, // handle app reducer inside itself
    };
  }
  return reducer(state, action);
};
rootReducer = resetOnLogout(rootReducer, {});

// catch all _FAILUREs HOR
const errorReporting = (reducer, initialState) => (state, action) => {
  if (
    action.type.endsWith(`_${promiseTypeSuffixes[2]}`)
  ) {
    if (action.type === actionTypes.LOGIN.failure ||
    action.type === actionTypes.REGISTER.failure) {
      if (action.error.status !== 400 && action.error.status !== 401) {
        reportActionFailure(action);
      }
    } else {
      reportActionFailure(action);
    }
  }
  return reducer(state, action);
};
rootReducer = errorReporting(rootReducer, {});

export default rootReducer;
