import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeProvider} from '@shopify/restyle';

import {SignInScreen} from '@screens';
import {theme} from '@theme';

const Stack = createNativeStackNavigator();

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={SignInScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
