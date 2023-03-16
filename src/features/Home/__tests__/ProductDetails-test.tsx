/**
 * @format
 */

import 'react-native';
import React from 'react';
import { ProductDetails } from '../screens/ProductDetails';

// Note: test renderer must be required after react-native.
import { render } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';

const data = {
  createdAt: new Date('2022-12-09T06:34:25.607Z'),
  product: 'Handmade Metal Shoes',
  points: 16434,
  image: 'https://loremflickr.com/640/480/transport',
  is_redemption: false,
  id: '1',
};

const route = { params: { product: data } };

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

it('renders correctly', () => {
  const wrapper = render(
    <NativeBaseProvider initialWindowMetrics={inset}>
      <ProductDetails navigation={undefined} route={route} />
    </NativeBaseProvider>,
  );
  wrapper.findByText('Detalles del producto:');
});
