module.exports = {
  testEnvironment: 'jest-environment-jsdom',

  // 1. Tell Jest 30 to treat standard JS/JSX files as native ES Modules
  extensionsToTreatAsEsm: ['.js', '.jsx'], 

  // 2. Completely turn off old transforms so Jest uses native Node module loading
  transform: {}, 

  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },

  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
