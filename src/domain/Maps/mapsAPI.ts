import {valorantAPIConfig} from '@api';

import {MapsTypesAPI} from './mapsType';

async function getMaps(): Promise<MapsTypesAPI[]> {
  const response = await valorantAPIConfig.get('maps', {
    params: {
      language: 'pt-BR',
    },
  });

  return response.data.data;
}

export const mapsAPI = {
  getMaps,
};
