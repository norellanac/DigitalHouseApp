/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';

import { setI18nConfig } from './src/helpers/i18n';
import * as RNLocalize from 'react-native-localize';
import { NativeBaseProvider } from 'native-base';
import { RootNavigator } from './src/routes/RootNavigator';
import { store } from './src/redux/stores/store';
import { Provider } from 'react-redux';
import { BannerConnection } from './src/components/organisms';
import { useNetInfo } from '@react-native-community/netinfo';
import { LogBox } from 'react-native';

const LOCALIZATION_EVENT = 'change';

function App(): JSX.Element {
  const { isConnected } = useNetInfo();
  setI18nConfig();

  LogBox.ignoreAllLogs();

  useEffect(() => {
    // Listen for system locale changes, and update configuration accordingly.
    RNLocalize.addEventListener(LOCALIZATION_EVENT, setI18nConfig);

    return () => {
      RNLocalize.removeEventListener(LOCALIZATION_EVENT, setI18nConfig);
    };
  }, []);

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <>
          {!isConnected && <BannerConnection />}
          <RootNavigator />
        </>
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
