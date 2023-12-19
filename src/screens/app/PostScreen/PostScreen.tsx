import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ChooseAgentScreen} from './screens/ChooseAgentScreen';
import {ChooseElosScreen} from './screens/ChooseElosScreen';
import {ChooseSecondaryAgents} from './screens/ChooseSecondaryAgents';

export type PostScreenParamList = {
  ChooseAgentScreen: undefined;
  ChooseSecondaryAgents: {
    agent: string;
  };
  ChooseEloScreen: {
    agent: string;
    agents: string[];
  };
};

const PostStackNavigator = createNativeStackNavigator<PostScreenParamList>();

export function PostScreen() {
  return (
    <PostStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <PostStackNavigator.Screen
        name="ChooseAgentScreen"
        component={ChooseAgentScreen}
      />
      <PostStackNavigator.Screen
        name="ChooseSecondaryAgents"
        component={ChooseSecondaryAgents}
      />
      <PostStackNavigator.Screen
        name="ChooseEloScreen"
        component={ChooseElosScreen}
      />
    </PostStackNavigator.Navigator>
  );
}
