import React from 'react';

import {TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Box, BoxProps, Icon, Text} from '@components';

interface headerProps extends BoxProps {}

export function Header({...headerProps}: headerProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Box padding="s32" flexDirection="row" {...headerProps}>
        <Icon name="arrowLeftIcon" size={28} />
        <Text preset="paragraphMedium" color="primary" ml="s16">
          VOLTAR
        </Text>
      </Box>
    </TouchableOpacity>
  );
}
