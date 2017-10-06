import { delay } from 'redux-saga';
import { take, takeEvery, put, call, fork, select, all } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist/constants';
import { get } from 'lodash';

import api, { setHeader, removeHeader } from '../services/api.js';
import * as actionTypes from './actionTypes.js';

function* authorize(email, password) {
  try {
    // TODO:
    const { token } = yield Promise.resolve({ token: 'abc' });
    yield put({type: actionTypes.LOGIN.success, token});
    return token;
  } catch(error) {
    yield put({type: actionTypes.LOGIN.failure, error});
  }
}

function* logout() {
  try {
    // TODO:
    yield Promise.resolve();
    yield put({type: actionTypes.LOGOUT.success});
  } catch(error) {
    yield put({type: actionTypes.LOGOUT.failure, error});
  }
}

export default function* rootSaga() {
  yield take(REHYDRATE);
  yield put({type: 'STORAGE_LOADED'});

  while (true) {
    let token = yield select(state => get(state, 'app.token', null));
    if (!token) {
      const { email, password } = yield take(actionTypes.LOGIN.request);
      token = yield call(authorize, email, password);
      setHeader('Authorization', `Basic ${token}`);
    }

    // yield all([
    //   fork(watchNavigate),
    //   fork(watchLoadUserPage),
    //   fork(watchLoadRepoPage),
    //   fork(watchLoadMoreStarred),
    //   fork(watchLoadMoreStargazers)
    // ])

    yield take(actionTypes.LOGOUT.request);
    // if (window.confirm('Do you really want to logout?')) {
      yield call(logout);
    // }
    removeHeader('Authorization');
  }
}
