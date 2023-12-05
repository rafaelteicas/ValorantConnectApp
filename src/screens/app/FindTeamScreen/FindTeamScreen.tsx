import React from 'react';

import {Image} from 'react-native';

import {useGetCharacters} from '@domain';

import {useNavigation} from '@react-navigation/native';

import Animated, {FadeInDown} from 'react-native-reanimated';

import {Box, BoxProps, Button, Screen, SearchInput, Text} from '@components';

export function FindTeamScreen() {
  const {agents} = useGetCharacters();
  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate('PostScreen');
  }

  return (
    <Screen paddingOff>
      <Animated.View entering={FadeInDown.delay(200)}>
        <Box {...$boxStyles}>
          <Box>
            <Text color="primary">FULANO DE TAL</Text>
            <Text color="backgroundContrast">
              Lorem ipsum dolor sit amet, consectetur
            </Text>
            <Box flexDirection="row" justifyContent="flex-end">
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
            <Text textAlign="right" color="primary">
              c4stro#0000
            </Text>
          </Box>
        </Box>
      </Animated.View>
    </Screen>
  );
}

const $boxStyles: BoxProps = {
  borderColor: 'darkBox',
  justifyContent: 'center',
  backgroundColor: 'darkBox',
  p: 's16',
};
