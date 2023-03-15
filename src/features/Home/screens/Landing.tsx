import { StackScreenProps } from '@react-navigation/stack';
import {
  Avatar,
  Box,
  Button,
  FlatList,
  Heading,
  HStack,
  Spacer,
  Stack,
  Text,
  VStack,
} from 'native-base';

import React, { useEffect, useState } from 'react';
import useProducts from '../../../hooks/useProducts';
import { HomeStackParams } from './HomeStack';

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
        <Heading size="md" marginX={5} marginTop={5}>
          Bienvenido de vuelta!
        </Heading>
        <Text fontSize="lg" fontWeight="500" marginX={5}>
          Ruben Rodriguez
        </Text>
        <Text fontSize="lg" fontWeight="black" marginX={5} marginY={5}>
          TUS PUNTOS
        </Text>
      </Stack>
      <Box
        bg="blue.600"
        marginX={10}
        p="12"
        rounded="xl"
        _text={{
          fontSize: 'md',
          fontWeight: 'medium',
          color: 'warmGray.50',
          textAlign: 'center',
        }}>
        <Stack>
          <Stack>
            <Text fontSize="lg" fontWeight="black" color={'warmGray.50'}>
              Diciembre
            </Text>
            <Heading
              size="md"
              ml="-1"
              fontWeight={800}
              fontSize={32}
              color="lightText">
              {availablePoints} pts
            </Heading>
          </Stack>
        </Stack>
      </Box>
      <Stack space={0}>
        <Text fontSize="lg" fontWeight="black" marginX={5} marginY={2}>
          TUS MOVIMIENTOS
        </Text>
      </Stack>
      <FlatList
        margin={2}
        data={products}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: 'muted.50',
            }}
            borderColor="muted.800"
            pl={['0', '4']}
            pr={['0', '5']}
            py="2">
            <HStack space={[2, 3]} justifyContent="space-between">
              <Avatar
                size="48px"
                source={{
                  uri: item.image,
                }}
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
                  {item.createdAt}
                </Text>
              </VStack>
              <Spacer />
              <Text
                fontSize="xs"
                _dark={{
                  color: 'warmGray.50',
                }}
                color="coolGray.800"
                alignSelf="flex-start">
                {item.is_redemption ? '+' : '-'}
                {item.points}
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={item => item.id}
      />
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
            <Button onPress={() => setRecords(2)} bg="blue.600" size={'lg'}>
              Ganados
            </Button>
            <Button
              onPress={() => setRecords(1)}
              size="md"
              bg="blue.600"
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
            <Button onPress={() => setRecords(3)} width="100%" bg="blue.600">
              Todos
            </Button>
          </HStack>
        )}
      </Box>
    </Box>
  );
};
