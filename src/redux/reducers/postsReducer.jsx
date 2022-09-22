import ActionTypes from '../actions';

const defaultState = {
  posts: [],
  isFetching: false,
  error: null,
};

const postsReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case ActionTypes.LOADING:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case ActionTypes.RECIEVED:
      return {
        ...state,
        posts: action.payload,
        isFetching: false,
      };
    case ActionTypes.ERROR:
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
