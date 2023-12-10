import {Page, apiConfig} from '@api';

import {CreatePost, PostAPI} from './postTypes';

type PostParams = {
  page: number;
  perPage: number;
};

async function getPosts(params: PostParams): Promise<Page<PostAPI>> {
  const response = await apiConfig.get('/user/post', {
    params,
  });

  return response.data;
}

async function create(post: CreatePost) {
  await apiConfig.post('/user/post', post);
}

export const postApi = {
  getPosts,
  create,
};
