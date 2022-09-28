import { takeLatest, put, call } from 'redux-saga/effects';

import api from '../api/index';
import { setToken } from '../../utils/localStorage';
import ActionTypes from '../actions';
import {
  requestLoginSuccess,
  requestLoginError,
}
  from '../actionCreators';

function* authWorker(action) {
  try {
    const { data } = yield call(api.post, '/login', action.payload);
    yield call(setToken, data.token);
    yield put(requestLoginSuccess(data.user));
  } catch (error) {
    yield put(requestLoginError(error.response.data.message));
  }
}

function* loginWatcher() {
  yield takeLatest(ActionTypes.LOGIN_REQUEST, authWorker);
}

export default loginWatcher;
