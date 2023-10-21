import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AuthStackNavigator} from './AuthStack/AuthStackNavigator';

export function Navigator() {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
}
