import {Page} from '@api';

import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {CreatePost, Post} from './postTypes';

async function getPosts(page: number): Promise<Page<Post>> {
  const response = await postApi.getPosts({page, perPage: 5});

  return {
    post: response.post.map(postAdapter.toPost),
    meta: response.meta,
  };
}

async function create(post: CreatePost) {
  await postApi.create(post);
}

export const postService = {
  getPosts,
  create,
};
