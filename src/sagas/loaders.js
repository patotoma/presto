import { apiBase } from '../constants.js';
import api, { setHeader, removeHeader } from '../services/api.js';
import history from '../services/history.js';
import * as selectors from './selectors.js';

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
