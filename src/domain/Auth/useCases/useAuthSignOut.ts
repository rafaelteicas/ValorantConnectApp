import {useAuthContext} from '@service';
import {useQuery} from 'react-query';

import {authService} from '../authService';

export function useAuthSignOut() {
  const {removeAuth} = useAuthContext();
  const query = useQuery({
    queryFn: () => authService.removeToken(),
    onSuccess: () => {
      removeAuth();
    },
  });

  return {
    signOut: () => query,
  };
}
