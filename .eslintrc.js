module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 0,
    'no-console': [
      process.env.NODE_ENV === 'production' ? 'warn' : 0,
      { allow: ['warn', 'error'] },
    ],
    'react/display-name': 'off',
    'prettier/prettier': ['error'],
    'import/no-unresolved': 0,
    '@typescript-eslint/no-duplicate-imports': ['error', {}],
    '@typescript-eslint/no-non-null-assertion': 1,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
};
