import {useQuery} from 'react-query';

import {mapsService} from '../mapsService';

export function useGetMaps() {
  const {data} = useQuery({
    queryKey: 'key 3',
    queryFn: () => mapsService.getMaps(),
  });
  return {
    maps: data,
  };
}
