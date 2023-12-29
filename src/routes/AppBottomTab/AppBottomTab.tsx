import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {FindTeamScreen, MessageScreen, ProfileScreen} from '@screens';

import {AppTopNavigator} from '../AppTopNavigator/AppTopNavigator';

import {AppBottomTabParamList} from './AppBottomTabParamList';
import {AppBottomTabComponent} from './components/AppBottomTabComponent';

const Tab = createBottomTabNavigator<AppBottomTabParamList>();

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
      <Tab.Screen name="FindTeamScreen" component={FindTeamScreen} />
      <Tab.Screen name="MessageScreen" component={MessageScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
