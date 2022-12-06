import axios from 'axios';
import {
  FETCH_SERIALS_SUCCESS,
  FETCH_SERIALS_IN_PROGRESS,
  FETCH_SERIALS_FAILED,
  SELECT_SERIAL
} from '../action-types';

// ACTION CREATOR
export const fetchSerials = (searchTerm) => {
  return async (dispatch, store) => {
    console.log('THIS IS THE STORE CONTENT:', store());
    dispatch({ type: FETCH_SERIALS_IN_PROGRESS });

    try {
      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${searchTerm}`
      );

      dispatch({
        type: FETCH_SERIALS_SUCCESS,
        payload: response.data,
      });
      dispatch(selectSerial(response.data[0].show));
    } catch (e) {
      dispatch({ type: FETCH_SERIALS_FAILED, payload: e.message });
    }
  };
};

// ACTION CREATOR
export const selectSerial = (serial) => {
  // ACTION
  return {
    type: SELECT_SERIAL,
    payload: serial
  }
}