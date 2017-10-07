import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from './actionTypes.js';
import * as workers from './workers.js';

export function* watchLogin() {
  yield takeEvery(actionTypes.LOGIN.request, workers.login);
}

export function* watchLogout() {
  yield takeEvery(actionTypes.LOGOUT.request, workers.logout);
}
