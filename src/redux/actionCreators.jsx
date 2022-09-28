import ActionTypes from './actions';

export const createPostsLoader = () => ({ type: ActionTypes.LOADING });
export const recievePosts = (data) => ({ type: ActionTypes.RECIEVED, payload: data });
export const getPostsError = (error) => ({ type: ActionTypes.ERROR, payload: error });
export const requestRegistration = (payload) => ({
  type: ActionTypes.REGISTRATION_REQUEST, payload,
});

export const requestRegistrationSuccess = (payload) => ({
  type: ActionTypes.REGISTRATION_REQUEST_SUCCESS, payload,
});

export const requestRegistrationError = (error) => ({
  type: ActionTypes.REGISTRATION_REQUEST_ERROR, error,
});
export const requestLogin = (payload) => ({ type: ActionTypes.LOGIN_REQUEST, payload });

export const requestLoginSuccess = (payload) => ({
  type: ActionTypes.LOGIN_REQUEST_SUCCESS,
  payload,
});

export const requestLoginError = (error) => ({
  type: ActionTypes.LOGIN_REQUEST_ERROR,
  error,
});

export const requestSignOut = () => ({
  type: ActionTypes.SIGN_OUT_REQUEST,
});

export const requestSignOutSuccess = () => ({
  type: ActionTypes.SIGN_OUT_SUCCESS,
});

export const requestSignOutError = (error) => ({
  type: ActionTypes.SIGN_OUT_ERROR,
  error,
});

export const requestAuth = () => ({ type: ActionTypes.AUTH_REQUEST });

export const requestAuthSuccess = (payload) => ({
  type: ActionTypes.AUTH_REQUEST_SUCCESS,
  payload,
});

export const requestAuthError = (error) => ({
  type: ActionTypes.AUTH_REQUEST_ERROR,
  error,
});
