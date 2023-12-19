import React from 'react';

import {Image, StyleProp, ViewStyle} from 'react-native';

import {Canvas, RoundedRect, SweepGradient} from '@shopify/react-native-skia';

type Props = {
  width: number;
  height: number;
  colors: string[];
  backgroundImage: any;
};

export function AgentsBackgroundCard({
  width,
  height,
  colors,
  backgroundImage,
}: Props) {
  return (
    <>
      <Image
        source={{uri: backgroundImage}}
        width={width / 2}
        height={height}
        style={{
          zIndex: -1,
          position: 'absolute',
        }}
        resizeMode="center"
      />
      <Canvas
        style={[
          {
            width,
            height,
            zIndex: -2,
          },
          $centerBackground,
        ]}>
        <RoundedRect
          width={width * 0.6}
          height={height * 0.4}
          x={40}
          y={160}
          r={40}
          color={'black'}>
          <SweepGradient c={{x: 0, y: 0}} colors={colors} />
        </RoundedRect>
      </Canvas>
    </>
  );
}

const $centerBackground: StyleProp<ViewStyle> | any = {
  position: 'absolute',
  top: -40,
  left: 0,
};
