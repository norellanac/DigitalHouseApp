import { StackScreenProps } from '@react-navigation/stack';
import {
  Box,
  Button,
  FlatList,
  Heading,
  HStack,
  Stack,
  Text,
} from 'native-base';

import React, { useEffect, useState } from 'react';
import useProducts from '../../../hooks/useProducts';
import { HomeStackParams } from './HomeStack';
import { LoadingProducts } from '../components/organisms/LoadingProducts';
import { ProductElemtList } from '../components/organisms/ProductElemtList';

interface Props extends StackScreenProps<HomeStackParams, 'Home'> {}

export const Landing = ({ route, navigation }: Props) => {
  const { isLoading, redemProducts, availablePoints, availableProducts, data } =
    useProducts();

  const [displayAllProducts, setDisplayAllProducts] = useState(true);
  const [products, setProducts] = useState(data);

  const setRecords = (option: number) => {
    if (option === 1) {
      setProducts(availableProducts);
      setDisplayAllProducts(false);
    } else if (option === 2) {
      setProducts(redemProducts);
      setDisplayAllProducts(false);
    } else {
      setDisplayAllProducts(true);
      setProducts(data);
    }
  };

  useEffect(() => {
    setRecords(3);
  }, [data]);
  return (
    <Box flex={1}>
      <Stack space={0}>
        <Heading
          size="md"
          marginX={5}
          marginTop={5}
          fontWeight={800}
          fontSize={20}>
          Bienvenido de vuelta!
        </Heading>
        <Text fontSize="lg" fontWeight="500" marginX={5}>
          Ruben Rodriguez
        </Text>
        <Text
          fontSize="lg"
          fontWeight="black"
          marginX={5}
          marginY={5}
          color="coolGray.400">
          TUS PUNTOS
        </Text>
      </Stack>
      <Box
        bg="blue.600"
        marginX={10}
        p="5"
        rounded="3xl"
        _text={{
          fontSize: 'md',
          fontWeight: 'medium',
          color: 'warmGray.50',
        }}>
        <Stack>
          <Text fontSize="lg" fontWeight="black" color={'warmGray.50'}>
            Diciembre
          </Text>
          <Heading
            alignSelf="center"
            marginY={5}
            fontWeight={800}
            fontSize={32}
            color="lightText">
            {isLoading ? 'Cargando ' : availablePoints?.toLocaleString('en-US')}{' '}
            pts
          </Heading>
        </Stack>
      </Box>
      <Stack space={0}>
        <Text
          fontSize="lg"
          fontWeight="black"
          marginX={5}
          marginY={2}
          color="coolGray.400">
          TUS MOVIMIENTOS
        </Text>
      </Stack>
      {isLoading ? (
        <LoadingProducts />
      ) : (
        <FlatList
          margin={2}
          data={products}
          renderItem={({ item }) => <ProductElemtList item={item} />}
          keyExtractor={item => item.id}
        />
      )}

      <Box alignItems="center" marginX={5}>
        {displayAllProducts ? (
          <HStack m={2} space={2}>
            <Button
              isLoading={isLoading}
              onPress={() => setRecords(2)}
              bg="blue.600"
              size={'lg'}
              px={45}>
              Ganados
            </Button>
            <Button
              isLoading={isLoading}
              onPress={() => setRecords(1)}
              size="md"
              bg="blue.600"
              px={45}
              size={'lg'}>
              Canjeados
            </Button>
          </HStack>
        ) : (
          <HStack space={2} m={2}>
            <Button
              isLoading={isLoading}
              onPress={() => setRecords(3)}
              width="100%"
              bg="blue.600">
              Todos
            </Button>
          </HStack>
        )}
      </Box>
    </Box>
  );
};
