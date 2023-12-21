import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  AgentScreen,
  EditScreen,
  InfoScreen,
  PostScreen,
  UploadScreen,
  WeaponScreen,
} from '@screens';

import {AppBottomTab} from '../AppBottomTab/AppBottomTab';

import {AppStackParamList} from './AppStackParams';

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}
      initialRouteName="TabNavigator">
      <Stack.Screen name="TabNavigator" component={AppBottomTab} />
      <Stack.Screen name="AgentScreen" component={AgentScreen} />
      <Stack.Screen name="PostScreen" component={PostScreen} />
      <Stack.Screen name="WeaponScreen" component={WeaponScreen} />
      <Stack.Screen name="UploadScreen" component={UploadScreen} />
      <Stack.Screen name="InfoScreen" component={InfoScreen} />
      <Stack.Screen name="EditScreen" component={EditScreen} />
    </Stack.Navigator>
  );
}
