import {valorantAPIConfig} from '@api';

import {SkinTypesAPI, WeaponsTypesAPI} from './weaponsTypes';

async function getWeapons(): Promise<WeaponsTypesAPI[]> {
  const response = await valorantAPIConfig.get('/weapons');

  return response.data.data;
}

async function getWeaponsByUuid(uuid: string): Promise<SkinTypesAPI[]> {
  const response = await valorantAPIConfig.get(`/weapons/${uuid}`);

  return response.data.data.skins;
}

export const weaponsAPI = {
  getWeapons,
  getWeaponsByUuid,
};
