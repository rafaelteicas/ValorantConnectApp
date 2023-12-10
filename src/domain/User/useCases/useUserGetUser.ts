import {QueryKeys} from '@infra';
import {useQuery} from 'react-query';

import {userService} from '../userService';

export function useUserGetUser() {
  const {data, isLoading} = useQuery({
    queryKey: [QueryKeys.UseUseGetUserById],
    queryFn: () => userService.getUser(),
  });

  return {
    user: data,
    isLoading,
  };
}
