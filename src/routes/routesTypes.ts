import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {PostScreenParamList, SignUpAuthStackParamList} from '@screens';

import {TabBottomParamList} from './AppBottomTab/AppBottomTab';
import {AppStackParamList} from './AppStack/AppStackParamList';
import {AuthStackParamList} from './AuthStack/AuthStackParamList';

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends TabBottomParamList,
        AppStackParamList,
        AuthStackParamList,
        SignUpAuthStackParamList,
        PostScreenParamList,
        SignUpAuthStackParamList {}
  }
}

export type AuthStackTypes<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;

export type AppStackTypes<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>;

export type AuthSignUpStackTypes<
  RouteName extends keyof SignUpAuthStackParamList,
> = NativeStackScreenProps<SignUpAuthStackParamList, RouteName>;

export type PostScreenTypes<RouteName extends keyof PostScreenParamList> =
  NativeStackScreenProps<PostScreenParamList, RouteName>;

export type AppTopScreenProps<RouteName extends keyof AppStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<AppStackParamList, RouteName>,
    BottomTabScreenProps<TabBottomParamList, 'HomeScreen'>
  >;
