import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://valorant-app-6fc534e0a9a2.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});
