import {QueryKeys} from '@infra';
import {useQuery} from 'react-query';

import {profileImageService} from '../profileImageService';

export function useGetProfileImage(id: number) {
  const {data, isLoading, refetch} = useQuery({
    queryKey: [QueryKeys.GetProfileImage, id],
    retry: false,
    queryFn: () => profileImageService.getProfileImage(id),
  });

  return {
    data,
    isLoading,
    refetch,
  };
}
