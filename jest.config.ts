import type {Config} from 'jest';

const config: Config = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/react-native/extend-expect'],
  collectCoverageFrom: ['src/{components,domain}/**/*.{js,jsx,ts,tsx}'],
  moduleDirectories: ['node_modules', './src/test'],
  modulePathIgnorePatterns: ['.*/mock/.*'],
};

export default config;
