import React from 'react';

import {Platform, TouchableOpacity} from 'react-native';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {Box, Icon, Text} from '@components';

import {TabBottomParamList} from '../AppBottomTab';
import {getTabBarItem} from '../getTabBarItem';

export function AppBottomTabComponent({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <Box
      position="absolute"
      bottom={20}
      right={20}
      left={20}
      backgroundColor="darkBox"
      borderRadius="b12"
      flexDirection="row">
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const tabItem = getTabBarItem[route.name as keyof TabBottomParamList];

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
          <Box
            flex={1}
            padding="s16"
            key={route.key}
            style={{paddingBottom: Platform.OS === 'android' ? 0 : null}}>
            <TouchableOpacity
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
                preset="paragraphMedium"
              />
            </TouchableOpacity>
          </Box>
        );
      })}
    </Box>
  );
}
