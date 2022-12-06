import _ from 'lodash';

import {
  CREATE_MOVIE_SUCCESS,
  DELETE_MOVIE_SUCCESS,
  UPDATE_MOVIE_SUCCESS,
  FETCH_MOVIE_LIST_SUCCESS,
  FETCH_MOVIE_SUCCESS,
} from '../action-types';

const initialState = {};
// Example [{id: 'id1', name:'movie1'}] can be changed like { id1: {id: 'id1', name: 'movie1'} }
// You can use both approaches

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MOVIE_SUCCESS:
      return { ...state.movies, [action.payload.id]: action.payload };
    case DELETE_MOVIE_SUCCESS:
      return _.omit(state.movies, action.payload);
    case UPDATE_MOVIE_SUCCESS:
      return { ...state.movies, [action.payload.id]: action.payload };
    case FETCH_MOVIE_LIST_SUCCESS:
      return { ...state.movies, ..._.mapKeys(action.payload, 'id') };
    case FETCH_MOVIE_SUCCESS:
      return { ...state.movies, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
