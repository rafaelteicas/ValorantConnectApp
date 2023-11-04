import {QueryKeys} from '@infra';
import {useQuery} from 'react-query';

import {charactersService} from '../charactersService';

export function useGetCharacters(search?: string) {
  const item = useQuery({
    queryKey: [QueryKeys.GetAgents, search],
    queryFn: () => {
      const data = charactersService.getCharacters();
      if (search) {
        const searchResult = data.then(agents =>
          agents.filter(agent =>
            agent.name.toLowerCase().includes(search.toLowerCase()),
          ),
        );

        return searchResult;
      } else {
        return data;
      }
    },
    retry: false,
    staleTime: 1000 * 1000,
  });

  return {
    agents: item.data,
    isLoading: item.isLoading,
  };
}
