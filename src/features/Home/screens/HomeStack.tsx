import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Landing } from './Landing';
import { ProductDetails } from './ProductDetails';
import { Product } from '../../../redux/slices/productSlice';

export type HomeStackParams = {
  Home: undefined;
  ProductDetails: { product: Product };
};

const HomeStack = createStackNavigator();

export const HomeNavigation = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Landing} />
      <HomeStack.Screen name="ProductDetails" component={ProductDetails} />
    </HomeStack.Navigator>
  );
};
