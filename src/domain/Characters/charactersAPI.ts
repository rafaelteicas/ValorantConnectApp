import {valorantApi} from '@service';

import {CharactersTypeAPI} from './charactersType';

async function getCharacters(): Promise<CharactersTypeAPI[]> {
  const response = await valorantApi.get('agents', {
    params: {isPlayableCharacter: true},
  });
  return response.data.data;
}

export const charactersAPI = {
  getCharacters,
};
