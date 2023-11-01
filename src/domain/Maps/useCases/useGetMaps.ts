import {QueryKeys} from '@infra';
import {useQuery} from 'react-query';

import {mapsService} from '../mapsService';

export function useGetMaps() {
  const {data} = useQuery({
    queryKey: [QueryKeys.GetMaps],
    queryFn: () => mapsService.getMaps(),
  });
  return {
    maps: data,
  };
}
