import { LOADING, RECIEVED, ERROR } from './actions';

export const getPosts = () => ({ type: LOADING });
export const recievePost = (data) => ({ type: RECIEVED, payload: data });
export const getError = (error) => ({ type: ERROR, payload: error });
