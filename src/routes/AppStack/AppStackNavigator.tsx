import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AgentScreen} from '@screens';

import {AppBottomTab} from '../AppBottomTab/AppBottomTab';

type AppStackNavigatorProps = {
  TabNavigator: undefined;
  AgentScreen: {
    name: string;
  };
};

const Stack = createNativeStackNavigator<AppStackNavigatorProps>();

export function AppStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="TabNavigator">
      <Stack.Screen name="TabNavigator" component={AppBottomTab} />
      <Stack.Screen name="AgentScreen" component={AgentScreen} />
    </Stack.Navigator>
  );
}
