import { takeLatest, put, call } from 'redux-saga/effects';

import api from '../api/index';
import { setToken } from '../../utils/localStorage';
import ActionTypes from '../actions';
import {
  requestAuthSuccess,
  requestAuthError,
}
  from '../actionCreators';

function* authWorker(action) {
  try {
    const { data } = yield call(api.post, '/login', action.payload);
    yield call(setToken, data.token);
    // eslint-disable-next-line no-console
    // console.log(data.user);
    yield put(requestAuthSuccess(data.user));
  } catch (error) {
    yield put(requestAuthError(error.response.data.message));
  }
}

function* authWatcher() {
  yield takeLatest(ActionTypes.AUTH_REQUEST, authWorker);
}

export default authWatcher;
