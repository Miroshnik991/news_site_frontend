import { takeLatest, call, put } from 'redux-saga/effects';

import api from '../api/index';
import ActionTypes from '../actions';
import {
  editingUserSuccess,
  editingUserError,
  requestCurrentUser,
} from '../usersActionCreators';

function* editUserWorker(action) {
  try {
    const form = yield new FormData();
    yield form.append('avatar', action.payload.file);
    yield form.append('name', action.payload.username);
    yield form.append('id', action.payload.id);
    const { data } = yield call(api.post, `/users/${action.payload.id}`, form);
    yield put(editingUserSuccess(data));
    yield put(requestCurrentUser(action.payload.id));
  } catch (error) {
    yield put(editingUserError(error.response.data.message));
  }
}

function* editUserWatcher() {
  yield takeLatest(ActionTypes.EDITING_USER_REQUEST, editUserWorker);
}

export default editUserWatcher;
