import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {storage} from '../storage/storage';

import {AuthServiceTypes} from './authServiceTypes';

export function useAuth(): AuthServiceTypes {
  return useAuthZustand();
}

const useAuthZustand = create<AuthServiceTypes>()(
  persist(
    set => ({
      auth: null,
      saveAuth: async data => set({auth: data}),
      removeAuth: async () => set({auth: null}),
    }),
    {
      name: 'test',
      storage: storage,
    },
  ),
);
