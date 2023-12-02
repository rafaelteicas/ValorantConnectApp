import {useAuthContext} from '@service';
import {useMutation} from 'react-query';

import {authService} from '../authService';
import {Auth, SignUp} from '../authTypes';

export function useAuthSignUp() {
  const {saveAuth} = useAuthContext();
  const mutation = useMutation<Auth, Error, SignUp>({
    mutationFn: data => authService.signUp(data),
    retry: false,
    onSuccess: data => {
      saveAuth(data);
    },
  });

  function signUp(data: SignUp) {
    mutation.mutate(data);
  }

  return {signUp};
}
