import { put, call } from 'redux-saga/effects';

import { setHeader, removeHeader } from '../services/api.js';
import * as actionTypes from './actionTypes.js';
import * as apiCalls from './apiCalls.js';

export function* login({ email, password }) {
  try {
    const { token, user } = yield call(apiCalls.login, email, password);
    yield put({type: actionTypes.LOGIN.success, token, user});
    setHeader('Authorization', `Basic ${token}`);
  } catch(error) {
    yield put({type: actionTypes.LOGIN.failure, error});
  }
}

export function* logout() {
  try {
    yield call(apiCalls.logout);
    yield put({type: actionTypes.LOGOUT.success});
    removeHeader('Authorization');
  } catch(error) {
    yield put({type: actionTypes.LOGOUT.failure, error});
  }
}

export function* getPosts() {
  try {
    const response = yield call(apiCalls.getPosts);
    yield put({type: actionTypes.GET_POSTS.success, response});
  } catch(error) {
    yield put({type: actionTypes.GET_POSTS.failure, error});
  }
}

export function* getComments() {
  try {
    const response = yield call(apiCalls.getComments);
    yield put({type: actionTypes.GET_COMMENTS.success, response});
  } catch(error) {
    yield put({type: actionTypes.GET_COMMENTS.failure, error});
  }
}
