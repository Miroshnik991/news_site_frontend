import { getToken } from '../../utils/localStorage';
import ActionTypes from '../actions';

const initialState = {
  isAuth: Boolean(getToken()),
  isLoading: false,
  isError: null,
  userData: {},
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
    case ActionTypes.REGISTRATION_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: null,
      };
    case ActionTypes.LOGIN_REQUEST_ERROR:
    case ActionTypes.REGISTRATION_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.error,
      };
    case ActionTypes.LOGIN_REQUEST_SUCCESS:
    case ActionTypes.REGISTRATION_REQUEST_SUCCESS:
    case ActionTypes.AUTH_REQUEST_SUCCESS:
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        isError: null,
        userData: action.payload,
      };
    case ActionTypes.SIGN_OUT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: null,
      };
    case ActionTypes.SIGN_OUT_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.error,
      };
    case ActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        isError: null,
        userData: {},
      };
    default:
      return state;
  }
};

export default authReducer;
