import {Post, PostAPI} from './postTypes';

export function toPost(postAPI: PostAPI): Post {
  return {
    id: postAPI.id,
    message: postAPI.message,
    elo: postAPI.elo,
    main: postAPI.main,
    userId: postAPI.user || 0,
    other: postAPI.other,
  };
}

export const postAdapter = {
  toPost,
};
