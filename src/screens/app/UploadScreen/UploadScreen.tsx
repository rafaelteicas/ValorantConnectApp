import React from 'react';

import {Pressable} from 'react-native';

import {useGetProfileImage, useUploadProfileImage} from '@domain';
import {useNavigation} from '@react-navigation/native';
import {useAuthContext} from '@service';

import {Box, Button, Screen, Text, UserAvatar} from '@components';
import {useAppCamera} from '@hooks';

const DEFAULTS = {size: 300, borderRadius: 75};

export function UploadScreen() {
  const navigation = useNavigation();
  const {auth} = useAuthContext();
  const {data, refetch} = useGetProfileImage(auth!!.user.id);
  const {image, loading, response, imagePicker} = useAppCamera();
  const {upload, isLoading} = useUploadProfileImage({
    onSuccess: () => {
      refetch().then(() => {
        navigation.goBack();
      });
    },
  });
  function uploadImage() {
    if (!response || !auth) {
      return null;
    }
    upload({
      id: auth.user.id,
      response: response,
    });
  }

  return (
    <Screen canGoBack>
      <Box flex={1} justifyContent="center" alignItems="center">
        <UserAvatar size={DEFAULTS.size} profileImage={image ? image : data} />
        <Pressable onPress={imagePicker}>
          <Text preset="heading" color="primary" mt="s32">
            Escolher foto
          </Text>
        </Pressable>
      </Box>
      <Button
        disabled={loading || isLoading}
        title="Enviar"
        onPress={uploadImage}
      />
    </Screen>
  );
}
