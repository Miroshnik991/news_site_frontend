import {
  takeLatest,
  put,
  call,
} from 'redux-saga/effects';
import api from '../api/index';
import ActionTypes from '../actions';
import { requestAddPostSuccess, requestAddPostError } from '../usersActionCreators';

function* addPostWorker(action) {
  try {
    const form = yield new FormData();
    yield form.append('image', action.payload.file);
    yield form.append('title', action.payload.title);
    yield form.append('content', action.payload.content);
    yield form.append('tags', action.payload.tags);
    yield form.append('user_id', action.payload.user_id);
    const { data } = yield call(api.post, '/api/posts', form);
    yield put(requestAddPostSuccess(data));
  } catch (error) {
    yield put(requestAddPostError(error));
  }
}

function* addPostWatcher() {
  yield takeLatest(ActionTypes.ADD_POST_REQUEST, addPostWorker);
}

export default addPostWatcher;
