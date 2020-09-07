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
          '@entities': './src/core/entities',
          '@repositories': './src/core/repositories',
          '@presentation': './src/presentation',
          '@controllers': './src/presentation/controllers',
          '@infrastructure': './src/infrastructure',
          '@useCases': './src/application/useCases',
          '@security': './src/application/security',
        },
      },
    ],
  ],
  //ignore: ['**/*.spec.ts'],
};
