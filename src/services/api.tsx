import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.api-onepiece.com/v2',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
