import { SET_POST_LIST_DATA } from '../types';

// POSTS REDUCER
const postsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_POST_LIST_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default postsReducer;
