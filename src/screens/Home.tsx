import React from 'react';

import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';

import {TabBar} from 'src/components/ui';
import {TabParamList} from 'src/types';

import {HomeMainScreen} from './HomeMain';
import {HomeMessengerScreen} from './HomeMessenger';
import {HomeOrdersScreen} from './HomeOrders';

const Tab = createBottomTabNavigator<TabParamList>();

export const screenOptions = ({}: {
  route: RouteProp<TabParamList>;
  navigation: any;
}): BottomTabNavigationOptions => ({
  headerShadowVisible: false,
});

const renderTabBar = (props: BottomTabBarProps) => <TabBar {...props} />;

export function Home() {
  return (
    <Tab.Navigator tabBar={renderTabBar} screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="homeMain"
        component={HomeMainScreen}
        options={screenOptions}
      />
      <Tab.Screen
        name="homeOrders"
        component={HomeOrdersScreen}
        options={screenOptions}
      />
      <Tab.Screen
        name="homeMessenger"
        component={HomeMessengerScreen}
        options={screenOptions}
      />
    </Tab.Navigator>
  );
}
