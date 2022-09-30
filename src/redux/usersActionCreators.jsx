import ActionTypes from './actions';

export const requestCurrentUser = (payload) => ({
  type: ActionTypes.CURRENT_USER_REQUEST, payload,
});

export const requestCurrentUserSuccess = (payload) => ({
  type: ActionTypes.CURRENT_USER_SUCCESS, payload,
});

export const requestCurrentUserError = (error) => ({
  type: ActionTypes.CURRENT_USER_ERROR, error,
});

export const requestAddPost = (payload) => ({
  type: ActionTypes.ADD_POST_REQUEST, payload,
});

export const requestAddPostSuccess = (payload) => ({
  type: ActionTypes.ADD_POST_SUCCESS, payload,
});

export const requestAddPostError = (error) => ({
  type: ActionTypes.ADD_POST_ERROR, error,
});
