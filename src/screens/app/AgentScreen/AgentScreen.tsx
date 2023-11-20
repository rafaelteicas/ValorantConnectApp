import React from 'react';

import {Dimensions, Image} from 'react-native';

import {Box, BoxProps, Screen, Text} from '@components';
import {useTheme} from '@hooks';
import {AppTopScreenProps} from '@routes';

export function AgentScreen({route}: AppTopScreenProps<'AgentScreen'>) {
  const {width, height} = Dimensions.get('window');

  const {colors} = useTheme();

  const skills: Array<{
    description: string;
    displayName: string;
    displayIcon: string;
  }> = route.params.abilities;

  return (
    <Screen canGoBack>
      <Box justifyContent="center" alignItems="center">
        <Image
          source={{uri: route.params.image}}
          width={width / 2}
          height={height / 3}
        />
        <Text preset="heading" color="backgroundContrast">
          {route.params.name}
        </Text>
        <Text color="backgroundContrast" preset="paragraphMedium">
          {route.params.description}
        </Text>
        <Box {...$boxStyle}>
          <Image
            source={{uri: route.params.role.icon}}
            tintColor={colors.primary}
            width={30}
            height={30}
          />
          <Text color="primary" preset="paragraphMedium">
            {route.params.role.name}
          </Text>
        </Box>
        <Text preset="heading" color="backgroundContrast">
          Skills
        </Text>
        {skills.map(skill => (
          <Box>
            <Text preset="paragraphSmall" color="backgroundContrast">
              {skill.displayName}
            </Text>
            <Image />
          </Box>
        ))}
      </Box>
    </Screen>
  );
}

const $boxStyle: BoxProps = {
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: 'primary',
  p: 's8',
  borderRadius: 'b8',
  margin: 's32',
};
