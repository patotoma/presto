import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { autoRehydrate } from 'redux-persist';
import { Router, Route } from 'react-router-dom';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import createFilter from 'redux-persist-transform-filter';
import { loadingBarMiddleware } from 'react-redux-loading-bar';

import {
  isDev,
  storageKeyPrefix,
  promiseTypeSuffixes,
} from './constants.js';
import history from './services/history.js';
import rootSaga from './sagas/rootSaga.js';
import rootReducer from './reducers/rootReducer.js';
import registerServiceWorker from './registerServiceWorker.js';

import Theme from './Theme.js';
import App from './containers/App/App.js';

const sagaMiddleware = createSagaMiddleware();

let middlewares = [
  sagaMiddleware,
  loadingBarMiddleware({
    promiseTypeSuffixes: promiseTypeSuffixes,
  }),
];

// apply these only in development mode
if (isDev) {
  // add actions to ignore here
  const ignoredActions = [];
  const logger = createLogger({
    collapsed: true,
    predicate: (getState, action) => ignoredActions.indexOf(action.type) === -1,
  });
  // redux-logger middleware must be the last middleware in chain.
  middlewares.push(logger);
}

const enhancer = compose(
  applyMiddleware(...middlewares),
  autoRehydrate(), // autoRehydrate is not a middleware but an enhancer
);

const store = createStore(
  rootReducer,
  undefined, // preloadedState, useful with server rendering
  enhancer,
);

// redux-persist persistStore right after creation
persistStore(store, {
  // debounce: 300,
  keyPrefix: storageKeyPrefix,
  transforms: [
    // if you want to store only a subset of your state
    createFilter(
      'app', ['token'],
    ),
  ],
  whitelist: ['app'],
}, (err, incomingState) => {
  // after rehydration has completed
  console.info('rehydration complete');
});

// If things get out of wack, just purge the storage
// persistStore(store, config, callback).purge()

// run rootSaga
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    {/* we are not using the BrowserRouter directly */}
    {/* but plain Router with passing our custom History */}
    {/* this is to be able to manage history outside of components (e.g. action creators) */}
    <Router history={history}>
      <Theme>
        <Route path="/" component={App}/>
      </Theme>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
