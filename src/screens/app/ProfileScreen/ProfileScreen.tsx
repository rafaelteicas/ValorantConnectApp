import React from 'react';

import {Alert, TouchableOpacity} from 'react-native';

import {useGetProfileImage} from '@domain';
import {useNavigation} from '@react-navigation/native';
import {useAuthContext} from '@service';

import {Box, Icon, Screen, Text, UserAvatar} from '@components';

export function ProfileScreen() {
  const {navigate} = useNavigation();
  const {auth, removeAuth} = useAuthContext();
  if (!auth) {
    return null;
  }
  const {data} = useGetProfileImage(auth.user.id);
  function changeProfileImage() {
    navigate('UploadScreen');
  }
  function changeInfo() {
    navigate('InfoScreen');
  }

  function signOutAlert() {
    Alert.alert('Deseja sair da sua conta?', '', [
      {text: 'Sair', onPress: removeAuth},
      {text: 'Cancelar', onPress: () => {}},
    ]);
  }

  return (
    <Screen>
      <Box flex={1}>
        <Box alignItems="center" mb="s24">
          <UserAvatar size={200} profileImage={data} />
          <Text preset="title" color="primary">
            {auth?.user.username}
          </Text>
          <Text preset="title">Configurações</Text>
        </Box>
        <TouchableOpacity
          onPress={changeInfo}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="editIcon" />
          <Text preset="heading" p="s12">
            Editar informações de usuário
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={changeProfileImage}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="cameraIcon" />
          <Text preset="heading" p="s12">
            Alterar imagem do perfil
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={signOutAlert}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text color="primary" preset="heading" p="s12">
            Sair
          </Text>
        </TouchableOpacity>
      </Box>
    </Screen>
  );
}
