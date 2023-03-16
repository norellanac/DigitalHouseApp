/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Landing } from '../screens/Landing';

// Note: test renderer must be required after react-native.
import { render } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';

const data = {
  params: {
    createdAt: new Date('2022-12-09T06:34:25.607Z'),
    product: 'Handmade Metal Shoes',
    points: 16434,
    image: 'https://loremflickr.com/640/480/transport',
    is_redemption: false,
    id: '1',
  },
};

it('renders correctly', () => {
  render(
    <NativeBaseProvider>
      <Landing navigation={undefined} route={data} />
    </NativeBaseProvider>,
  );
});
