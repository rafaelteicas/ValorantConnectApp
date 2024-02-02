import {useMutation} from 'react-query';

import {postService} from '../postService';
import {CreatePost} from '../postTypes';

interface Props {
  onSuccess: () => void;
}

export function useCreatePost({onSuccess}: Props) {
  const mutation = useMutation<void, Error, CreatePost>({
    mutationFn: post => postService.create(post),
    retry: false,
    onSuccess: () => {
      onSuccess();
    },
  });

  return {
    createPost: (data: CreatePost, onSuccess?: () => void) =>
      mutation.mutate(data, {
        onSuccess: onSuccess,
      }),
  };
}
