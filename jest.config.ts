import type {Config} from 'jest';

const config: Config = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/react-native/extend-expect'],
  collectCoverageFrom: ['src/{components}/**/*.{js,jsx,ts,tsx}'],
  moduleDirectories: ['node_modules', './src/test'],
};

export default config;
