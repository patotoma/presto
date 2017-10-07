import { apiBase } from '../constants.js';

export function login(email, password) {
  return Promise.resolve({
    token: 'abc',
    user: { id: 'abc', name: 'John Doe', email: 'john@doe.com' },
  });
}
