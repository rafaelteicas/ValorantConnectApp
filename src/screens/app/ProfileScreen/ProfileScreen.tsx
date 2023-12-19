import React from 'react';

import {TouchableOpacity} from 'react-native';

import {useAuthContext} from '@service';

import {Box, Button, Screen, Text, UserAvatar} from '@components';

export function ProfileScreen() {
  const {auth, removeAuth} = useAuthContext();
  return (
    <Screen>
      <Box flex={1}>
        <Box alignItems="center" mb="s24">
          <UserAvatar size={200} profileImage={auth?.user.profileImage} />
          <Text preset="title" color="primary">
            {auth?.user.username}
          </Text>
          <Text preset="title">Configurações</Text>
        </Box>
        <TouchableOpacity>
          <Text p="s12">Editar informações de usuário</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text p="s12">Alterar imagem do perfil</Text>
        </TouchableOpacity>
      </Box>
      <Button title="Sair" onPress={() => removeAuth()} />
    </Screen>
  );
}
