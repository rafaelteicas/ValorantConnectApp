import React, {useEffect} from 'react';

import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {Circle, G, Svg} from 'react-native-svg';

import {Box} from '../Box/Box';
import {Text} from '../Text/Text';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface Props {
  percentage: number;
  title?: string;
}

export function Loading({percentage = 10, title}: Props) {
  const theta = useSharedValue(2 * Math.PI);
  const radius = 30;
  const strokeWidth = 10;
  const view = (radius + strokeWidth) * 2;
  const circumference = 2 * Math.PI * radius;
  const invertedCompletion = (100 - percentage) / 100;
  const animateTo = useDerivedValue(() => 2 * Math.PI * invertedCompletion);
  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: withTiming(theta.value * radius, {
        duration: 1500,
      }),
    };
  });
  useEffect(() => {
    theta.value = animateTo.value;
  }, [animateTo.value, theta]);
  return (
    <Box justifyContent="center" alignItems="center">
      <Text color="primary">{title || percentage}</Text>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${view} ${view}`}
        style={{position: 'absolute'}}>
        <G>
          <AnimatedCircle
            animatedProps={animatedProps}
            cx="50%"
            cy="50%"
            r={radius}
            stroke="red"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeWidth={strokeWidth}
            strokeDashoffset={2 * Math.PI * (radius * 0.5)}
            fill={'transparent'}
            strokeLinecap="round"
          />
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="red"
            opacity={0.1}
            strokeWidth={strokeWidth}
            fill={'transparent'}
            strokeLinecap="round"
          />
        </G>
      </Svg>
    </Box>
  );
}
