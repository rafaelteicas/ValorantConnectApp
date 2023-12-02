import {QueryKeys} from '@infra';
import {useQuery} from 'react-query';

import {weaponsService} from '../weaponsService';

export function useGetWeaponsByUuid(uuid: string) {
  const {data} = useQuery({
    queryKey: [QueryKeys.UseGetWeaponsByUuid, uuid],
    queryFn: () => weaponsService.getWeaponsByUuid(uuid),
    retry: false,
  });

  return {
    skins: data,
  };
}
