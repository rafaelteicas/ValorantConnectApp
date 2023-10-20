import React from 'react';

import {ComponentProps} from 'react';

import {createText} from '@shopify/restyle';

import {Theme} from '@theme';

const RestyleText = createText<Theme>();

type RestyleProps = ComponentProps<typeof RestyleText>;

interface TextProps extends RestyleProps {
  children: React.ReactNode;
}

export function Text({children, ...textProps}: TextProps) {
  return <RestyleText {...textProps}>{children}</RestyleText>;
}
