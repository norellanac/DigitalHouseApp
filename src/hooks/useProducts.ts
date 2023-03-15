import { setProducts } from '../redux/slices/productSlice';
import { useAppDispatch } from '../redux/useAppDispatch';
import { useGetProductsQuery } from '../services/productsApi';

const useProducts = () => {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetProductsQuery();
  if (data && isLoading === false) {
    dispatch(setProducts(data));
  }
  const redemProducts = data?.filter(item => item.is_redemption);
  const availableProducts = data?.filter(item => item.is_redemption === false);
  const availablePoints = data?.reduce((accumulator, object) => {
    return accumulator + object.points;
  }, 0);
  console.log('fetching data', '=== useProducts.useGetProductsQuery - ');
  return {
    data,
    redemProducts,
    availableProducts,
    availablePoints,
    error,
    isLoading,
  };
};
export default useProducts;
