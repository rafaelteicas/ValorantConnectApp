import {useAuth} from '@service';
import {useMutation} from 'react-query';

import {authService} from '../authService';
import {Auth} from '../authTypes';

export function useAuthSignIn() {
  const {saveAuth} = useAuth();
  const mutation = useMutation<Auth, Error, {email: string; password: string}>({
    mutationFn: ({email, password}) => authService.signIn(email, password),
    retry: false,
    onSuccess: auth => {
      authService.updateToken(auth.body.token);
      saveAuth(auth);
    },
  });

  return {
    signIn: (email: string, password: string) =>
      mutation.mutate({email, password}),
  };
}
