import React from 'react';

import {FlatList} from 'react-native';

import {useGetStreams} from '@domain';

import {Box, Screen, StreamSlide, Text} from '@components';

export function HomeScreen() {
  const {item} = useGetStreams();

  return (
    <Screen>
      <Box>
        <Text preset="title" color="primary" textAlign="center">
          LIVES
        </Text>
        <FlatList
          data={item.data}
          horizontal
          renderItem={items => <StreamSlide {...items} />}
        />
      </Box>
    </Screen>
  );
}
