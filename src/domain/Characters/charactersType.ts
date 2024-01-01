interface abilitiesAPI {
  slot: string; // 'Ability1',
  displayName: string; // 'Wingman',
  description: string; // 'EQUIPE Wingman. DISPARE para enviá-lo para encontrar inimigos. Wingman lança uma forte explosão na direção do primeiro inimigo que vê. Use o DISPARO ALTERNATIVO na direção de um ponto ou Spike plantada para que Wingman plante ou desarme a Spike. Para plantar, Gekko deve estar com a Spike no inventário. Quando Wingman expira, ele se transforma em um glóbulo inativo. INTERAJA para recuperar o glóbulo e ganhar outra carga de Wingman após um curto período.',
  displayIcon: string; // 'https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ability1/displayicon.png',
}

export interface CharactersTypeAPI {
  uuid: string; // 'e370fa57-4757-3604-3648-499e1f642d3f';
  displayName: string; //'Gekko';
  description: string; //'Gekko, de Los Angeles, lidera um grupo muito unido de criaturas caóticas. Seus amigos atropelam tudo, tirando os inimigos do caminho. Depois, Gekko corre atrás deles para reagrupá-los e reiniciar o processo.';
  displayIcon: string; // 'https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayicon.png';
  displayIconSmall: string; // 'https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayiconsmall.png';
  bustPortrait: string; //'https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png';
  fullPortrait: string; //'https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png';
  fullPortraitV2: string; //'https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png';
  killfeedPortrait: string; // 'https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/killfeedportrait.png';
  background: string; //'https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/background.png';
  backgroundGradientColors: string[];
  role: {
    uuid: string; // '1b47567f-8f7b-444b-aae3-b0c634622d10';
    displayName: string; //  'Iniciador';
    description: string; //  'Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.';
    displayIcon: string; //  'https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png';
    assetPath: string; // 'ShooterGame/Content/Characters/_Core/Roles/Breaker_PrimaryDataAsset';
  };
  abilities: abilitiesAPI[];
}

export interface CharactersType {
  id: string;
  name: string;
  description: string;
  image: string;
  background: string;
  smallIcon: string;
  backgroundGradientColors: string[];
  role: {
    name: string;
    description: string;
    icon: string;
  };
  abilities: [
    {
      displayName: string;
      description: string;
      displayIcon: string;
    },
  ];
}
