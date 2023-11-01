import {useEffect} from 'react';

import {QueryKeys} from '@infra';
import {useQuery} from 'react-query';

import {formatStreamThumb} from '../helpers/formatStreamThumb';
import {streamService} from '../streamService';

export function useGetStreams() {
  const item = useQuery({
    queryKey: [QueryKeys.GetStreams],
    queryFn: () => streamService.getStreams(),
    retry: false,
  });

  useEffect(() => {
    formatStreamThumb(item.data);
  }, [item.data]);

  return {
    item,
    isLoading: item.isLoading,
    isError: item.isError,
  };
}
