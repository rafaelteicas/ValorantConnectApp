import {api} from '@api';

import {Auth, SignUp} from './authTypes';

export const SIGN_UP_PATH = '/signup';

async function authenticate(email: string, password: string): Promise<Auth> {
  const auth = await api.post('/auth', {
    email,
    password,
  });

  return auth.data;
}

async function signUp(account: SignUp): Promise<Auth> {
  const response = await api.post(SIGN_UP_PATH, account);

  return response.data;
}

async function refreshToken(token: string) {
  const response = await api.post('/refresh-token', {
    token,
  });

  return response.data;
}

export const authAPI = {
  authenticate,
  signUp,
  refreshToken,
};
