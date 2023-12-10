import axios from 'axios';

export const valorantApi = axios.create({
  baseURL: 'https://valorant-api.com/v1/',
  params: {
    language: 'pt-BR',
  },
});
