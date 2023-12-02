import {QueryKeys} from '@infra';
import {useQuery} from 'react-query';

import {userService} from '../userService';

export function useUserGetUser() {
  const {data} = useQuery({
    queryKey: [QueryKeys.UseUseGetUserById],
    retry: false,
    queryFn: () => userService.getUser(),
  });

  return {
    user: data,
  };
}
