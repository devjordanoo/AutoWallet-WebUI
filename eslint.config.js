import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    env: {
      "browser": true,
      "es2021": true,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:storybook/recommended"
    ],
    parser: "@typescript-eslint/parser",
    "react/prop-types": "off",
    parserOptions: {
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: [
      'react',
      '@typescript-eslint' 
    ],
    rules: {
      "indent": [ "error", 2 ],
      "linebreak-style": [ "error", "unix" ],
      "quotes": [ "error", "single" ],
      "semi": [ "error", "always" ]
    },
  },
)
