import { NativeModules } from 'react-native';
import mockRNLocalize from "react-native-localize/mock";
//netinfo mock
NativeModules.RNCNetInfo = {
  getCurrentConnectivity: jest.fn(),
  isConnectionMetered: jest.fn(),
  addListener: jest.fn(),
  removeListeners: jest.fn(),
};
//localize mock
jest.mock("react-native-localize", () => mockRNLocalize);


jest.mock('react-native-localize', () => {
  return {
    getLocales: jest.fn(),
    // you can add other functions mock here that you are using
  };
});


//mocking react nantive navigation
jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native")
  return {
    ...actualNav,
    useFocusEffect: () => jest.fn(),
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  }
})