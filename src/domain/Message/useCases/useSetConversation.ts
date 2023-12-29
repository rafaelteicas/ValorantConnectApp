import {useMutation} from 'react-query';

import {messageService} from '../messageService';

interface Props {
  path: {
    postId: string;
    userId: string;
    authorId: string;
  };
}

export function useSetConversation() {
  const mutation = useMutation<void, Error, {path: Props}>({
    mutationFn: ({path}) => messageService.setConversation(path.path),
  });

  return {
    send: (path: Props) => mutation.mutate({path: path}),
  };
}
