import { take, put, fork, all } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist/constants';

import * as watchers from './watchers.js';

export default function* rootSaga() {
  yield take(REHYDRATE);
  yield put({type: 'STORAGE_LOADED'});

  yield all([
    fork(watchers.watchLogin),
    fork(watchers.watchLogout),
    fork(watchers.watchGetPosts),
    fork(watchers.watchGetComments),
  ]);
}
