// // trigger router navigation via history
// function* watchNavigate() {
//   while(true) {
//     const {pathname} = yield take(actions.NAVIGATE)
//     yield history.push(pathname)
//   }
// }

// // Fetches data for a User : user data + starred repos
// function* watchLoadUserPage() {
//   while(true) {
//     const {login, requiredFields = []} = yield take(actions.LOAD_USER_PAGE)
//
//     yield fork(loadUser, login, requiredFields)
//     yield fork(loadStarred, login)
//   }
// }

// // Fetches data for a Repo: repo data + repo stargazers
// function* watchLoadRepoPage() {
//   while(true) {
//     const {fullName, requiredFields = []} = yield take(actions.LOAD_REPO_PAGE)
//
//     yield fork(loadRepo, fullName, requiredFields)
//     yield fork(loadStargazers, fullName)
//   }
// }

// // Fetches more starred repos, use pagination data from getStarredByUser(login)
// function* watchLoadMoreStarred() {
//   while(true) {
//     const {login} = yield take(actions.LOAD_MORE_STARRED)
//     yield fork(loadStarred, login, true)
//   }
// }

// function* watchLoadMoreStargazers() {
//   while(true) {
//     const {fullName} = yield take(actions.LOAD_MORE_STARGAZERS)
//     yield fork(loadStargazers, fullName, true)
//   }
// }
