import {Elos, TierAPI} from './elosTypes';

export function toElos(tierApi: TierAPI): Elos {
  return {
    name: tierApi.tierName,
    icon: tierApi.largeIcon,
  };
}

export const elosAdapter = {
  toElos,
};
