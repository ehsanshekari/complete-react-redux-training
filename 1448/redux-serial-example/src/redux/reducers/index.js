import { combineReducers } from 'redux';
import {
  FETCH_SERIALS_FAILED,
  FETCH_SERIALS_IN_PROGRESS,
  FETCH_SERIALS_SUCCESS,
  SELECT_SERIAL,
} from '../action-types';

const initialState = { loading: false, error: null, data: [] };
// REDUCER
const serialsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERIALS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case FETCH_SERIALS_IN_PROGRESS:
      return { loading: true, error: null, data: [] };
    case FETCH_SERIALS_FAILED:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

// REDUCER
const selectedSerialReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_SERIAL:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  serials: serialsReducer,
  selectedSerial: selectedSerialReducer,
});
