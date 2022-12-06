import { call, put } from 'redux-saga/effects';

import { fetchPostList } from '../request/posts';
import { setPostListData } from '../../action-creators/index';

export function* handleFetchPostList(action) {
  try {
    console.log(action)
    const response = yield call(fetchPostList, {a:10, b:20});
    yield put(setPostListData(response.data));
  } catch (error) {
    console.log('error:', error);
  }
}
