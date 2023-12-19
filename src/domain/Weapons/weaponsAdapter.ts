import {
  SkinTypes,
  SkinTypesAPI,
  WeaponsByUuidAPI,
  WeaponsTypes,
  WeaponsTypesAPI,
} from './weaponsTypes';

export function toWeapons(data: WeaponsTypesAPI): WeaponsTypes {
  return {
    name: data.displayName,
    image: data.displayIcon,
    uuid: data.uuid,
  };
}

interface SkinData {
  data: SkinTypesAPI;
  shopData?: WeaponsByUuidAPI;
}

function toSkinsByUuid({data, shopData}: SkinData): SkinTypes {
  return {
    uuid: data.uuid,
    image: data.displayIcon,
    name: data.displayName,
    cost: shopData?.shopData.cost,
  };
}

export const weaponsAdapter = {
  toWeapons,
  toSkinsByUuid,
};
