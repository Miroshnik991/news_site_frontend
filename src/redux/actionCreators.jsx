import ActionTypes from './actions';

export const createPostsLoader = () => ({ type: ActionTypes.LOADING });
export const recievePosts = (data) => ({ type: ActionTypes.RECIEVED, payload: data });
export const getPostsError = (error) => ({ type: ActionTypes.ERROR, payload: error });
