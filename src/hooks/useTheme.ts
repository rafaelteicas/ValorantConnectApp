import {useTheme as useRestyleTheme} from '@shopify/restyle';

import {Theme} from '@theme';

export function useTheme() {
  return useRestyleTheme<Theme>();
}
