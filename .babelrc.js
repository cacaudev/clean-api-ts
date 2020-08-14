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
          '@entities': './src/domain/entities',
          '@interfaces': './src/interfaces',
          '@providers': './src/infrastructure/providers',
          '@repositories': './src/domain/repositories',
          '@useCases': './src/application/useCases',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts'],
};
