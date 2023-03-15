import { StackScreenProps } from '@react-navigation/stack';
import { Box, HStack, Image, Stack, Text, Button } from 'native-base';
import { format } from 'date-fns';

import React from 'react';
import { HomeStackParams } from './HomeStack';

interface Props extends StackScreenProps<HomeStackParams, 'ProductDetails'> {}

export const ProductDetails = ({ route, navigation }: Props) => {
  const { product } = route.params;
  return (
    <>
      <Box backgroundColor={'violet.200'} width="100%" height={150}>
        <Text fontWeight={800} fontSize={24} mt="100" ml={8}>
          {product.product}
        </Text>
      </Box>

      <Box flex={1} m={8}>
        <Box
          shadow={3}
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          backgroundColor="gray.50">
          <Box p={50} alignItems="center">
            <Image
              alignSelf={'center'}
              source={{
                uri: product.image,
              }}
              height={200}
              width={200}
              alt="Alternate Text"
            />
          </Box>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Text color="coolGray.400" fontWeight={800} fontSize={14}>
              Detalles del producto:
            </Text>
            <Text fontWeight="800" fontSize={16}>
              {format(
                new Date(product.createdAt),
                "'Comprado el' d 'de' MMMM, yyyy",
              )}
            </Text>
            <Text color="coolGray.400" fontWeight={800} fontSize={14}>
              Con esta compra acumulaste:
            </Text>
          </Stack>
          <Text fontWeight="800" fontSize={24}>
            {product.points} puntos
          </Text>
        </Stack>
        <HStack
          mb="2.5"
          mt="1.5"
          space={2}
          mx={{
            base: 'auto',
            md: '0',
          }}>
          <Button
            onPress={() => navigation.goBack()}
            width="100%"
            bg="blue.600"
            rounded={12}>
            Aceptar
          </Button>
        </HStack>
      </Box>
    </>
  );
};
