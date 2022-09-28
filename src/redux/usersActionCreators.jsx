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
