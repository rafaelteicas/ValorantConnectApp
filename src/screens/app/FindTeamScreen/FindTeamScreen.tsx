import React from 'react';

import {Image} from 'react-native';

import {useGetCharacters} from '@domain';

import {Box, Screen, Text} from '@components';

export function FindTeamScreen() {
  const {agents} = useGetCharacters();

  return (
    <Screen p="s32">
      <Box
        flexDirection="row"
        backgroundColor="darkBox"
        borderRadius="b12"
        padding="s32">
        <Image
          source={{
            uri: 'https://static.thenounproject.com/png/5034901-200.png',
          }}
          style={{backgroundColor: '#fff'}}
          width={100}
          height={100}
        />
        <Box ml="s32">
          <Text preset="paragraphMedium" color="primary">
            FULANO DE TAL
          </Text>
          <Text preset="paragraphSmall" color="backgroundContrast">
            Lorem ipsum dolor sit amet, consectetur
          </Text>
          <Box flexDirection="row" justifyContent="space-between">
            <Box alignItems="center">
              <Text color="primary">MAIN</Text>
              {agents && (
                <Image
                  source={{uri: agents[3].smallIcon}}
                  width={50}
                  height={50}
                />
              )}
            </Box>
            <Box alignItems="center">
              <Text color="primary">ELO</Text>
              <Image
                source={{
                  uri: 'https://static.wikia.nocookie.net/valorant/images/1/1a/Radiant_Rank.png/revision/latest/thumbnail/width/360/height/360?cb=20200623203621',
                }}
                width={50}
                height={50}
              />
            </Box>
          </Box>
          <Box mt="s16" height={1} backgroundColor="backgroundContrast" />
          <Text textAlign="right" preset="paragraphMedium" color="primary">
            c4stro#0000
          </Text>
        </Box>
      </Box>
    </Screen>
  );
}
