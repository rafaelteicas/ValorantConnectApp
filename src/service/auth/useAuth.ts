import {useContext} from 'react';

import {AuthServiceTypes} from './authServiceTypes';
import {AuthContext} from './Providers/AuthCredentialsProvider';

export function useAuthContext(): AuthServiceTypes {
  const context = useContext(AuthContext);
  return context;
}
