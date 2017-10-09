import { put, call } from 'redux-saga/effects';

import { setHeader, removeHeader } from '../services/api.js';
import * as actionTypes from './actionTypes.js';
import * as apiCalls from './apiCalls.js';

export function* login({ email, password, remember }) {
  try {
    const { token, user } = yield call(apiCalls.login, email, password);
    yield put({type: actionTypes.LOGIN.success, token, user, remember});
    setHeader('Authorization', `Basic ${token}`);
  } catch(error) {
    yield put({type: actionTypes.LOGIN.failure, error});
  }
}

export function* register({ firstName, surname, email, password, remember }) {
  try {
    const { token, user } = yield call(apiCalls.register, firstName, surname, email, password);
    yield put({type: actionTypes.REGISTER.success, token, user, remember});
    setHeader('Authorization', `Basic ${token}`);
  } catch(error) {
    yield put({type: actionTypes.REGISTER.failure, error});
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

export function* getUser() {
  try {
    const { user } = yield call(apiCalls.getUser);
    yield put({type: actionTypes.GET_USER.success, user});
  } catch(error) {
    yield put({type: actionTypes.GET_USER.failure, error});
  }
}

export function* getPosts() {
  try {
    const { posts } = yield call(apiCalls.getPosts);
    yield put({type: actionTypes.GET_POSTS.success, posts});
  } catch(error) {
    yield put({type: actionTypes.GET_POSTS.failure, error});
  }
}

export function* getComments() {
  try {
    const { comments } = yield call(apiCalls.getComments);
    yield put({type: actionTypes.GET_COMMENTS.success, comments});
  } catch(error) {
    yield put({type: actionTypes.GET_COMMENTS.failure, error});
  }
}
