import { Link } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import {
  Center,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  Text,
} from 'native-base';
import React from 'react';
import { translate } from '../../../helpers/i18n';
import { useGetPokemonByNameQuery } from '../../../services/pokemonApi';
import { AuthStackParams } from './AuthStack';

interface Props extends StackScreenProps<AuthStackParams, 'Login'> {}

export const Login = ({route, navigation}: Props) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');
  console.error('***useGetPokemonByNameQuery**', data?.name, error, isLoading);
  return (
    <Center w="100%" alignItems="center" justifyContent="center" flex={1}>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}>
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: 'warmGray.200',
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button mt="2" colorScheme="indigo">
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}>
              I'm a new user.
            </Text>
            <Link
              _text={{
                color: 'indigo.500',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
              to={navigation}
              onPress={() => navigation.navigate('Landing')}>
              {translate('auth.landing_screen.login')}
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};
