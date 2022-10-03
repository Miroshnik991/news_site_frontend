import { call, all } from 'redux-saga/effects';

import postsWatcher from './postsSaga';
import registerWatcher from './registerSaga';
import signOutWatcher from './signOutSaga';
import loginWatcher from './loginSaga';
import currentUserWatcher from './currentUserRequestSaga';
import userRequestWatcher from './userRequestSaga';
import addPostWatcher from './addPostSaga';
import editUserWatcher from './editUserSaga';

export default function* rootSaga() {
  yield all([
    call(postsWatcher),
    call(registerWatcher),
    call(signOutWatcher),
    call(loginWatcher),
    call(currentUserWatcher),
    call(userRequestWatcher),
    call(addPostWatcher),
    call(editUserWatcher),
  ]);
}
