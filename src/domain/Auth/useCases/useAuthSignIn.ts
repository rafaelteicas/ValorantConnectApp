import {useAuthContext} from '@service';
import {useMutation} from 'react-query';

import {authService} from '../authService';
import {Auth} from '../authTypes';

export function useAuthSignIn() {
  const {saveAuth} = useAuthContext();
  const mutation = useMutation<Auth, Error, {email: string; password: string}>({
    mutationFn: ({email, password}) => authService.signIn(email, password),
    retry: false,
    onSuccess: auth => {
      saveAuth(auth);
    },
  });

  return {
    signIn: (email: string, password: string) =>
      mutation.mutate({email, password}),
  };
}
