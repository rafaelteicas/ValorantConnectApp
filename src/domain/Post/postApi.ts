import {Page, api} from '@api';

import {CreatePost, PostAPI} from './postTypes';

type PostParams = {
  page: number;
  perPage: number;
};

export const POST_PATH = 'user/post';

async function getPosts(params: PostParams): Promise<Page<PostAPI>> {
  const response = await api.get(POST_PATH, {
    params,
  });

  return response.data;
}

async function create(post: CreatePost) {
  await api.post(POST_PATH, post);
}

export const postApi = {
  getPosts,
  create,
};
