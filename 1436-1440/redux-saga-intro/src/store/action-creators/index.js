import { FETCH_POST_LIST, SET_POST_LIST_DATA } from '../types';

// ACTION CREATOR
export const fetchPostList = () => {
  // ACTION
  return {
    type: FETCH_POST_LIST,
  };
};

// ACTION CREATOR
export const setPostListData = (data) => {
  // ACTION
  return {
    type: SET_POST_LIST_DATA,
    payload: data
  };
};
