import {IconProps} from '@components';

import {tabBarProps} from './AppBottomTab';

export const getTabBarItem: Record<
  keyof tabBarProps,
  {
    label: string;
    icon: IconProps['name'];
  }
> = {
  HomeScreen: {
    label: 'Home',
    icon: 'homeIcon',
  },
  Outro: {
    label: 'Outro',
    icon: 'homeIcon',
  },
};
