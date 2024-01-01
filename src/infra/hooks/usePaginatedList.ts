import {useEffect, useState} from 'react';

import {Page} from '@api';

export function usePaginatedList<Data>(
  getList: (page: number) => Promise<Page<Data>>,
) {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean | null>(null);
  const [page, setPage] = useState(1);
  const [nextPage, setHasNextPage] = useState(true);

  async function fetchData() {
    try {
      setLoading(true);
      const {post, meta} = await getList(page);
      setData(post);
      if (meta.nextPage) {
        setPage(2);
        setHasNextPage(true);
      } else {
        setHasNextPage(false);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  async function fetchNextPage() {
    if (loading || !nextPage) {
      return;
    }
    try {
      const {post} = await getList(page);
      setData(prev => [...prev, ...post]);
      setPage(prev => prev + 1);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    loading,
    error,
    fetchData,
    fetchNextPage,
  };
}
