import {
  FETCH_SERIALS_FAILED,
  FETCH_SERIALS_IN_PROGRESS,
  FETCH_SERIALS_SUCCESS,
  SERIAL_SELECTED,
} from '../actions/types';

const initialState = { data: [], loading: false, error: null };

export const serialsReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERIALS_IN_PROGRESS:
      return { data: [], loading: true, error: null };
    case FETCH_SERIALS_SUCCESS:
      return { data: action.payload, loading: false, error: null };
    case FETCH_SERIALS_FAILED:
      return { data: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export const selectedSerialReducer = (state = null, action) => {
  switch (action.type) {
    case SERIAL_SELECTED:
      return action.payload;
    default:
      return state;
  }
};
