export type AppStackParamList = {
  TabNavigator: undefined;
  AgentScreen: {
    name: string;
    image: string;
    description: string;
    role: {
      name: string;
      description: string;
      icon: string;
    };
    abilities: {};
  };
  PostScreen: undefined;
  ChooseMain: undefined;
  WeaponScreen: {
    uuid: string;
  };
  InitialAppScreen: undefined;
  UploadScreen: undefined;
  InfoScreen: undefined;
  EditScreen: {
    field: string;
    placeholder: string;
  };
};
