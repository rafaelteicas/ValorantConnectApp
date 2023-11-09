import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {TabBottomParamList} from './AppBottomTab/AppBottomTab';
import {AppStackParamList} from './AppStack/AppStackNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TabBottomParamList, AppStackParamList {}
  }
}

export type AppTopScreenProps<RouteName extends keyof AppStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<AppStackParamList, RouteName>,
    BottomTabScreenProps<TabBottomParamList, 'HomeScreen'>
  >;
