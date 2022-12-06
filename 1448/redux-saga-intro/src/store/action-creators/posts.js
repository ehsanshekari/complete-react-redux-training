import { FETCH_POST_LIST, SET_POST_LIST } from '../action-types';

// ACTION CREATOR
export const fetchPostList = () => {
  // ACTION
  return {
    type: FETCH_POST_LIST,
  };
};

export const setPostListData = (data) => {
  return {
    type: SET_POST_LIST,
    payload: data,
  };
};
