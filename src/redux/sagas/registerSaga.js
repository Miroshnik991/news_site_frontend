/* eslint-disable no-console */
import { takeLatest, put, call } from 'redux-saga/effects';

import api from '../api';
import { setToken } from '../../utils/localStorage';
import ActionTypes from '../actions';
import {
  requestRegistrationSuccess,
  requestRegistrationError,
} from '../actionCreators';

function* regWorker(action) {
  try {
    const { data } = yield call(api.post, '/register', action.payload);
    yield call(setToken, data.token);
    yield put(requestRegistrationSuccess());
  } catch (error) {
    yield put(requestRegistrationError(error.response.data.message));
  }
}

function* registerWatcher() {
  yield takeLatest(ActionTypes.REGISTRATION_REQUEST, regWorker);
}

export default registerWatcher;
