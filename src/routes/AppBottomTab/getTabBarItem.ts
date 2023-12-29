import {IconProps} from '@components';

import {AppBottomTabParamList} from './AppBottomTabParamList';

export const getTabBarItem: Record<
  keyof AppBottomTabParamList,
  {
    icon: IconProps['name'];
  }
> = {
  HomeScreen: {
    icon: 'homeIcon',
  },
  FindTeamScreen: {
    icon: 'findTeamIcon',
  },
  ProfileScreen: {
    icon: 'profileIcon',
  },
  MessageScreen: {
    icon: 'messageIcon',
  },
};
