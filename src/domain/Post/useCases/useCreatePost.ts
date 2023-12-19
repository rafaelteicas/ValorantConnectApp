import {useMutation} from 'react-query';

import {postService} from '../postService';
import {CreatePost} from '../postTypes';

export function useCreatePost() {
  const mutation = useMutation<void, Error, CreatePost>({
    mutationFn: post => postService.create(post),
    retry: false,
  });

  return {
    createPost: (data: CreatePost, onSuccess?: () => void) =>
      mutation.mutate(data, {
        onSuccess: onSuccess,
      }),
  };
}
