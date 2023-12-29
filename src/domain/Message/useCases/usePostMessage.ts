import {useMutation} from 'react-query';

import {messageService} from '../messageService';
import {Message} from '../messageTypes';

interface Props {
  onSuccess: () => void;
}

/**
 * @deprecated using firebase implementation
 */
export function useSendMessage({onSuccess}: Props) {
  const mutation = useMutation<void, Error, Message>({
    mutationFn: data => messageService.sendMessage(data),
    onSuccess,
  });
  return {
    send: (data: Message) => mutation.mutate(data),
  };
}
