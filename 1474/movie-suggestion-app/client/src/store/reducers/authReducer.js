import {
  LOGIN_IN_PROGRESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../action-types';

const initialValue = {
  loading: false,
  error: null,
  data: null,
};

export const authReducer = (state = initialValue, action) => {
  switch (action.type) {
    case LOGIN_IN_PROGRESS:
      return { loading: true, error: null, data: null };
    case LOGIN_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case LOGIN_FAIL:
      return { loading: false, error: action.payload, data: null };
    case LOGOUT:
      return { loading: false, error: null, data: null };
    default:
      return state;
  }
};
