import {valorantApi} from '@service';

import {MapsTypesAPI} from './mapsTypes';

async function getMaps(): Promise<MapsTypesAPI[]> {
  const response = await valorantApi.get('maps', {
    params: {
      language: 'pt-BR',
    },
  });

  return response.data.data;
}

export const mapsAPI = {
  getMaps,
};
