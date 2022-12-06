import { takeLatest } from "redux-saga/effects";

import { FETCH_POST_LIST } from "../action-types";
import { handleFetchPostList } from "./handlers/posts";

export function* watcherSaga(){
  yield takeLatest(FETCH_POST_LIST, handleFetchPostList)
}