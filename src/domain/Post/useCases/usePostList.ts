import {useEffect, useState} from 'react';

import {postService} from '../postService';
import {Post} from '../postTypes';

export function usePostList() {
  const [data, setData] = useState<Post[]>([]);
  const [page, setPage] = useState(1);

  async function fetchData() {
    try {
      const {post, meta} = await postService.getPosts(page);
      setData(post);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    fetchData,
  };
}
