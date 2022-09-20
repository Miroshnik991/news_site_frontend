import api from './index';

async function request() {
  const response = await api.get('/posts').catch((error) => error);
  return response;
}

export default request;
