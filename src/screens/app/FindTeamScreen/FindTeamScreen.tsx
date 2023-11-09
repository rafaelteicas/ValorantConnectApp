import React from 'react';

import {Image} from 'react-native';

import {useGetCharacters} from '@domain';

import {useNavigation} from '@react-navigation/native';

import {Box, BoxProps, Button, Screen, SearchInput, Text} from '@components';

export function FindTeamScreen() {
  const {agents} = useGetCharacters();
  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate('PostScreen');
  }

  return (
    <Screen p="s32">
      <Button
        preset="outline"
        mb="s24"
        title="PROCURAR DUO"
        onPress={handleNavigate}
      />
      <SearchInput placeholder="PROCURE POR MAIN OU ELO!" />
      <Box {...$boxStyles}>
        <Box>
          <Text preset="paragraphMedium" color="primary">
            FULANO DE TAL
          </Text>
          <Text preset="paragraphSmall" color="backgroundContrast">
            Lorem ipsum dolor sit amet, consectetur
          </Text>
          <Box flexDirection="row" justifyContent="flex-end">
            <Box alignItems="center">
              <Text preset="paragraphSmall" color="primary">
                MAIN
              </Text>
              {agents && (
                <Image
                  source={{uri: agents[3].smallIcon}}
                  width={50}
                  height={50}
                />
              )}
            </Box>
            <Box alignItems="center">
              <Text preset="paragraphSmall" color="primary">
                ELO
              </Text>
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

const $boxStyles: BoxProps = {
  borderColor: 'darkBox',
  justifyContent: 'center',
  padding: 's32',
};
