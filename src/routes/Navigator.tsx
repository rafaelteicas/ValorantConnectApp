import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AppStackNavigator, AuthStackNavigator} from '@routes';

export function Navigator() {
  const authenticated = true;

  return (
    <NavigationContainer>
      {authenticated ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
