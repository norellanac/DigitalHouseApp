import { useNavigation } from '@react-navigation/native';
import {
  Pressable,
  Box,
  HStack,
  VStack,
  Text,
  Spacer,
  Image,
} from 'native-base';
import React from 'react';
import { Product } from '../../../../redux/slices/productSlice';
import { format } from 'date-fns';


const testID = (id: string) => {
  return Platform.OS === 'android'
    ? { accessible: true, accessibilityLabel: id }
    : { testID: id };
};

export const ProductElemtList = ({ item }: { item: Product }) => {
  const navigation = useNavigation();
  return (
    <Pressable
    {...testID('ProductElemtList')}
      onPress={() => navigation.navigate('ProductDetails', { product: item })}>
      <Box borderColor="muted.800" mx={5} py="2">
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
            <Text color="coolGray.800" bold>
              {item.product}
            </Text>
            <Text color="coolGray.600">
              {format(new Date(item.createdAt), "d 'de' MMMM, yyyy")}
            </Text>
          </VStack>
          <Spacer />
          <Text fontWeight={800} fontSize={16} bold alignSelf="flex-start">
            {item.is_redemption ? (
              <Text color={'green.500'} fontWeight={800} fontSize={16} bold>
                {' + '}
              </Text>
            ) : (
              <Text color={'red.500'} fontWeight={800} fontSize={16} bold>
                {' - '}
              </Text>
            )}
            {item.points} {'>'}
          </Text>
        </HStack>
      </Box>
    </Pressable>
  );
};
