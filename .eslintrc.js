module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/airbnb', '@vue/typescript/recommended', '@vue/prettier', '@vue/prettier/@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    semi: 'off',
    radix: 'off',
    'max-len': 'off',
    'no-continue': 'off',
    'consistent-return': 'off',
    'no-alert': 'off',
    'no-multi-assign': 'off',
    'no-underscore-dangle': 'off',
    'no-bitwise': 'off',
    'no-mixed-operators': 'off',
    'import/no-cycle': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-unused-expressions': 'off',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    'no-restricted-globals': 'off',
    'no-lonely-if': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'comma-dangle': ['error', 'never'],
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none'
        },
        singleline: {
          delimiter: 'semi'
        }
      }
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 200,
        singleQuote: true,
        semi: false,
        trailingComma: 'none',
        arrowParens: 'avoid'
      }
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'space-before-function-paren': ['error', 'never'],
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    'vue/comma-dangle': ['error', 'never'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/eqeqeq': 'error',
    'vue/key-spacing': 'error',
    'vue/match-component-file-name': 'error'
    // 'vue/object-curly-spacing': 'error'
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ],
  globals: {
    window: true,
    location: true
  }
}
