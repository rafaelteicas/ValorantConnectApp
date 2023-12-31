module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@theme': './src/theme',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@routes': './src/routes',
          '@api': './src/api',
          '@domain': './src/domain',
          '@infra': './src/infra',
          '@service': './src/service',
        },
      },
    ],
    'react-native-reanimated/plugin',
    'module:react-native-dotenv',
  ],
};
