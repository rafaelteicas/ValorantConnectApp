import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {SignUpAuthStackParamList} from '@screens';

import {TabBottomParamList} from './AppBottomTab/AppBottomTab';
import {AppStackParamList} from './AppStack/AppStackNavigator';
import {AuthStackParamList} from './AuthStack/AuthStackParams';

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends TabBottomParamList,
        AppStackParamList,
        AuthStackParamList,
        SignUpAuthStackParamList {}
  }
}

export type AuthStackTypes<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;

export type AuthSignUpStackTypes<
  RouteName extends keyof SignUpAuthStackParamList,
> = NativeStackScreenProps<SignUpAuthStackParamList, RouteName>;

export type AppTopScreenProps<RouteName extends keyof AppStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<AppStackParamList, RouteName>,
    BottomTabScreenProps<TabBottomParamList, 'HomeScreen'>
  >;
