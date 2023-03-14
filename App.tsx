/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet, Text, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { setI18nConfig, translate } from './src/helpers/i18n';
import * as RNLocalize from 'react-native-localize';
import { NativeBaseProvider } from 'native-base';
import { RootNavigator } from './src/routes/RootNavigator';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const LOCALIZATION_EVENT = 'change';

function App(): JSX.Element {
  setI18nConfig();

  useEffect(() => {
    // Listen for system locale changes, and update configuration accordingly.
    RNLocalize.addEventListener(LOCALIZATION_EVENT, setI18nConfig);

    return () => {
      RNLocalize.removeEventListener(LOCALIZATION_EVENT, setI18nConfig);
    };
  }, []);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NativeBaseProvider>
      <RootNavigator />
    </NativeBaseProvider>
  );
}

export default App;
