import * as React from 'react';

import { RootStack } from './RootStack';

import { HomeNavigation } from '../features/Home';

const config = {
  animation: 'spring' as const,
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export const AuthorizedApp = () => {
  return (
    <RootStack.Navigator initialRouteName="App">
      <RootStack.Group
        screenOptions={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}>
        <RootStack.Screen name="App" component={HomeNavigation} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
