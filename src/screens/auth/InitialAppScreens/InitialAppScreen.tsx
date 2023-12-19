import React from 'react';

import {Pressable, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Box, Button, DefaultAvatar, Screen, Text} from '@components';
import {useAppCamera} from '@hooks';

const DEFAULTS = {size: 300, borderRadius: 75};

export function InitialAppScreen() {
  const {image, loading, imagePicker} = useAppCamera();

  const navigation = useNavigation();
  return (
    <Screen>
      <Text preset="title" color="primary">
        Ola
      </Text>
      <Text preset="heading" color="backgroundContrast">
        Selecione sua foto de perfil
      </Text>
      <Box flex={1} justifyContent="center" alignItems="center">
        {image ? (
          <Image
            source={{uri: image ? image : ''}}
            width={DEFAULTS.size}
            height={DEFAULTS.size}
            style={{
              borderRadius: DEFAULTS.borderRadius,
            }}
          />
        ) : (
          <DefaultAvatar
            borderRadius={DEFAULTS.borderRadius}
            size={DEFAULTS.size}
            iconSize={DEFAULTS.size / 2}
          />
        )}
        <Pressable onPress={imagePicker} style={{top: 20}}>
          <Text color="primary">ESCOLHA UMA FOTO</Text>
        </Pressable>
      </Box>
      <Button
        isLoading={loading}
        disabled={!image}
        mb="s16"
        title="Enviar"
        rightComponent
      />
      <Button
        title="Pular"
        preset="outline"
        rightComponent
        onPress={() => {
          navigation.navigate('LoginScreen');
        }}
      />
    </Screen>
  );
}
