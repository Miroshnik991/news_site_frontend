import { LOADING, RECIEVED, ERROR } from '../actions';

const defaultState = {
  posts: [],
  isFetching: false,
  error: null,
};

const postsReducer = (state = defaultState, action = {}) => {
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
        posts: action.payload,
        isFetching: false,
      };
    case ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
