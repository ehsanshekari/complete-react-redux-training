import axios from 'axios';
import {
  FETCH_SERIALS_SUCCESS,
  SERIAL_SELECTED,
  FETCH_SERIALS_IN_PROGRESS,
  FETCH_SERIALS_FAILED,
} from './types';

// ACTION CREATOR
export const fetchSerials = (term) => {
  return async (dispatch, store) => {
    // loading
    dispatch({
      type: FETCH_SERIALS_IN_PROGRESS,
    });

    try {
      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${term}`
      );

      // ACTION
      dispatch({
        type: FETCH_SERIALS_SUCCESS,
        payload: response.data,
      });
      dispatch(selectedSerial(response.data[0].show));
    } catch (e) {
      dispatch({
        type: FETCH_SERIALS_FAILED,
        payload: e.message
      });
    }
  };
};

// ACTION CREATOR
export const selectedSerial = (serial) => {
  // ACTION
  return {
    type: SERIAL_SELECTED,
    payload: serial,
  };
};
