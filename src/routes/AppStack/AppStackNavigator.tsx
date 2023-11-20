import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AgentScreen, PostScreen, ChooseMain} from '@screens';

import {AppBottomTab} from '../AppBottomTab/AppBottomTab';

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
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="TabNavigator">
      <Stack.Screen name="TabNavigator" component={AppBottomTab} />
      <Stack.Screen name="AgentScreen" component={AgentScreen} />
      <Stack.Screen name="PostScreen" component={PostScreen} />
      <Stack.Screen name="ChooseMain" component={ChooseMain} />
    </Stack.Navigator>
  );
}
