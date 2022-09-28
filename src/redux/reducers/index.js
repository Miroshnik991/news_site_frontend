import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import authReducer from './authReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  postsReducer,
  authReducer,
  usersReducer,
});

export default rootReducer;
