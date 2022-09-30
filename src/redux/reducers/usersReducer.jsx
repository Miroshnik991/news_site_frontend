import ActionTypes from '../actions';

const initialState = {
  currentUser: {},
  userPageloading: false,
  userPageError: null,
  currentUserPosts: [],
};

const usersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.CURRENT_USER_REQUEST:
      return {
        ...state,
        userPageloading: true,
      };
    case ActionTypes.CURRENT_USER_ERROR:
      return {
        ...state,
        userPageloading: false,
        userPageError: action.error,
      };
    case ActionTypes.CURRENT_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        userPageloading: false,
        userPageError: false,
        currentUserPosts: action.payload.posts,
      };
    case ActionTypes.ADD_POST_REQUEST:
      return {
        ...state,
        userPageloading: true,
        userPageError: null,
      };
    case ActionTypes.ADD_POST_ERROR:
      return {
        ...state,
        userPageloading: false,
        userPageError: action.error,
      };
    case ActionTypes.ADD_POST_SUCCESS:
      return {
        ...state,
        currentUserPosts: [...state.currentUserPosts, action.payload],
        userPageloading: false,
        userPageError: null,
      };
    default:
      return state;
  }
};

export default usersReducer;
