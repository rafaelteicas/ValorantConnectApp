import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {InitialAppScreen, LoginScreen, SignUpScreen} from '@screens';

import {AuthStackParamList} from './AuthStackParams';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}
      initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="InitialAppScreen" component={InitialAppScreen} />
    </Stack.Navigator>
  );
}
