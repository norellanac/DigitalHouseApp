import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Landing } from './Landing';
import { Dashboard } from './Dashboard';

export type HomeStackParams = {
  Home: undefined;
  Dashboard: undefined;
};

const HomeStack = createStackNavigator();

export const HomeNavigation = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Landing} />
      <HomeStack.Screen name="Dashboard" component={Dashboard} />
    </HomeStack.Navigator>
  );
};
