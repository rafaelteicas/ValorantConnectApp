import {useMutation} from 'react-query';

import {userService} from '../userService';

interface Props {
  onSuccess?: () => void;
}

export function useUserEditProfile({onSuccess}: Props) {
  const mutation = useMutation<
    void,
    Error,
    {field: string; value: string; confirmPassword?: string}
  >({
    mutationFn: variables =>
      userService.editUserInfo(
        variables.field,
        variables.value,
        variables.confirmPassword,
      ),
    onSuccess: onSuccess,
  });

  return {
    mutation: (field: string, value: string, confirmPassword?: string) =>
      mutation.mutate({field, value, confirmPassword}),
    isLoading: mutation.isLoading,
  };
}
