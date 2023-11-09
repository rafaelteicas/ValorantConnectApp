import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {FindTeamScreen} from '@screens';

import {AppTopNavigator} from '../AppTopNavigator/AppTopNavigator';

import {AppBottomTabComponent} from './components/AppBottomTabComponent';

export type TabBottomParamList = {
  HomeScreen: undefined;
  FindTeam: undefined;
};

const Tab = createBottomTabNavigator<TabBottomParamList>();

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
      <Tab.Screen name="FindTeam" component={FindTeamScreen} />
    </Tab.Navigator>
  );
}
