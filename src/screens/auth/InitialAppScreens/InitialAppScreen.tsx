import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {Circle, ClipPath, Svg, Image} from 'react-native-svg';

import {Box, Button, Screen, Text} from '@components';

export function InitialAppScreen() {
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
        <Svg>
          <ClipPath id="circle">
            <Circle cx="50%" cy="50%" r={150} />
          </ClipPath>
          <Image
            href={{
              uri: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
            }}
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#circle)"
          />
        </Svg>
        <Box position="absolute" style={{bottom: 100}}>
          <Text color="primary">ESCOLHA UMA FOTO</Text>
        </Box>
      </Box>
      <Button mb="s16" title="Enviar" rightComponent />
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
