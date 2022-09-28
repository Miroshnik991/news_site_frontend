import axios from 'axios';

import { getToken } from '../../utils/localStorage';

const api = axios.create({ baseURL: process.env.REACT_APP_API_URL });

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      const { headers } = config;
      headers.Authorization = `Bearer ${token.replace(/"/g, ' ')}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default api;
