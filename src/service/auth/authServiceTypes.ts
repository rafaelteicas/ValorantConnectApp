import {Auth} from '@domain';

export type AuthServiceTypes = {
  auth: Auth | null;
  saveAuth: (credentials: Auth) => Promise<void>;
  removeAuth: () => Promise<void>;
};
