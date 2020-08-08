module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@config': './src/config',
          '@entities': './src/entities',
          '@useCases': './src/useCases',
          '@repositories': './src/repositories',
          '@common': './src/common',
          '@providers': './src/providers',
          '@loaders': './src/loaders',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts'],
};
