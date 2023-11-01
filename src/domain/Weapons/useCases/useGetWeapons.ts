import {QueryKeys} from '@infra';
import {useQuery} from 'react-query';

import {weaponsService} from '../weaponsService';

export function useGetWeapons() {
  const {data} = useQuery({
    queryKey: [QueryKeys.GetWeapons],
    queryFn: () => weaponsService.getWeapons(),
    retry: false,
  });

  return {
    weapons: data,
  };
}
