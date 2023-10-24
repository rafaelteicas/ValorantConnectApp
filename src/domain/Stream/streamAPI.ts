import {apiTwitch} from '@api';

import {StreamTypeAPI} from './streamTypes';

async function getStreams(): Promise<StreamTypeAPI[]> {
  const response = await apiTwitch.get('streams?game_id=516575&language=pt');

  //TODO: implements next page query console.log(response.data.pagination);

  return response.data.data;
}

export const streamAPI = {
  getStreams,
};
