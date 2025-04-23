// This file is a bastardized travesty.  It's a combo of the new
// "eslint.config.mjs" approach and the deprecated-style '.eslintrc'
// structure.  This is because the eslint.config.next is based on the
// eslintrc style and uis using the FlatCompat conversion stuff that
// is not very good.
import {dirname} from 'path'
import {fileURLToPath} from 'url'
import {FlatCompat} from '@eslint/eslintrc'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import configPrettier from 'eslint-config-prettier'

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
    languageOptions: {
      parser: tsparser, // ✅ Use TypeScript parser
      parserOptions: {
        project: './tsconfig.json', // ✅ Point to TypeScript config
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...configPrettier.rules,
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: false,
          trailingComma: 'es5',
          printWidth: 80,
          tabWidth: 2,
        },
      ],

      'no-console': 'warn',
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
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
      '@typescript-eslint/no-unsafe-return': 'off',

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
      'prettier/prettier': 'error',
    },
  },
]

export default eslintConfig
