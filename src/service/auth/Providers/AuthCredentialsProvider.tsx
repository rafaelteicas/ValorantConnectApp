import React, {useEffect, useState} from 'react';

import {createContext} from 'react';

import {apiConfig} from '@api';
import {Auth, authService} from '@domain';

import {MMKVStorage} from '@service';

import {AuthServiceTypes} from '../authServiceTypes';

export const AuthContext = createContext<AuthServiceTypes>({
  auth: null,
  saveAuth: async () => {},
  removeAuth: async () => {},
  isLoading: true,
});

const KEY = 'AUTHKEY';

export function AuthCredentialsProvider({children}: React.PropsWithChildren) {
  const [auth, setAuth] = useState<Auth | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    saveCredentials();
  }, []);

  useEffect(() => {
    apiConfig.interceptors.response.use(
      response => response,
      async reject => {
        if (reject.response.status === 400) {
          const failedRequest = reject.config;
          if (auth?.refreshToken === undefined) {
            removeAuth();
            return;
          }
          const newAuth = await authService.refreshToken(auth?.refreshToken);
          console.log(newAuth);
          saveAuth(newAuth);
          failedRequest.headers.Authorization = `Bearer ${newAuth.token}`;
          return apiConfig(failedRequest);
        }
      },
    );
  }, [auth?.refreshToken]);

  async function saveCredentials() {
    try {
      const data: Auth = await MMKVStorage.getItem(KEY);
      if (data) {
        authService.updateToken(data.token);
        setAuth(data);
      }
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  }

  async function saveAuth(accountData: Auth) {
    authService.updateToken(accountData.token);
    MMKVStorage.setItem(KEY, accountData);
    setAuth(accountData);
  }

  async function removeAuth() {
    MMKVStorage.removeItem(KEY);
    setAuth(null);
  }

  return (
    <AuthContext.Provider value={{auth, isLoading, removeAuth, saveAuth}}>
      {children}
    </AuthContext.Provider>
  );
}
