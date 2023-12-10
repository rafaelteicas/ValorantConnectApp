import {elosAdapter} from './elosAdapter';
import {elosAPI} from './elosAPI';
import {Elos} from './elosTypes';

async function getElos(): Promise<Elos[]> {
  const response = await elosAPI.getElos();
  return response.map(elosAdapter.toElos);
}

export const elosService = {
  getElos,
};
