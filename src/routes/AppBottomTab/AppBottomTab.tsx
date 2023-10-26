import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {HomeScreen} from '@screens';

import {AppBottomTabComponent} from './components/AppBottomTabComponent';

export type tabBarProps = {
  HomeScreen: undefined;
  Outro: undefined;
};

const Tab = createBottomTabNavigator<tabBarProps>();

export function AppBottomTab() {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppBottomTabComponent {...props} />;
  }
  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Outro" component={HomeScreen} />
    </Tab.Navigator>
  );
}
