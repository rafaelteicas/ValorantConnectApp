import {useAuthContext} from '@service';
import {useMutation} from 'react-query';

import {authService} from '../authService';
import {Auth, SignIn} from '../authTypes';

export function useAuthSignIn() {
  const {saveAuth} = useAuthContext();
  const mutation = useMutation<Auth, Error, SignIn>({
    mutationFn: data => authService.signIn(data),
    retry: false,
    onSuccess: auth => {
      saveAuth(auth);
    },
  });

  return {
    signIn: ({email, password}: {email: string; password: string}) =>
      mutation.mutate({email, password}),
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
  };
}
