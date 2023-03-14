import React, { useRef, useCallback, useState } from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';

import { AuthNavigation } from '../features/Authentication';
import { AuthorizedApp } from './AuthorizedApp';

export const RootNavigator = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  const routeNameRef = useRef<string>();
  const navigationRef = createNavigationContainerRef();

  const handleNavigationReady = useCallback(() => {
    routeNameRef.current = navigationRef?.current?.getCurrentRoute()?.name;
  }, [navigationRef]);

  const handleTrackRouteChange = useCallback(() => {
    const currentRouteName = navigationRef?.current?.getCurrentRoute()?.name;

    if (routeNameRef.current !== currentRouteName) {
      console.log('routing', '=== SCREEN - ' + currentRouteName);
    }

    routeNameRef.current = currentRouteName;
  }, [navigationRef]);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={handleNavigationReady}
      onStateChange={handleTrackRouteChange}>
      {isAuthenticated ? <AuthorizedApp /> : <AuthorizedApp />}
    </NavigationContainer>
  );
};
