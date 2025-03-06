import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
// import globals from 'globals'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import prettierConfig from './prettier.config.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

// note that eslint-config-next includes eslint-plugin-react, eslint-plugin-react-hooks, and eslint-plugin-next, eslint-plugin-import, eslint-plugin-jsx-a11y, typescript-eslint, eslint-next/recommended, plugin:@typescript-eslint/recommended

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': ['error', prettierConfig, { usePrettierrc: false }],
      'no-console': 'warn',
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/switch-exhaustiveness-check': 'warn',
      'object-shorthand': 'error',
      '@typescript-eslint/method-signature-style': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: {
            arguments: false,
          },
        },
      ],
      // 'jest/no-disabled-tests': 'warn',
      // 'jest/no-focused-tests': 'error',
      // 'jest/no-identical-title': 'error',
      // 'jest/prefer-to-have-length': 'warn',
      // 'jest/valid-expect': 'error',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      // ...reactPlugin.configs.recommended.rules,
      // ...reactPlugin.configs['jsx-runtime'].rules,
      // ...reactHooksPlugin.configs.recommended.rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
]

export default eslintConfig
