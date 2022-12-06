import { call, put } from 'redux-saga/effects';
import { selectedSerial } from '../../actions/serials';
import {
  FETCH_SERIALS_FAILED,
  FETCH_SERIALS_IN_PROGRESS,
  FETCH_SERIALS_SUCCESS,
} from '../../actions/types';

import { fetchSerials } from '../requests/serials';

export function* handleFetchSerialList(action) {
  yield put({ type: FETCH_SERIALS_IN_PROGRESS });

  try {
    const response = yield call(fetchSerials, action.payload);
    yield put({ type: FETCH_SERIALS_SUCCESS, payload: response.data });
    yield put(selectedSerial(response.data[0].show));
  } catch (e) {
    yield put({ type: FETCH_SERIALS_FAILED, payload: e.message });
  }
}
