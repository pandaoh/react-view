/*
 * @Author: HxB
 * @Date: 2022-04-15 14:29:54
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-04-27 14:56:35
 * @Description: eslint 配置文件
 * @FilePath: \react-view\.eslintrc.js
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'spaced-comment': ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 5 }],
    'no-mixed-spaces-and-tabs': ['error', false],
    'comma-dangle': ['error', 'always-multiline'],
    indent: ['error', 2],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    // 'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }], // @typescript-eslint/no-unused-vars
    '@typescript-eslint/no-explicit-any': ['off'],
    'no-irregular-whitespace': ['error', { skipStrings: true }],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-trailing-spaces': ['error', { skipBlankLines: false }],
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    'key-spacing': ['warn', { beforeColon: false, afterColon: true }],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
