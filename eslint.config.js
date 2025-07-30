import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import globals from 'globals'
import prettier from 'eslint-config-prettier'
import tseslintPlugin from '@typescript-eslint/eslint-plugin'
import path from 'node:path'

const rootDir = path.resolve()

export default tseslint.config(
  // Global ignore
  { ignores: ['dist-*', 'coverage', '.pnpm', '*.config.*'] },

  // Base rules (JS + TS strict)
  {
    name: 'base',
    plugins: {
      import: importPlugin,
      'unused-imports': (await import('eslint-plugin-unused-imports')).default,
      'simple-import-sort': (await import('eslint-plugin-simple-import-sort')).default,
      '@typescript-eslint': tseslintPlugin,
    },
    ...js.configs.recommended,
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'unused-imports/no-unused-imports': 'error',
      'simple-import-sort/imports': 'error',
    },
  },

  // TS / React rules
  {
    name: 'ts-react',
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
      '@typescript-eslint': tseslintPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json', './apps/*/tsconfig.json', './packages/*/tsconfig.json'],
        tsconfigRootDir: rootDir,
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'jsx-a11y/alt-text': 'warn',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          pathGroups: [{ pattern: '@/**', group: 'internal' }],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },

  // To turn off conflicts
  prettier,
)
