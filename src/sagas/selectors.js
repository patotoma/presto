import { get } from 'lodash';

export const getToken = (state) => get(state, 'app.token', null);
export const getUser = (state) => get(state, 'app.user', null);
// export const getRepo = (state, fullName) => state.entities.repos[fullName];
// export const getStarredByUser = (state, login) => state.pagination.starredByUser[login] || {};
// export const getStargazersByRepo = (state, fullName) => state.pagination.stargazersByRepo[fullName] || {};
