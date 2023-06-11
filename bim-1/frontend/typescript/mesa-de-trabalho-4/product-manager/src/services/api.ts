import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-produtos-six.vercel.app/',
});

export default api;