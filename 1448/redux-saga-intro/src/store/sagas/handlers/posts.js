import { call, put } from 'redux-saga/effects';
import { fetchPostList } from '../requests/posts';
import { setPostListData } from '../../action-creators/posts';

export function* handleFetchPostList() {
  try {
    const response = yield call(fetchPostList, { limit: 10 });
    yield put(setPostListData(response.data));
  } catch (error) {
    console.log('Error:', error);
  }
}
