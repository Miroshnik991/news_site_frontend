/* eslint-disable no-console */
import { LOADING, RECIEVED, ERROR } from '../actions';

const defaultState = {
  post: [],
  isFetching: false,
  error: null,
};

const postReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case RECIEVED:
      return {
        ...state,
        post: action.payload,
        isFetching: false,
        error: null,
      };
    case ERROR:
      return {
        ...state,
        post: [],
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
