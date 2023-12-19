import React from 'react';

import {FlatList, RefreshControl} from 'react-native';

import {usePostList} from '@domain';

import {useNavigation} from '@react-navigation/native';

import {AppHeader, Screen} from '@components';

import {useAppSafeArea} from '@hooks';

import {FindTeamBoxComponent} from './components/FindTeamComponent';
import {FindTeamHeader} from './components/FindTeamHeader';

export function FindTeamScreen() {
  const {data, loading, fetchNextPage, fetchData} = usePostList();
  const {top} = useAppSafeArea();
  const navigation = useNavigation();
  function handleNavigate() {
    navigation.navigate('PostScreen');
  }

  return (
    <Screen paddingOff flex={1} paddingVerticalOff style={{paddingTop: top}}>
      <AppHeader />
      <FindTeamHeader onPress={handleNavigate} />
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={item => <FindTeamBoxComponent {...item} />}
        onEndReached={fetchNextPage}
        refreshing={loading}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={fetchData}
            tintColor="#FFFFFF"
          />
        }
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
      />
    </Screen>
  );
}
