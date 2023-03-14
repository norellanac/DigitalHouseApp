import { setProducts } from '../redux/slices/productSlice';
import { useAppDispatch } from '../redux/useAppDispatch';
import { useGetProductsQuery } from '../services/productsApi';

const useProducts = () => {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetProductsQuery();
  dispatch(setProducts(data!));
  console.log('fetching data', '=== useProducts.useGetProductsQuery - ');
  return { data, error, isLoading };
};
export default useProducts;
