import {apiConfig} from '@api';

import {authAPI} from './authAPI';
import {Auth} from './authTypes';

async function signIn(email: string, password: string): Promise<Auth> {
  const response = await authAPI.authenticate(email, password);
  if (response.status === 400) {
    throw new Error();
  }
  return response;
}

function updateToken(token: string) {
  apiConfig.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function removeToken() {
  apiConfig.defaults.headers.common.Authorization = null;
}

export const authService = {
  signIn,
  updateToken,
  removeToken,
};
