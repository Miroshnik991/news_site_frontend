import { takeLatest, put, call } from 'redux-saga/effects';

import api from '../api';
import ActionTypes from '../actions';
import { requestCurrentUserSuccess, requestCurrentUserError } from '../usersActionCreators';

function* currentUserWorker(action) {
  try {
    const { data } = yield call(api.get, `/api/users/${action.payload}`);
    yield put(requestCurrentUserSuccess(data));
  } catch (error) {
    yield put(requestCurrentUserError(error.response.data.message));
  }
}

function* currentUserWatcher() {
  yield takeLatest(ActionTypes.CURRENT_USER_REQUEST, currentUserWorker);
}

export default currentUserWatcher;
