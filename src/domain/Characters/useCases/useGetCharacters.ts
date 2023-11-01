import {QueryKeys} from '@infra';
import {useQuery} from 'react-query';

import {charactersService} from '../charactersService';

export function useGetCharacters() {
  const item = useQuery({
    queryKey: [QueryKeys.GetAgents],
    queryFn: () => charactersService.getCharacters(),
    retry: false,
    staleTime: 1000 * 1000,
  });

  return {
    agents: item.data,
    isLoading: item.isLoading,
  };
}
