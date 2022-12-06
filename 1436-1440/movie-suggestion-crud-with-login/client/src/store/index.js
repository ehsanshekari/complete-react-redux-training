import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';

import reducers from './reducers';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export * from './action-creators/auth';
export * from './action-creators/movies';
export default store;
