import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import postsReducers from './reducers/postsReducers';
import { watcherSaga } from './sagas/rootSaga';

const reducers = combineReducers({ posts: postsReducers });

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSaga);

export default store;
