import {WeaponsTypes, WeaponsTypesAPI} from './weaponsTypes';

export function toWeapons(data: WeaponsTypesAPI): WeaponsTypes {
  return {
    name: data.displayName,
    image: data.displayIcon,
    uuid: data.uuid,
  };
}

export const weaponsAdapter = {
  toWeapons,
};
