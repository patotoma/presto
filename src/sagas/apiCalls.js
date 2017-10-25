import * as firebase from 'firebase';

import api from '../services/api.js';
import { apiBase } from '../constants.js';

export function login(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function register(firstName, surname, email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export function logout() {
  return firebase.auth().signOut();
}

export function getPosts() {
  return api.get({url: `${apiBase}/posts`});
}

export function getComments() {
  return api.get({url: `${apiBase}/comments`});
}
