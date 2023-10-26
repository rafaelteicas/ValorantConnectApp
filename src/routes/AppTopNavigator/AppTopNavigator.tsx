import React from 'react';

import {
  MaterialTopTabBarProps,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';

import {AgentsScreen} from '@screens';

import {AppTopNavigatorComponent} from './components/AppTopNavigatorComponent';

const Tab = createMaterialTopTabNavigator();

export function AppTopNavigator() {
  function renderTabBar(props: MaterialTopTabBarProps) {
    return <AppTopNavigatorComponent {...props} />;
  }

  return (
    <Tab.Navigator tabBar={renderTabBar}>
      <Tab.Screen name="Home" component={AgentsScreen} />
      <Tab.Screen name="Home2" component={AgentsScreen} />
      <Tab.Screen name="Home3" component={AgentsScreen} />
    </Tab.Navigator>
  );
}
