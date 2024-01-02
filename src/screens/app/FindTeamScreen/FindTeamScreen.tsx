import React, {useEffect} from 'react';

import {FlatList, ListRenderItemInfo, RefreshControl} from 'react-native';

import {Post, usePostList} from '@domain';

import {useNavigation} from '@react-navigation/native';

import {AppHeader, Screen} from '@components';

import {useAppSafeArea} from '@hooks';

import {FindTeamBoxComponent} from './components/FindTeamComponent';
import {FindTeamHeader} from './components/FindTeamHeader';

export function FindTeamScreen() {
  const {data, loading, fetchNextPage, fetchData} = usePostList();
  const {top} = useAppSafeArea();
  const navigation = useNavigation();
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function handleNavigate() {
    navigation.navigate('PostScreen');
  }
  function renderItem({item, index}: ListRenderItemInfo<Post>) {
    return <FindTeamBoxComponent {...item} key={index} />;
  }
  return (
    <Screen paddingOff flex={1} paddingVerticalOff style={{paddingTop: top}}>
      <AppHeader />
      <FindTeamHeader onPress={handleNavigate} />
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={data}
        renderItem={renderItem}
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
