import {useMutation} from 'react-query';

import {profileImageService} from '../profileImageService';
import {ProfileImageServiceType} from '../profileImageTypes';

export function useUploadProfileImage({onSuccess}: {onSuccess?: () => void}) {
  const mutation = useMutation<void, Error, ProfileImageServiceType>({
    mutationFn: data =>
      profileImageService.uploadProfileImage(data.id, data.response),
    onSuccess: () => {
      if (onSuccess) {
        onSuccess();
      }
    },
  });

  return {
    upload: (data: ProfileImageServiceType) => mutation.mutate(data),
    isLoading: mutation.isLoading,
  };
}
