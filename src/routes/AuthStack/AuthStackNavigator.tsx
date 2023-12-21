import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen, SignUpScreen} from '@screens';

import {AppStackNavigator} from '../AppStack/AppStackNavigator';

import {AuthStackParamList} from './AuthStackParams';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}
      initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="AppStackNavigator" component={AppStackNavigator} />
    </Stack.Navigator>
  );
}
