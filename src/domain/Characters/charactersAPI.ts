import {valorantAPIConfig} from '@api';

import {CharactersTypeAPI} from './charactersType';

async function getCharacters(): Promise<CharactersTypeAPI[]> {
  const response = await valorantAPIConfig.get('agents');
  return response.data.data;
}

export const charactersAPI = {
  getCharacters,
};
