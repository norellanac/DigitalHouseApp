module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
  testTimeout: 60000,
  bail: 0,
  //***** run test -- yarn test -- */
  //*****e2e COMMENT this to execute e2e test
  // preset: 'react-native',
  // setupFilesAfterEnv: ['./src/setupTests.ts'],
  //*****e2e comment this  to execute e2e test
  //**************************************************************************************** */
  //*****UNcomment this to run e2e test -- yarn test:e2e:android -- */
  setupFilesAfterEnv: ['./e2e-jest.setup.js'],
  testMatch: ['**/__e2e__/*.tsx'],
  //*****UNcomment this to run e2e test -- yarn test:e2e:android -- */
};
