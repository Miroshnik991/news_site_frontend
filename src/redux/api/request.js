import api from './index';

async function request() {
  const response = await api.get('/posts');
  return response;
}

export default request;
