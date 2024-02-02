import React, {useEffect} from 'react';

import {useWindowDimensions} from 'react-native';

import {useModal} from '@service';

import Animated, {FadeInUp, FadeOut} from 'react-native-reanimated';

import {useAppSafeArea} from '@hooks';

import {Box} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

export function Modal() {
  const {modal, hideModal} = useModal();
  const {width} = useWindowDimensions();
  const {top} = useAppSafeArea();
  useEffect(() => {
    setTimeout(() => hideModal(), 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal]);
  if (!modal) {
    return null;
  }
  return (
    <Animated.View
      entering={FadeInUp}
      exiting={FadeOut}
      style={{position: 'absolute'}}>
      <Box p="s12" width={width} backgroundColor="darkBox" alignSelf="center">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          style={{marginTop: top}}>
          <Box flexDirection="row" alignItems="center" gap="s12">
            <Icon
              color="primary"
              name="successIcon"
              onPress={() => hideModal()}
              size={15}
            />
            <Text color="backgroundContrast">{modal}</Text>
          </Box>
          <Icon
            color="backgroundContrast"
            name="closeIcon"
            onPress={hideModal}
            size={15}
          />
        </Box>
      </Box>
    </Animated.View>
  );
}
