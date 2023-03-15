import { StackScreenProps } from '@react-navigation/stack';
import {
  Image,
  Box,
  Button,
  FlatList,
  Heading,
  HStack,
  Pressable,
  Spacer,
  Stack,
  Text,
  VStack,
  Skeleton,
  Center,
} from 'native-base';

import React, { useEffect, useState } from 'react';
import useProducts from '../../../hooks/useProducts';
import { HomeStackParams } from './HomeStack';
import { format } from 'date-fns';

interface Props extends StackScreenProps<HomeStackParams, 'Home'> {}


const loadingData = () => (
  <Center w="100%">
    {Array.from({ length: 5 }, (_, i) => (
    <HStack w="90%" maxW="400" borderWidth="1" space={8} rounded="md" borderColor="coolGray.200"p="1">
    <Skeleton flex="1" h="45" rounded="md" />
    <VStack flex="3" space="4">
    <HStack alignItems="center">
      <Skeleton h="3" flex="2" rounded="full" />
        <Skeleton size="5" rounded="full" />
      </HStack>
      <HStack alignItems="center">
      <Skeleton h="3" flex="2" rounded="full" />
      <Skeleton size="5" rounded="full" />
      </HStack>
    </VStack>
  </HStack>))}
</Center>
);

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
        <Heading size="md" marginX={5} marginTop={5} fontWeight={800} fontSize={20}>
          Bienvenido de vuelta!
        </Heading>
        <Text fontSize="lg" fontWeight="500" marginX={5} >
          Ruben Rodriguez
        </Text>
        <Text fontSize="lg" fontWeight="black" marginX={5} marginY={5} color="coolGray.400">
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
              {isLoading? 'Cargando ':  availablePoints?.toLocaleString('en-US')} pts
            </Heading>
          </Stack>
      </Box>
      <Stack space={0}>
        <Text fontSize="lg" fontWeight="black" marginX={5} marginY={2} color="coolGray.400">
          TUS MOVIMIENTOS
        </Text>
      </Stack>
      {isLoading ? (loadingData()) : (
        <FlatList
        margin={2}
        data={products}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate('ProductDetails', {product: item})}>
            <Box
              _dark={{
                borderColor: 'muted.50',
              }}
              borderColor="muted.800"
              mx={5}
              py="2">
              <HStack space={2} justifyContent="space-between">
                <Image
                borderRadius={10}
                  source={{
                    uri: item.image,
                  }}
                  alt="Alternate Text"
                  size="sm"
                  width={45}
                  height={45}
                />
                <VStack>
                  <Text
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    color="coolGray.800"
                    bold>
                    {item.product}
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: 'warmGray.200',
                    }}>
                    { format(new Date(item.createdAt),  "d 'de' MMMM, yyyy")}
                  </Text>
                </VStack>
                <Spacer />
                <Text
                  fontWeight={800} fontSize={16} bold
                  alignSelf="flex-start">
                  {item.is_redemption ? <Text color={'green.500'} fontWeight={800} fontSize={16} bold> + </Text> : <Text color={'red.500'} fontWeight={800} fontSize={16} bold> - </Text>}
                  {item.points} >
                </Text>
              </HStack>
            </Box>
          </Pressable>
        )}
        keyExtractor={item => item.id}
      />
      )}

      <Box alignItems="center" marginX={5}>
        {displayAllProducts ? (
          <HStack
            mb="2.5"
            mt="1.5"
            space={2}
            mx={{
              base: 'auto',
              md: '0',
            }}>
            <Button isLoading={isLoading} onPress={() => setRecords(2)} bg="blue.600" size={'lg'} px={45}>
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
          <HStack
            mb="2.5"
            mt="1.5"
            space={2}
            mx={{
              base: 'auto',
              md: '0',
            }}>
            <Button isLoading={isLoading} onPress={() => setRecords(3)} width="100%" bg="blue.600">
              Todos
            </Button>
          </HStack>
        )}
      </Box>
    </Box>
  );
};
