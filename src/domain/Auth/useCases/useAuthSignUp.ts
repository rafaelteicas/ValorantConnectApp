import {useMutation} from 'react-query';

import {authService} from '../authService';
import {SignUp} from '../authTypes';

export function useAuthSignUp() {
  const mutation = useMutation<void, Error, SignUp>({
    mutationFn: data => authService.signUp(data),
    retry: false,
  });

  function signUp(data: SignUp) {
    mutation.mutate(data);
  }

  return {signUp};
}
