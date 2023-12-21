import React from 'react';

import {Pressable} from 'react-native';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {Box, Icon, Text} from '@components';

import {useAppSafeArea} from '@hooks';

import {TabBottomParamList} from '../AppBottomTab';
import {getTabBarItem} from '../getTabBarItem';

export function AppBottomTabComponent({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const {bottom} = useAppSafeArea();
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      backgroundColor="darkBox"
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

        const iconSize = tabItem.icon.includes('profile') ? 20 : 24;

        return (
          <Box
            padding="s16"
            flex={1}
            key={route.key}
            style={{paddingBottom: bottom}}>
            <Pressable
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={{flex: 1, alignItems: 'center', paddingBottom: bottom}}>
              <Icon
                name={tabItem.icon}
                size={iconSize}
                color={isFocused ? 'primary' : 'backgroundContrast'}
              />
              <Text
                color={isFocused ? 'primary' : 'backgroundContrast'}
                preset="paragraphMedium"
              />
            </Pressable>
          </Box>
        );
      })}
    </Box>
  );
}
