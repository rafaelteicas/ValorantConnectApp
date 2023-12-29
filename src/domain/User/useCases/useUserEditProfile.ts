import {useMutation} from 'react-query';

import {userService} from '../userService';

export function useUserEditProfile() {
  const mutation = useMutation<void, Error, {field: string; value: string}>({
    mutationFn: variables =>
      userService.editUserInfo(variables.field, variables.value),
    onSuccess: () => {
      console.log('Deu bom');
    },
  });

  return {
    mutation: (field: string, value: string) => mutation.mutate({field, value}),
  };
}
