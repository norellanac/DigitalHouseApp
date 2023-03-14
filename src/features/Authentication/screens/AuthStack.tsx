import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Landing } from './Landing';
import { Login } from './Login';

export type AuthStackParams = {
  Landing: undefined;
  Login: undefined;
};

const AuthStack = createStackNavigator();

export const AuthNavigation = (): React.ReactElement => {
  return (
    <AuthStack.Navigator
      initialRouteName="Landing"
      screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Landing" component={Landing} />
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};
