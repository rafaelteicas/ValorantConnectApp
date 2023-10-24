import axios from 'axios';

export const apiTwitch = axios.create({
  baseURL: 'https://api.twitch.tv/helix/',
  headers: {
    'Client-ID': 'zwhikuaofj6083o9th0zw3rg5v2vwp',
    Authorization: 'Bearer ep7719ftovkyb5kw9c13rwuxgxjunr',
  },
});
