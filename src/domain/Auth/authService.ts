import {api} from '@api';

import {authAPI} from './authAPI';
import {Auth, SignIn, SignUp} from './authTypes';

async function signIn({email, password}: SignIn): Promise<Auth> {
  const response = await authAPI.authenticate(email, password);

  return response;
}

async function signUp(signUpData: SignUp): Promise<Auth> {
  const response = await authAPI.signUp(signUpData);
  return response;
}

function updateToken(token: string): void {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}
function removeToken() {
  api.defaults.headers.common.Authorization = null;
}

async function refreshToken(token: string) {
  const response = await authAPI.refreshToken(token);
  return response;
}

export const authService = {
  signIn,
  signUp,
  updateToken,
  removeToken,
  refreshToken,
};
