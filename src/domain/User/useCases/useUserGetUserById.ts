import {QueryKeys} from '@infra';
import {useQuery} from 'react-query';

import {userService} from '../userService';

export function useUserGetUserById(id: string) {
  const {data} = useQuery({
    queryKey: [QueryKeys.UseUseGetUserById, id],
    queryFn: () => userService.getUserById(id),
  });

  return {
    user: data,
  };
}
