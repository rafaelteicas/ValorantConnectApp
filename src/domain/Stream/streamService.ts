import {streamAdapter} from './streamAdapter';
import {streamAPI} from './streamAPI';
import {StreamType} from './streamTypes';

async function getStreams(): Promise<StreamType[]> {
  const getStreamsAPI = await streamAPI.getStreams();

  return getStreamsAPI.map(streamAdapter.toStream);
}

export const streamService = {
  getStreams,
};
