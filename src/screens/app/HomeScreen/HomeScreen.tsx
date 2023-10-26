import React from 'react';

import {FlatList} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import {Box, Characters, Screen} from '@components';

import {TopMenu} from './components/TopMenu/TopMenu';

export function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Screen>
        <Box alignItems="center">
          <FlatList
            data={null}
            renderItem={null}
            ListHeaderComponent={<TopMenu />}
            ListFooterComponent={<Characters />}
          />
        </Box>
      </Screen>
    </SafeAreaView>
  );
}
