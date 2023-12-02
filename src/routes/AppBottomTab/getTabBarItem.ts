import {IconProps} from '@components';

import {TabBottomParamList} from './AppBottomTab';

export const getTabBarItem: Record<
  keyof TabBottomParamList,
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
    icon: 'homeIcon',
  },
};
