import {weaponsAdapter} from './weaponsAdapter';
import {weaponsAPI} from './weaponsAPI';
import {WeaponsTypes} from './weaponsTypes';

async function getWeapons(): Promise<WeaponsTypes[]> {
  const weaponsApi = await weaponsAPI.getWeapons();

  return weaponsApi.map(weaponsAdapter.toWeapons);
}

export const weaponsService = {
  getWeapons,
};
