/*
 * @Author: HxB
 * @Date: 2022-04-15 14:29:54
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-04-22 14:28:06
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
    indent: ['error', 2],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    '@typescript-eslint/no-explicit-any': ['off'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
