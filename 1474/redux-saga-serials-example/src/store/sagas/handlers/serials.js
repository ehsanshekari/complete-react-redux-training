import { call, put } from 'redux-saga/effects';

import { fetchSerials } from '../requests/serials';
import {
  FETCH_SERIAL_LIST_IN_PROGRESS,
  FETCH_SERIAL_LIST_SUCCESS,
  FETCH_SERIAL_LIST_FAILED,
  SERIAL_SELECTED
} from '../../actions/types';

export function* handleFetchSerialList(action) {
  console.log('handleFetchSerialList > action:', action);
  yield put({ type: FETCH_SERIAL_LIST_IN_PROGRESS });
  try {
    const response = yield call(fetchSerials, action.payload);
    yield put({ type: FETCH_SERIAL_LIST_SUCCESS, payload: response.data });
    yield put({ type: SERIAL_SELECTED, payload: response.data[0].show})
  } catch (e) {
    yield put({ type: FETCH_SERIAL_LIST_FAILED, payload: e.message });
  }
}
