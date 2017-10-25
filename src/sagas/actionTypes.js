import { promiseTypeSuffixes } from '../constants.js';

const createActionTypes = base => promiseTypeSuffixes
  .reduce((acc, type) => {
    acc[type.toLowerCase()] = `${base}_${type}`;
    return acc;
  }, {});

export const APP_LOADED = 'APP_LOADED';
export const AUTH_STATE_CHANGED = createActionTypes('AUTH_STATE_CHANGED');
export const LOGIN = createActionTypes('LOGIN');
export const REGISTER = createActionTypes('REGISTER');
export const LOGOUT = createActionTypes('LOGOUT');
export const GET_USER = createActionTypes('GET_USER');
export const GET_POSTS = createActionTypes('GET_POSTS');
export const GET_COMMENTS = createActionTypes('GET_COMMENTS');
