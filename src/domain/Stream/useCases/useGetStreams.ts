import {useEffect} from 'react';

import {useQuery} from 'react-query';

import {formatStreamThumb} from '../helpers/formatStreamThumb';
import {streamService} from '../streamService';

export function useGetStreams() {
  const item = useQuery({
    queryFn: () => streamService.getStreams(),
    retry: false,
  });

  useEffect(() => {
    formatStreamThumb(item.data);
  }, [item.data]);

  return {
    item,
  };
}