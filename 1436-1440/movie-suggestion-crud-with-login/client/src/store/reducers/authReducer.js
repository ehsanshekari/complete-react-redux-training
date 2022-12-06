import {
  LOGIN_FAIL,
  LOGIN_IN_PROCESS,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../action-types';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_IN_PROCESS:
      return {
        loading: true,
        error: null,
        data: null,
      };
    case LOGIN_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
        data: null,
      };
    case LOGOUT:
      return {
        loading: false,
        error: false,
        data: null,
      };
    default:
      return state;
  }
};
