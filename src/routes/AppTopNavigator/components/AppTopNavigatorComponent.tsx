import React from 'react';

import {TouchableOpacity} from 'react-native';

import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';

import {AppHeader, Box, Text} from '@components';

export function AppTopNavigatorComponent({
  state,
  descriptors,
  navigation,
}: MaterialTopTabBarProps) {
  return (
    <Box backgroundColor="backgroundColor">
      <AppHeader />
      <Box
        paddingHorizontal="s32"
        backgroundColor="backgroundColor"
        flexDirection="row">
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

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
              key={route.key}
              alignItems="center"
              flex={1}
              justifyContent="center">
              <Box>
                <TouchableOpacity onPress={onPress}>
                  <Text preset="paragraphMedium" color="backgroundContrast">
                    {label.toString()}
                  </Text>
                </TouchableOpacity>
                <Box
                  height={5}
                  backgroundColor={isFocused ? 'primary' : 'backgroundColor'}
                />
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
