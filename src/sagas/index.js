import { take, put, fork, all, call } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist/constants';

import * as actionTypes from './actionTypes.js';
import * as watchers from './watchers.js';
import * as workers from './workers.js';

export default function* rootSaga() {
  const [authStateChanged] = yield all([
    take(actionTypes.AUTH_STATE_CHANGED.request), // first auth state change
    take(REHYDRATE), // localStorage rehydrate
  ]);
  yield call(workers.authStateChanged, authStateChanged);

  yield put({type: actionTypes.APP_LOADED});

  yield all([
    fork(watchers.watchAuthStateChanged),
    fork(watchers.watchLogin),
    fork(watchers.watchRegister),
    fork(watchers.watchLogout),
    fork(watchers.watchGetPosts),
    fork(watchers.watchGetComments),
  ]);
}
