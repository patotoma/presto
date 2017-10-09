import { take, put, fork, all, select, call } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist/constants';

import * as actionTypes from './actionTypes.js';
import * as watchers from './watchers.js';
import * as workers from './workers.js';
import * as selectors from './selectors.js';

export default function* rootSaga() {
  yield take(REHYDRATE);
  yield put({type: actionTypes.STORAGE_LOADED});

  const token = yield select(selectors.getToken);
  if (token !== null) {
    yield call(workers.getUser);
  }

  yield all([
    fork(watchers.watchLogin),
    fork(watchers.watchRegister),
    fork(watchers.watchLogout),
    fork(watchers.watchGetPosts),
    fork(watchers.watchGetComments),
  ]);
}
