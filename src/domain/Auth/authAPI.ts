import axios from 'axios';

import {Auth} from './authTypes';

async function authenticate(email: string, password: string): Promise<Auth> {
  const auth = await axios.post('http://192.168.1.7:3000/auth', {
    email,
    password,
  });

  return auth.data;
}

export const authAPI = {
  authenticate,
};
