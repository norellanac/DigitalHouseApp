import { StackScreenProps } from '@react-navigation/stack';
import { Box } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';
import { translate } from '../../../helpers/i18n';
import { selectTheme, setDarkTheme } from '../../../redux/slices/theme';
import { useAppDispatch } from '../../../redux/useAppDispatch';
import { useAppSelector } from '../../../redux/useAppSelector';
import { AuthStackParams } from './AuthStack';

interface Props extends StackScreenProps<AuthStackParams, 'Landing'> {}

export const Landing = ({ route, navigation }: Props) => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  //const [isEnabled, setIsEnabled] = useState(theme.darkTheme);
  const [isEnabled, setIsEnabled] = useState(theme);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  useEffect(() => {
    if (isEnabled) {
      dispatch(setDarkTheme({ darkTheme: true }));
      console.warn('darkTheme:', isEnabled);
    }
    if (!isEnabled) {
      dispatch(setDarkTheme({ darkTheme: false }));
      console.warn('darkTheme:', isEnabled);
    }
  }, [isEnabled]);

  console.error('***theme**', theme, isEnabled);
  return (
    <Box alignItems="center" justifyContent="center" flex={1}>
      <Button
        onPress={() => navigation.navigate('Login')}
        title={translate('commons.start')}
      />
      <Button
        marginTop={40}
        onPress={() => setIsEnabled(!isEnabled)}
        title={'hey'}
      />
    </Box>
  );
};
