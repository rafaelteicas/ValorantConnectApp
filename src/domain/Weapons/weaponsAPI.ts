import {valorantApi} from '@service';

import {SkinTypesAPI, WeaponsByUuidAPI, WeaponsTypesAPI} from './weaponsTypes';

async function getWeapons(): Promise<WeaponsTypesAPI[]> {
  const response = await valorantApi.get('/weapons');

  return response.data.data;
}

async function getWeaponsByUuid(uuid: string): Promise<SkinTypesAPI[]> {
  const response = await valorantApi.get(`/weapons/${uuid}`);

  return response.data.data.skins;
}

export const weaponsAPI = {
  getWeapons,
  getWeaponsByUuid,
};
