import {QueryKeys} from '@infra';
import {useQuery} from 'react-query';

import {messageService} from '../messageService';
/**
 * @deprecated using firebase implementation
 */
export function useGetConversation(path: string) {
  const query = useQuery({
    queryKey: [QueryKeys.GetMessages, path],
    queryFn: () => messageService.getConversation(path),
    refetchInterval: 5000,
  });

  return {
    data: query.data,
    refetch: query.refetch,
  };
}
