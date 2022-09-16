/* eslint-disable no-console */
import { put, call, takeLatest } from 'redux-saga/effects';

import { LOADING, recievePost } from '../actions';
import request from '../api/request';

function* postWorker() {
  const { data, status } = yield call(request);
  if (status === 200) {
    yield put(recievePost(data));
  }
}

function* postWatcher() {
  yield takeLatest(LOADING, postWorker);
}

export default postWatcher;
