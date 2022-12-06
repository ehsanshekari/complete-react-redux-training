import axios from 'axios';
import {
  FETCH_SERIALS_IN_PROGRESS,
  FETCH_SERIALS_FAILED,
  FETCH_SERIALS_SUCCESS,
  SELECT_SERIAL,
} from '../action-types';

// ACTION CREATOR
// THIS IS NOT CORRECT
// export const fetchSerials = async (term) => {
//     const response = await axios.get(
//         `https://api.tvmaze.com/search/shows?q=${term}`
//     );

//     return {
//         type: 'FETCH_SERIALS_SUCCESS',
//         payload: response.data
//     }
// }

// export const fetchSerials = (term) => {
//   return async (dispatch, store) => {
//     const response = await axios.get(
//       `https://api.tvmaze.com/search/shows?q=${term}`
//     );

//     dispatch({
//       type: 'FETCH_SERIALS_SUCCESS',
//       payload: response.data,
//     });
//   };
// };

export const fetchSerials = (term) => {
  return async (dispatch, store) => {
    // console.log('MY STATE IS:', store());
    dispatch({ type: FETCH_SERIALS_IN_PROGRESS });

    try {
      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${term}`
      );

      dispatch({
        type: FETCH_SERIALS_SUCCESS,
        payload: response.data,
      });
      dispatch(selectSerial(response.data[0].show));
    } catch (e) {
      dispatch({
        type: FETCH_SERIALS_FAILED,
        payload: e.message,
      });
    }
  };
};

export const selectSerial = (serial) => {
  return {
    type: SELECT_SERIAL,
    payload: serial,
  };
};
