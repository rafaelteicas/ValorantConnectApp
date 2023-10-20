import React from 'react';
import {ComponentProps} from 'react';

import {createBox} from '@shopify/restyle';

import {Theme} from '@theme';

const BoxRestyle = createBox<Theme>();
export type BoxProps = ComponentProps<typeof BoxRestyle>;

interface BoxComponentProps extends BoxProps {
  children?: React.ReactNode;
}

export function Box({children, ...boxProps}: BoxComponentProps) {
  return <BoxRestyle {...boxProps}>{children}</BoxRestyle>;
}
