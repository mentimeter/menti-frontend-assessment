import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginJest from 'eslint-plugin-jest';
import pluginTestingLibrary from 'eslint-plugin-testing-library';
import pluginNext from '@next/eslint-plugin-next';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginJest.configs['flat/recommended'],
  pluginTestingLibrary.configs['flat/react'],
  {
    plugins: {
      'react-hooks': pluginReactHooks,
      '@next/next': pluginNext,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
    },
  },
  {
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      '.next/',
      'out/',
      'jest.config.js',
      'next.config.js',
    ],
  },
];
