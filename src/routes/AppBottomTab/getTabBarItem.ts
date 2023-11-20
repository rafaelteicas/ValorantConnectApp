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
  FindTeam: {
    icon: 'findTeamIcon',
  },
  Profile: {
    icon: 'homeIcon',
  },
};
