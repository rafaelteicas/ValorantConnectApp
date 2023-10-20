import React from 'react';

import {ComponentProps} from 'react';

import {TextStyle} from 'react-native';

import {createText} from '@shopify/restyle';

import {Theme} from '@theme';

const RestyleText = createText<Theme>();

type RestyleProps = ComponentProps<typeof RestyleText>;

interface TextProps extends RestyleProps {
  preset: fontPresets;
  children?: React.ReactNode;
  bold?: boolean;
  semiBold?: boolean;
}

export const $fontFamily = {
  bold: 'Oswald-Bold',
  semiBold: 'Oswald-SemiBold',
  medium: 'Oswald-Medium',
  regular: 'Oswald-Regular',
  light: 'Oswald-Light',
  extraLight: 'Oswald-ExtraLight',
};

type fontPresets = 'heading' | 'title' | 'paragraphMedium' | 'paragraphSmall';

const $fontSize: Record<fontPresets, TextStyle> = {
  heading: {fontSize: 20},
  title: {fontSize: 28},
  paragraphMedium: {fontSize: 16},
  paragraphSmall: {fontSize: 12},
};

function getFontFamily(bold?: boolean, semiBold?: boolean) {
  switch (true) {
    case bold:
      return $fontFamily.bold;
    case semiBold:
      return $fontFamily.semiBold;
    default:
      return $fontFamily.regular;
  }
}

export function Text({
  children,
  bold,
  semiBold,
  preset,
  ...textProps
}: TextProps) {
  const fontFamily = getFontFamily(bold, semiBold);
  return (
    <RestyleText
      style={$fontSize[preset]}
      fontFamily={fontFamily}
      {...textProps}>
      {children}
    </RestyleText>
  );
}
