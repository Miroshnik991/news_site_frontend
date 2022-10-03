import ActionTypes from '../actions';

const initialState = {
  currentUser: {},
  userPageLoading: false,
  userPageError: null,
  currentUserPosts: [],
};

const usersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.CURRENT_USER_REQUEST:
      return {
        ...state,
        userPageLoading: true,
      };
    case ActionTypes.CURRENT_USER_ERROR:
      return {
        ...state,
        userPageLoading: false,
        userPageError: action.error,
      };
    case ActionTypes.CURRENT_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        userPageLoading: false,
        userPageError: false,
        currentUserPosts: action.payload.posts,
      };
    case ActionTypes.ADD_POST_REQUEST:
      return {
        ...state,
        userPageLoading: true,
        userPageError: null,
      };
    case ActionTypes.ADD_POST_ERROR:
      return {
        ...state,
        userPageLoading: false,
        userPageError: action.error,
      };
    case ActionTypes.ADD_POST_SUCCESS:
      return {
        ...state,
        currentUserPosts: [...state.currentUserPosts, action.payload],
        userPageLoading: false,
        userPageError: null,
      };
    case ActionTypes.EDITING_USER_REQUEST:
      return {
        ...state,
        userPageLoading: true,
      };
    case ActionTypes.EDITING_USER_ERROR:
      return {
        ...state,
        userPageLoading: false,
        error: action.error,
      };
    case ActionTypes.EDITING_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        userPageLoading: false,
      };
    default:
      return state;
  }
};

export default usersReducer;
