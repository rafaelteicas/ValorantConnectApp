import {valorantAPIConfig} from '@api';

import {WeaponsTypesAPI} from './weaponsTypes';

async function getWeapons(): Promise<WeaponsTypesAPI[]> {
  const response = await valorantAPIConfig.get('/weapons');

  return response.data.data;
}

export const weaponsAPI = {
  getWeapons,
};
