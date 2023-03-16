/**
 * @format
 */

import 'react-native';
import React from 'react';
import { LoadingProducts } from '../components/organisms/LoadingProducts';

// Note: test renderer must be required after react-native.
import { render } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';

it('renders correctly', () => {
  render(
    <NativeBaseProvider>
      <LoadingProducts />
    </NativeBaseProvider>,
  );
});
