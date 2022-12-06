import axios from 'axios';

import {
  CREATE_MOVIE_SUCCESS,
  DELETE_MOVIE_SUCCESS,
  UPDATE_MOVIE_SUCCESS,
  FETCH_MOVIE_LIST_SUCCESS,
  FETCH_MOVIE_SUCCESS,
} from '../action-types';

export const createMovie = (name, description, onSuccess) => {
  // With getState you to access the store data
  // We can access token in different ways
  return async (dispatch, getState) => {
    const state = getState();
    const result = await axios.post(
      'http://127.0.0.1:8000/movies',
      {
        name: name,
        description: description,
        creator: state.login.data.email,
      },
      { headers: { authorization: `Bearer ${state.login.data.token}` } }
    );
    dispatch({ type: CREATE_MOVIE_SUCCESS, payload: result.data });
    onSuccess();
  };
};

export const deleteMovie = (id, navigate) => {
  return async (dispatch, getState) => {
    const state = getState();
    await axios.delete(`http://127.0.0.1:8000/movies/${id}`, {
      headers: { authorization: `Bearer ${state.login.data.token}` },
    });
    dispatch({ type: DELETE_MOVIE_SUCCESS, payload: id });
    navigate();
  };
};

export const updateMovie = (id, name, description) => {
  return async (dispatch, getState) => {
    const state = getState();
    const result = await axios.patch(
      `http://127.0.0.1:8000/movies/${id}`,
      { name, description },
      {
        headers: { authorization: `Bearer ${state.login.data.token}` },
      }
    );
    dispatch({ type: UPDATE_MOVIE_SUCCESS, payload: result.data });
  };
};

export const fetchMovie = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    const result = await axios.get(`http://127.0.0.1:8000/movies/${id}`, {
      headers: { authorization: `Bearer ${state.login.data.token}` },
    });
    dispatch({ type: FETCH_MOVIE_SUCCESS, payload: result.data });
  };
};

export const fetchMovieList = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const result = await axios.get('http://127.0.0.1:8000/movies', {
      headers: { authorization: `Bearer ${state.login.data.token}` },
    });
    dispatch({ type: FETCH_MOVIE_LIST_SUCCESS, payload: result.data });
  };
};
