import {valorantApi} from '@service';

import {ElosAPI, TierAPI} from './elosTypes';

async function getElos(): Promise<TierAPI[]> {
  const apiResponse: ElosAPI = (await valorantApi.get('competitivetiers')).data;
  return apiResponse.data[4].tiers;
}

export const elosAPI = {
  getElos,
};
