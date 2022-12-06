import {
  FETCH_SERIALS_FAILED,
  FETCH_SERIALS_IN_PROGRESS,
  FETCH_SERIALS_SUCCESS,
  SERIAL_SELECTED,
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
export const selectedSerialReducer = (state = null, action) => {
  switch (action.type) {
    case SERIAL_SELECTED:
      return action.payload;
    default:
      return state;
  }
};
