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
        currentUser: action.payload.user,
        userPageloading: false,
        userPageError: false,
        currentUserPosts: action.payload.posts,
      };
    default:
      return state;
  }
};

export default usersReducer;
