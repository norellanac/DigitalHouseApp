import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../stores/store';

export interface Product {
  createdAt: string;
  product: string;
  points: number;
  image: string;
  is_redemption: boolean;
  id: string;
}

interface ProductState {
  products?: Product[];
}

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    // ? Logout the user by returning the initial state
    clear: () => initialState,
    // Save the user's info
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const selectProducts = (state: RootState) => state.products.products;
export const { clear, setProducts } = productSlice.actions;
// ? Export the productSlice.reducer to be included in the store.
export default productSlice.reducer;
