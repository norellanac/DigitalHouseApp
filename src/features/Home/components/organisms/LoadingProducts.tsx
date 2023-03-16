import { Center, HStack, Skeleton, VStack } from 'native-base';

import React from 'react';

export const LoadingProducts = () => {
  return (
    <Center w="100%">
      {Array.from({ length: 5 }, (_, i) => (
        <HStack
          key={i}
          w="90%"
          maxW="400"
          borderWidth="1"
          space={8}
          rounded="md"
          borderColor="coolGray.200"
          p="1">
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
        </HStack>
      ))}
    </Center>
  );
};
