import { takeLatest } from 'redux-saga/effects';

import { FETCH_SERIAL_LIST } from '../actions/types';
import { handleFetchSerialList } from './handlers/serials';

export function* watcherSaga() {
  yield takeLatest(FETCH_SERIAL_LIST, handleFetchSerialList);
}
