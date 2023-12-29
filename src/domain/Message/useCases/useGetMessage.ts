import {QueryKeys} from '@infra';
import {useQuery} from 'react-query';

import {messageService} from '../messageService';
import {MessagePathAPI, MessageResponse} from '../messageTypes';

/**
 * @deprecated using firebase implementation
 */
export function useGetMessages(path: MessagePathAPI) {
  const query = useQuery({
    queryKey: [QueryKeys.GetMessages, path],
    queryFn: () => messageService.getMessage(path),
    refetchInterval: 5000,
  });

  return {
    data: query.data as MessageResponse[],
    isLoading: query.isLoading,
  };
}
