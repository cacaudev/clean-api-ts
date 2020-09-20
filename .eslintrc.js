module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugin: 'prettier',
  parser: 'babel-eslint',
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'max-len': [2, 90, 8],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'require-atomic-updates': 'off',
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
  },
};
