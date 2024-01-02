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
    abilities: [
      {
        description: string;
        displayIcon: string;
        displayName: string;
      },
    ];
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
    confirmPassword?: string;
  };
  ConversationScreen: {
    postId: number;
    authorId: number;
  };
  ConversationScreenFromPath: {
    path: string;
  };
};
