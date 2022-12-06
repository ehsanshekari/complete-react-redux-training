import axios from 'axios';
import jwtDecode from 'jwt-decode';

import {
  LOGIN_FAIL,
  LOGIN_IN_PROCESS,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../action-types';

export const checkAuthTimeout = (expireTime) => {
  const milliSecondsToBeValid =
    new Date(expireTime * 1000).getTime() - new Date().getTime();
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, milliSecondsToBeValid);
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    dispatch({
      type: LOGIN_IN_PROCESS,
    });

    try {
      const result = await axios.post('http://127.0.0.1:8000/auth/login', {
        email,
        password,
      });
      const decodedToken = jwtDecode(result.data.access_token);
      localStorage.setItem('token', result.data.access_token);
      localStorage.setItem('email', decodedToken.email);
      localStorage.setItem('iat', decodedToken.iat);
      localStorage.setItem('exp', decodedToken.exp);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token: result.data.access_token,
          email: decodedToken.email,
          iat: decodedToken.iat,
          exp: decodedToken.exp,
        },
      });
      dispatch(checkAuthTimeout(decodedToken.exp));
    } catch (e) {
      dispatch({
        type: LOGIN_FAIL,
        payload: e.message,
      });
    }
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('email');
  localStorage.removeItem('iat');
  localStorage.removeItem('exp');
  return {
    type: LOGOUT,
  };
};

export const checkAuthStatus = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      const expireDate = new Date(parseInt(localStorage.getItem('exp')) * 1000);
      if (expireDate <= new Date()) {
        dispatch(logout());
      } else {
        const email = localStorage.getItem('email');
        const exp = localStorage.getItem('exp');
        const iat = localStorage.getItem('iat');

        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            token,
            email,
            exp,
            iat,
          },
        });
      }
    }
  };
};
