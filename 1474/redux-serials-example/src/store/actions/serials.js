import axios from 'axios';
import {
  FETCH_SERIALS_FAILED,
  FETCH_SERIALS_IN_PROGRESS,
  FETCH_SERIALS_SUCCESS,
} from './types';

// ACTION CREATOR
export const fetchSerials = (term) => {
  console.log('This is fetchSerials ACTION CREATOR');
  return async (dispatch, store) => {
    console.log('This is fetchSerials ACTION CREATOR > store:', store());

    dispatch({ type: FETCH_SERIALS_IN_PROGRESS });

    try {
      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${term}`
      );
      dispatch({
        type: FETCH_SERIALS_SUCCESS,
        payload: response.data,
      });
      dispatch(selectedSerial(response.data[0].show));
    } catch (e) {
      dispatch({ type: FETCH_SERIALS_FAILED, payload: e.message });
    }
  };
};

// ACTION CREATOR
export const selectedSerial = (serial) => {
  // ACTION
  return {
    type: 'SERIAL_SELECTED',
    payload: serial,
  };
};
