import { getToken } from '../../utils/localStorage';
import ActionTypes from '../actions';

const initialState = {
  isAuth: Boolean(getToken()),
  isisLoading: false,
  isError: null,
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.AUTH_REQUEST:
    case ActionTypes.REGISTRATION_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: null,
      };
    case ActionTypes.AUTH_REQUEST_ERROR:
    case ActionTypes.REGISTRATION_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.error,
      };
    case ActionTypes.AUTH_REQUEST_SUCCESS:
    case ActionTypes.REGISTRATION_REQUEST_SUCCESS:
      return {
        ...state,
        isAuth: { email: action.payload },
        isLoading: false,
        isError: null,
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
        isAuth: null,
        isLoading: false,
        isError: null,
      };
    default:
      return state;
  }
};

export default authReducer;
