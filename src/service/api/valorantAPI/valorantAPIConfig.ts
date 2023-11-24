import axios from 'axios';

export const valorantAPIConfig = axios.create({
  baseURL: 'https://valorant-api.com/v1/',
  params: {
    language: 'pt-BR',
  },
});
