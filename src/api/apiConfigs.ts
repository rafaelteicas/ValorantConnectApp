// import {API_KEY} from '@env';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.1.9:5000/',
  headers: {
    'Content-Type': 'application/json',
  },
});
