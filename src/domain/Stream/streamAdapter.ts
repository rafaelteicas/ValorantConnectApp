import {StreamType, StreamTypeAPI} from './streamTypes';

function toStream(streamTypeAPI: StreamTypeAPI): StreamType {
  return {
    id: streamTypeAPI.id,
    title: streamTypeAPI.title,
    userId: streamTypeAPI.user_id,
    userLogin: streamTypeAPI.user_login,
    viewerCounter: streamTypeAPI.viewer_count,
    thumbnailUrl: streamTypeAPI.thumbnail_url,
  };
}

export const streamAdapter = {
  toStream,
};
