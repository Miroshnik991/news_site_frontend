import { put, call, takeLatest } from 'redux-saga/effects';

import { LOADING } from '../actions';
import { getError, recievePost } from '../actionCreators';
import api from '../api/index';

function* postWorker() {
  try {
    const { data } = yield call(() => api.get('/posts'));
    yield put(recievePost(data));
  } catch (error) {
    yield put(getError(error.name));
  }
}

function* postWatcher() {
  yield takeLatest(LOADING, postWorker);
}

export default postWatcher;
