import React, {useEffect, useState} from 'react';

import {createContext} from 'react';

import {Auth, authService} from '@domain';

import {MMKVStorage} from '@service';

import {AuthServiceTypes} from '../authServiceTypes';

export const AuthContext = createContext<AuthServiceTypes>({
  auth: null,
  saveAuth: async () => {},
  removeAuth: async () => {},
});

const KEY = 'AUTH_KEY';

export function AuthCredentialsProvider({children}: React.PropsWithChildren) {
  const [auth, setAuth] = useState<Auth | null>(null);

  useEffect(() => {
    startAuthCredentials();
    function startAuthCredentials() {
      const ac = MMKVStorage.getItem(KEY);
      saveAuth(ac);
    }
  }, []);

  async function saveAuth(accountData: any) {
    MMKVStorage.setItem(KEY, accountData);
    authService.updateToken(accountData.token.accessToken);
    setAuth(accountData);
  }

  async function removeAuth() {
    MMKVStorage.removeItem(KEY);
    setAuth(null);
  }

  return (
    <AuthContext.Provider value={{auth, removeAuth, saveAuth}}>
      {children}
    </AuthContext.Provider>
  );
}
