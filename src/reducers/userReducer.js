import update from 'immutability-helper';
import * as actionTypes from '../sagas/actionTypes.js';

const initialState = null;

export default function userReducer(state = initialState, action) {
  switch (action.type) {

  case actionTypes.LOGIN.success: {
    return update(state, { $set: action.user });
  }

  default: return state;
  }
}
