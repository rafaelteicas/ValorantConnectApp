import {charactersAdapter} from './charactersAdapter';
import {charactersAPI} from './charactersAPI';
import {CharactersType} from './charactersType';

async function getCharacters(): Promise<CharactersType[]> {
  const response = await charactersAPI.getCharacters();

  return response.map(charactersAdapter.toCharacter);
}

export const charactersService = {
  getCharacters,
};
