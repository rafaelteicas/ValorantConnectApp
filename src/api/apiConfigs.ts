import {API_KEY} from '@env';
import axios from 'axios';

export const api = axios.create({
  baseURL: API_KEY,
  headers: {
    'Content-Type': 'application/json',
  },
});
