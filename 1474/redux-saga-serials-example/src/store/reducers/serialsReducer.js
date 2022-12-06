import {
  FETCH_SERIAL_LIST_IN_PROGRESS,
  FETCH_SERIAL_LIST_SUCCESS,
  FETCH_SERIAL_LIST_FAILED,
  SERIAL_SELECTED
} from '../actions/types';

const initialState = {
  loading: false,
  error: null,
  data: [],
};

// REDUCER
export const serialsReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case FETCH_SERIAL_LIST_IN_PROGRESS:
      return { data: [], loading: true, error: null };
    case FETCH_SERIAL_LIST_SUCCESS:
      return { data: action.payload, loading: false, error: null };
    case FETCH_SERIAL_LIST_FAILED:
      return { data: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

// REDUCER
export const selectedSerialReducer = (state = null, action) => {
  switch (action.type) {
    case SERIAL_SELECTED:
      return action.payload;
    default:
      return state;
  }
};
