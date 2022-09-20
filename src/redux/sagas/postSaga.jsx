import { put, call, takeLatest } from 'redux-saga/effects';

import { LOADING } from '../actions';
import { getError, recievePost } from '../actionCreators';
import request from '../api/request';

function* postWorker() {
  const { data, status, message } = yield call(request);
  if (status === 200) {
    yield put(recievePost(data));
  } else yield put(getError(message));
}

function* postWatcher() {
  yield takeLatest(LOADING, postWorker);
}

export default postWatcher;
