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
        style={{
          zIndex: -1,
          position: 'absolute',
          width: 150,
          height: '60%',
          left: '30%',
          opacity: 0.7,
          overflow: 'hidden',
        }}
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
          width={width * 0.5}
          height={height * 0.4}
          x={120}
          y={270}
          r={20}>
          <SweepGradient c={{x: 0, y: 0}} colors={colors} />
        </RoundedRect>
      </Canvas>
    </>
  );
}

const $centerBackground: StyleProp<ViewStyle> | any = {
  position: 'absolute',
};
