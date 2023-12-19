import {useEffect, useState} from 'react';

import {postService} from '../postService';
import {Post} from '../postTypes';

export function usePostList() {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean | null>(null);

  const [page, setPage] = useState(1);
  const [nextPage, setHasNextPage] = useState(true);

  async function fetchData() {
    try {
      setLoading(true);
      const {post, meta} = await postService.getPosts(page);
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
      const {post} = await postService.getPosts(page);
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
