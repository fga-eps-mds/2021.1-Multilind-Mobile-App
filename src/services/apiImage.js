import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.0.88:5000',
  headers: {
    'Content-type': 'application/json',
  },
});

export default instance;
