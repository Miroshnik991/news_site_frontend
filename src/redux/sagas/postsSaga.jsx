import { put, call, takeLatest } from 'redux-saga/effects';

import ActionTypes from '../actions';
import { getPostsError, recievePosts } from '../actionCreators';
import api from '../api/index';

function* postsWorker() {
  try {
    const { data } = yield call(() => api.get('/posts'));
    yield put(recievePosts(data));
  } catch (error) {
    yield put(getPostsError(error.name));
  }
}

function* postsWatcher() {
  yield takeLatest(ActionTypes.LOADING, postsWorker);
}

export default postsWatcher;
