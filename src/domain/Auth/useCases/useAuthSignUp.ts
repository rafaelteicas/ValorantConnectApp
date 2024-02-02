import {useNavigation} from '@react-navigation/native';
import {useAuthContext} from '@service';
import {useMutation} from 'react-query';

import {authService} from '../authService';
import {Auth, SignUp} from '../authTypes';

export function useAuthSignUp() {
  const {saveAuth} = useAuthContext();
  const {navigate} = useNavigation();
  const mutation = useMutation<Auth, Error, SignUp>({
    mutationFn: data => authService.signUp(data),
    retry: false,
    onSuccess: auth => {
      saveAuth(auth);
      navigate('TabNavigator');
    },
  });

  return {
    signUp: (variables: SignUp) => mutation.mutate(variables),
    isLoading: mutation.isLoading,
  };
}
