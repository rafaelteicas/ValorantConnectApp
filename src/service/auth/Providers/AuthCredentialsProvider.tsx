import React, {useEffect, useState} from 'react';

import {createContext} from 'react';

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

  async function saveCredentials() {
    const data: Auth = await MMKVStorage.getItem(KEY);
    if (data) {
      authService.updateToken(data.body.token);
      setAuth(data);
    }
    setIsLoading(false);
  }

  async function saveAuth(accountData: Auth) {
    authService.updateToken(accountData.body.token);
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
