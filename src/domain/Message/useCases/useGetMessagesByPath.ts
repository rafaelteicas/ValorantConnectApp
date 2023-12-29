import {QueryKeys} from '@infra';
import {useQuery} from 'react-query';

import {messageService} from '../messageService';
import {MessageResponse} from '../messageTypes';

/**
 * @deprecated using firebase implementation
 */
export function useGetMessagesByPath(path: string) {
  const query = useQuery({
    queryKey: [QueryKeys.GetMessagesByPath, path],
    queryFn: () => messageService.getConversation(path),
  });
  return {
    data: query.data as MessageResponse[],
    isLoading: query.isLoading,
  };
}
