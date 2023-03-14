import {
  Alert,
  VStack,
  HStack,
  Text,
  IconButton,
  CloseIcon,
  Button,
  Center,
  Slide,
  useColorModeValue,
} from 'native-base';
import React from 'react';
import { translate } from '../../helpers/i18n';

export const BannerConnection = () => {
  return (
    <Slide in={true} placement="top">
      <Alert justifyContent="center" status="warning" safeAreaTop={1}>
        <Alert.Icon />
        <Text color="error.600" fontWeight="medium">
          {translate('commons.lostConnection')}
        </Text>
      </Alert>
    </Slide>
  );
};
