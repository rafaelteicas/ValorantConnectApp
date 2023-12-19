import {Page, api} from '@api';

import {CreatePost, PostAPI} from './postTypes';

type PostParams = {
  page: number;
  perPage: number;
};

async function getPosts(params: PostParams): Promise<Page<PostAPI>> {
  const response = await api.get('/user/post', {
    params,
  });

  return response.data;
}

async function create(post: CreatePost) {
  await api.post('/user/post', post);
}

export const postApi = {
  getPosts,
  create,
};
