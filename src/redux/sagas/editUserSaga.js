import { takeLatest, call, put } from 'redux-saga/effects';

import api from '../api/index';
import ActionTypes from '../actions';
import {
  editingUserSuccess,
  editingUserError,
} from '../usersActionCreators';

function* editUserWorker(action) {
  try {
    const form = yield new FormData();
    yield form.append('avatar', action.payload.file);
    yield form.append('name', action.payload.username);
    const { data } = yield call(api.post, `/users/${action.payload.id}?_method=PATCH`, form);
    yield put(editingUserSuccess(data));
  } catch (error) {
    yield put(editingUserError(error.response.data.message));
  }
}

function* editUserWatcher() {
  yield takeLatest(ActionTypes.EDITING_USER_REQUEST, editUserWorker);
}

export default editUserWatcher;
