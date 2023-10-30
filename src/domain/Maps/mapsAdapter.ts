import {MapsTypes, MapsTypesAPI} from './mapsType';

function toMaps(maps: MapsTypesAPI): MapsTypes {
  return {
    uuid: maps.uuid,
    displayName: maps.displayName,
    narrativeDescription: maps.narrativeDescription,
    splash: maps.splash,
    tacticalDescription: maps.tacticalDescription,
    callouts: maps.callouts,
  };
}

export const mapsAdapter = {
  toMaps,
};
