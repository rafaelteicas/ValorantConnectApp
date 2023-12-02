import {
  SkinTypes,
  SkinTypesAPI,
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

function toSkinsByUuid(data: SkinTypesAPI): SkinTypes {
  return {
    uuid: data.uuid,
    image: data.displayIcon,
    name: data.displayName,
  };
}

export const weaponsAdapter = {
  toWeapons,
  toSkinsByUuid,
};
