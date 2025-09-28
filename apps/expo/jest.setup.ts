import '@testing-library/jest-native/extend-expect';

// Mock Reanimated to avoid loading native bindings in tests.
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => undefined;
  return Reanimated;
});
