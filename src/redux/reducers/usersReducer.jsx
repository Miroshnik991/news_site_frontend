import ActionTypes from '../actions';

const initialState = {
  current: null,
};

const usersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.CURRENT_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.CURRENT_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case ActionTypes.CURRENT_USER_SUCCESS:
      return {
        ...state,
        current: action.payload,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};

export default usersReducer;
