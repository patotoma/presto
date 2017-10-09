import update from 'immutability-helper';
import * as actionTypes from '../sagas/actionTypes.js';

const initialState = {
  loadingStorage: true,
  _token: null, // persisted by storage
  token: null,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {

  case actionTypes.STORAGE_LOADED: {
    return update(state, {
      loadingStorage: { $set: false },
    });
  }

  case actionTypes.LOGIN.success: {
    return update(state, {
      _token: { $set: action.remember ? action.token : null },
      token: { $set: action.token },
    });
  }

  case actionTypes.REGISTER.success: {
    return update(state, {
      _token: { $set: action.remember ? action.token : null },
      token: { $set: action.token },
    });
  }

  // we are handling LOGOUT_SUCCESS action here instead of the global HOR
  // as REHYDRATE is called only once so we would be stuck at
  // waiting for REHYDRATE again which never happens
  case actionTypes.LOGOUT.success: {
    return {
      ...initialState,
      loadingStorage: false,
    };
  }

  default: return state;
  }
}
