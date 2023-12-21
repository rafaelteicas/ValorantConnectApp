import React from 'react';

import {Pressable, Image} from 'react-native';

import {useUploadProfileImage} from '@domain';
import {useNavigation} from '@react-navigation/native';
import {useAuthContext} from '@service';

import {Box, Button, DefaultAvatar, Screen, Text} from '@components';
import {useAppCamera} from '@hooks';

const DEFAULTS = {size: 300, borderRadius: 75};

export function InitialAppScreen() {
  const navigation = useNavigation();
  const {auth} = useAuthContext();
  const {upload} = useUploadProfileImage();
  const {image, loading, response, imagePicker} = useAppCamera();

  function handleSendOnPress() {
    if (response && auth) {
      upload({
        id: auth.user.id,
        response: response,
      });
      navigation.reset({
        routes: [
          {
            name: 'HomeScreen',
          },
          {
            name: 'HomeScreen',
          },
        ],
      });
    }
  }
  function handleSkipOnPress() {
    navigation.navigate('TabNavigator');
  }

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
        mb="s16"
        title="Enviar"
        rightComponent
        onPress={handleSendOnPress}
      />
      <Button
        disabled={loading}
        title="Pular"
        preset="outline"
        rightComponent
        onPress={handleSkipOnPress}
      />
    </Screen>
  );
}
