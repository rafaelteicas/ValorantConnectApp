import {apiConfig} from '@api';

import {Auth, SignUp} from './authTypes';

async function authenticate(email: string, password: string): Promise<Auth> {
  const auth = await apiConfig.post('/auth', {
    email,
    password,
  });

  return auth.data;
}

async function signUp(account: SignUp): Promise<Auth> {
  const response = await apiConfig.post('/signup', account);
  return response.data;
}

async function refreshToken(token: string) {
  const response = await apiConfig.post('/refresh-token', {
    token,
  });

  return response.data;
}

export const authAPI = {
  authenticate,
  signUp,
  refreshToken,
};
