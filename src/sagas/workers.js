import { call, put } from 'redux-saga/effects';

import api, { setHeader, removeHeader } from '../services/api.js';
import * as actionTypes from './actionTypes.js';
import * as apiCalls from './apiCalls.js';

export function* login({ email, password }) {
  try {
    const { token, user } = yield call(apiCalls.login, email, password);
    yield put({type: actionTypes.LOGIN.success, token, user});
    return token;
  } catch(error) {
    yield put({type: actionTypes.LOGIN.failure, error});
  }
}

export function* logout() {
  try {
    yield Promise.resolve();
    yield put({type: actionTypes.LOGOUT.success});
  } catch(error) {
    yield put({type: actionTypes.LOGOUT.failure, error});
  }
}

// // load repo unless it is cached
// function* loadRepo(fullName, requiredFields) {
//   const repo = yield select(getRepo, fullName)
//   if (!repo || requiredFields.some(key => !repo.hasOwnProperty(key)))
//     yield call(fetchRepo, fullName)
// }

// // load next page of repos starred by this user unless it is cached
// function* loadStarred(login, loadMore) {
//   const starredByUser = yield select(getStarredByUser, login)
//   if (!starredByUser || !starredByUser.pageCount || loadMore)
//     yield call(
//       fetchStarred,
//       login,
//       starredByUser.nextPageUrl || firstPageStarredUrl(login)
//     )
// }

// // load next page of users who starred this repo unless it is cached
// function* loadStargazers(fullName, loadMore) {
//   const stargazersByRepo = yield select(getStargazersByRepo, fullName)
//   if (!stargazersByRepo || !stargazersByRepo.pageCount || loadMore)
//     yield call(
//       fetchStargazers,
//       fullName,
//       stargazersByRepo.nextPageUrl || firstPageStargazersUrl(fullName)
//     )
// }
