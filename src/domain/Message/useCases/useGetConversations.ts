import {QueryKeys} from '@infra';
import {useQuery} from 'react-query';

import {messageService} from '../messageService';

export function useGetConversations(userId: string) {
  const query = useQuery({
    queryKey: [QueryKeys.GetMessages, userId],
    queryFn: () => messageService.getConversations(userId),
  });

  return {
    paths: query.data,
    refetch: query.refetch,
  };
}
