import { delay } from 'redux-saga';
import { take, takeEvery, put, call, fork, select, all } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist/constants';

import api, { setHeader, removeHeader } from '../services/api.js';
import * as actionTypes from './actionTypes.js';
import * as selectors from './selectors.js';
import * as watchers from './watchers.js';

import {
  login,
  logout,
} from './workers.js';

export default function* rootSaga() {
  yield take(REHYDRATE);
  yield put({type: 'STORAGE_LOADED'});

  while (true) {
    let token = yield select(selectors.getToken);
    if (!token) {
      // TODO:
      const { email, password } = yield take(actionTypes.LOGIN.request);
      token = yield call(login, email, password);
      setHeader('Authorization', `Basic ${token}`);
    }

    yield all([
      fork(watchers.loadPosts),
      fork(watchers.loadComments),
    ]);

    yield take(actionTypes.LOGOUT.request);
    // if (window.confirm('Do you really want to logout?')) {
      yield call(logout);
    // }
    removeHeader('Authorization');
  }
}
