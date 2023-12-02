import {weaponsAdapter} from './weaponsAdapter';
import {weaponsAPI} from './weaponsAPI';
import {SkinTypes, WeaponsTypes} from './weaponsTypes';

async function getWeapons(): Promise<WeaponsTypes[]> {
  const weaponsApi = await weaponsAPI.getWeapons();

  return weaponsApi.map(weaponsAdapter.toWeapons);
}

async function getWeaponsByUuid(uuid: string): Promise<SkinTypes[] | any> {
  const result = await weaponsAPI.getWeaponsByUuid(uuid);

  return result.map(weaponsAdapter.toSkinsByUuid);
}

export const weaponsService = {
  getWeapons,
  getWeaponsByUuid,
};
