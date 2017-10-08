import { promiseTypeSuffixes } from '../constants.js';

const createActionTypes = base => promiseTypeSuffixes
  .reduce((acc, type) => {
    acc[type.toLowerCase()] = `${base}_${type}`;
    return acc;
  }, {});

export const STORAGE_LOADED = 'STORAGE_LOADED';
export const LOGIN = createActionTypes('LOGIN');
export const REGISTER = createActionTypes('REGISTER');
export const LOGOUT = createActionTypes('LOGOUT');
export const GET_POSTS = createActionTypes('GET_POSTS');
export const GET_COMMENTS = createActionTypes('GET_COMMENTS');
