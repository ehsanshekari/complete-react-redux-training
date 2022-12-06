import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { movieReducer } from './movieReducer';

export default combineReducers({
  login: authReducer,
  movies: movieReducer,
});
