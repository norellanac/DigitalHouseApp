/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Test } from '../screens/Test';

// Note: test renderer must be required after react-native.
import { render } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

it('renders correctly', () => {
  const wrapper = render(
    <NativeBaseProvider initialWindowMetrics={inset}>
      <Test />
    </NativeBaseProvider>,
  );
  wrapper.findByText('Test');
});
