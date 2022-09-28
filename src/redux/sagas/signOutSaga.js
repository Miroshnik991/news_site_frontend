import { takeLatest, put, call } from 'redux-saga/effects';

import ActionTypes from '../actions';
import {
  requestSignOutSuccess,
  requestSignOutError,
} from '../actionCreators';
import { deleteToken } from '../../utils/localStorage';

function* signOutWorker() {
  try {
    yield call(deleteToken);
    yield put(requestSignOutSuccess());
  } catch (error) {
    yield put(requestSignOutError(error));
  }
}

function* signOutWatcher() {
  yield takeLatest(ActionTypes.SIGN_OUT_REQUEST, signOutWorker);
}

export default signOutWatcher;
