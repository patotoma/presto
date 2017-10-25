import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from './actionTypes.js';
import * as workers from './workers.js';

export function* watchAuthStateChanged() {
  yield takeEvery(actionTypes.AUTH_STATE_CHANGED.request, workers.authStateChanged);
}

export function* watchLogin() {
  yield takeEvery(actionTypes.LOGIN.request, workers.login);
}

export function* watchRegister() {
  yield takeEvery(actionTypes.REGISTER.request, workers.register);
}

export function* watchLogout() {
  yield takeEvery(actionTypes.LOGOUT.request, workers.logout);
}

export function* watchGetPosts() {
  yield takeEvery(actionTypes.GET_POSTS.request, workers.getPosts);
}

export function* watchGetComments() {
  yield takeEvery(actionTypes.GET_COMMENTS.request, workers.getComments);
}
