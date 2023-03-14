// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../redux/slices/productSlice';
// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6222994f666291106a29f999.mockapi.io/api/v1/',
  }),
  endpoints: builder => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products/',
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery } = productsApi;
