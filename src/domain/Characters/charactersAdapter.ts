import {CharactersType, CharactersTypeAPI} from './charactersType';

function toCharacter(data: CharactersTypeAPI): CharactersType {
  let image = data.fullPortrait ? data.fullPortrait : data.displayIcon;

  return {
    id: data.uuid,
    description: data.description,
    name: data.displayName,
    image: image,
    background: data.background,
    smallIcon: data.displayIconSmall,
  };
}

export const charactersAdapter = {
  toCharacter,
};
