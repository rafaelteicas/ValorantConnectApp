import React from 'react';

import {Pressable} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Box, BoxProps, Icon, Text} from '@components';

interface headerProps extends BoxProps {}

export function Header({paddingHorizontal, ...headerProps}: headerProps) {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.goBack()}>
      <Box
        paddingBottom="s32"
        paddingHorizontal={paddingHorizontal}
        flexDirection="row"
        {...headerProps}>
        <Icon name="arrowLeftIcon" size={28} />
        <Text preset="paragraphMedium" color="primary" ml="s16">
          VOLTAR
        </Text>
      </Box>
    </Pressable>
  );
}
