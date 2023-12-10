import React from 'react';

import {FlatList} from 'react-native';

import {usePostList} from '@domain';

import {useNavigation} from '@react-navigation/native';

import Animated, {FadeInDown} from 'react-native-reanimated';

import {AppHeader, Screen} from '@components';

import {FindTeamBoxComponent} from './components/FindTeamBoxComponent';
import {FindTeamHeader} from './components/FindTeamHeader';

export function FindTeamScreen() {
  const {data} = usePostList();
  const navigation = useNavigation();
  function handleNavigate() {
    navigation.navigate('PostScreen');
  }

  return (
    <Screen paddingOff>
      <AppHeader />
      <FindTeamHeader onPress={handleNavigate} />
      <Animated.View entering={FadeInDown.delay(200)}>
        <FlatList
          data={data}
          renderItem={item => <FindTeamBoxComponent {...item} />}
        />
      </Animated.View>
    </Screen>
  );
}
