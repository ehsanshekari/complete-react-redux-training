import { SET_POST_LIST } from '../action-types';

// REDUCER
export const postReducer = (state = [], action) => {
  switch (action.type) {
    case SET_POST_LIST:
      return action.payload;
    default:
      return state;
  }
};
