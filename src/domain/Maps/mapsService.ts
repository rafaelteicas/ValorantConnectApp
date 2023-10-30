import {mapsAdapter} from './mapsAdapter';
import {mapsAPI} from './mapsAPI';
import {MapsTypes} from './mapsType';

async function getMaps(): Promise<MapsTypes[]> {
  const response = await mapsAPI.getMaps();

  return response.map(mapsAdapter.toMaps);
}

export const mapsService = {
  getMaps,
};
