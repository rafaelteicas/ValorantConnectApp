import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppBottomTab} from '../AppBottomTab/AppBottomTab';

type AppStackNavigatorProps = {
  TabNavigator: undefined;
};

const Stack = createNativeStackNavigator<AppStackNavigatorProps>();

export function AppStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="TabNavigator">
      <Stack.Screen name="TabNavigator" component={AppBottomTab} />
    </Stack.Navigator>
  );
}
