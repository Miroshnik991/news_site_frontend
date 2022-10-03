import { takeLatest, put, call } from 'redux-saga/effects';

import api from '../api';
import ActionTypes from '../actions';
import { requestAuthSuccess, requestAuthError } from '../actionCreators';

function* userRequestWorker() {
  try {
    const { data } = yield call(api.post, '/api/auth');
    yield put(requestAuthSuccess(data.user));
  } catch (error) {
    yield put(requestAuthError(error.response.data.message));
  }
}

function* userRequestWatcher() {
  yield takeLatest(ActionTypes.AUTH_REQUEST, userRequestWorker);
}

export default userRequestWatcher;
