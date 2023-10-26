import React from 'react';

import {TouchableOpacity} from 'react-native';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {Box, Icon, Text} from '@components';

import {tabBarProps} from '../AppBottomTab';
import {getTabBarItem} from '../getTabBarItem';

export function AppBottomTabComponent({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <Box backgroundColor="backgroundColor" flexDirection="row">
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const tabItem = getTabBarItem[route.name as keyof tabBarProps];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{flex: 1, alignItems: 'center'}}>
            <Icon
              name={tabItem.icon}
              size={24}
              color={isFocused ? 'primary' : 'backgroundContrast'}
            />
            <Text
              color={isFocused ? 'primary' : 'backgroundContrast'}
              preset="paragraphMedium">
              {tabItem.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </Box>
  );
}
