import React from 'react';

import {
  Dimensions,
  ListRenderItemInfo,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {Image} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {CharactersType} from 'src/domain/Characters/charactersType';

import {Box} from '../../../../../components/Box/Box';
import {Text} from '../../../../../components/Text/Text';

export function AgentsComponent({item}: ListRenderItemInfo<CharactersType>) {
  const {width, height} = Dimensions.get('window');

  const DEFAULT_WIDTH = width * 0.3;
  const DEFAULT_HEIGHT = height * 0.3;

  return (
    <Box
      flex={1}
      alignItems="center"
      justifyContent="center"
      style={{backgroundColor: `#${item.backgroundGradientColors}`}}>
      <Image
        source={{uri: item.image}}
        width={DEFAULT_WIDTH}
        height={DEFAULT_HEIGHT}
      />
      <Text preset="heading" color="primary">
        {item.name}
      </Text>
      <LinearGradient
        colors={[
          `#${item.backgroundGradientColors[0]}`,
          `#${item.backgroundGradientColors[1]}`,
        ]}
        style={$linearGradientStyle}>
        <Image
          source={{uri: item.background}}
          width={DEFAULT_WIDTH}
          height={DEFAULT_HEIGHT}
          style={{opacity: 0.4, flex: 1}}
        />
      </LinearGradient>
    </Box>
  );
}

const $linearGradientStyle: StyleProp<ViewStyle> = {
  width: 140,
  height: 180,
  top: 80,
  borderRadius: 10,
  position: 'absolute',
  zIndex: -1,
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
};
