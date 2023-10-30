import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {FindTeamScreen} from '@screens';

import {AppTopNavigator} from '../AppTopNavigator/AppTopNavigator';

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
      <Tab.Screen name="HomeScreen" component={AppTopNavigator} />
      <Tab.Screen name="Outro" component={FindTeamScreen} />
    </Tab.Navigator>
  );
}
