import { fork, all } from 'redux-saga/effects';
import postWatcher from './postSaga';

export default function* rootSaga() {
  yield all([
    fork(postWatcher),
  ]);
}
