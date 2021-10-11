import axios from 'axios';
import urls from '../config/env';

const instance = axios.create({
  baseURL: urls.contentServer,
  headers: {
    'Content-type': 'application/json',
  },
});

export default instance;
