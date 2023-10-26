import React from 'react';

import {TouchableOpacity} from 'react-native';

import {Box, Text} from '@components';

type topMenuProps = {
  currentOption: string;
  isSelected?: boolean;
};

export function TopMenu({currentOption, isSelected}: topMenuProps) {
  return (
    <Box justifyContent="center" mt="s32" g="s20" flexDirection="row">
      <Box flexDirection="column">
        <TouchableOpacity>
          <Text preset="paragraphSmall" color="backgroundContrast">
            {currentOption}
          </Text>
        </TouchableOpacity>
        {isSelected ? (
          <Box backgroundColor="primary" width={20} height={5} />
        ) : null}
      </Box>
    </Box>
  );
}
