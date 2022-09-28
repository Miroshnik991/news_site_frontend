import { call, all } from 'redux-saga/effects';

import postsWatcher from './postsSaga';
import registerWatcher from './registerSaga';
import signOutWatcher from './signOutSaga';
import authWatcher from './authSaga';

export default function* rootSaga() {
  yield all([
    call(postsWatcher),
    call(registerWatcher),
    call(signOutWatcher),
    call(authWatcher),
  ]);
}