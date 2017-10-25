import update from 'immutability-helper';
import * as actionTypes from '../sagas/actionTypes.js';

const initialState = {
  loading: true,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {

  case actionTypes.APP_LOADED: {
    return update(state, {
      loading: { $set: false },
    });
  }

  // we are handling LOGOUT_SUCCESS action here instead of the global HOR
  // as loading is already false and we don't want to reset it
  case actionTypes.LOGOUT.success: {
    return {
      ...initialState,
      loading: false,
    };
  }

  default: return state;
  }
}
