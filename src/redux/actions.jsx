/* eslint-disable no-console */
export const LOADING = 'LOADING';
export const RECIEVED = 'RECIEVED';
export const ERROR = 'ERROR';

export const getPosts = () => ({ type: LOADING });
export const recievePost = (data) => ({ type: RECIEVED, payload: data });
export const getError = (er) => ({ type: ERROR, payload: er });
