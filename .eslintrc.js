module.exports = {
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  plugins: ['jsx-a11y', 'unused-imports'],
  rules: {
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], //should add ".ts" if typescript project
    // suppress errors for unvalidated props
    'react/prop-types': 'off',
    // detect violations of React Rules of Hooks
    'react-hooks/rules-of-hooks': 'error',
    // warn about exhaustive dependencies for useEffect and similar hooks
    'react-hooks/exhaustive-deps': 'warn',
    // suppress warnings about unescaped entities
    'react/no-unescaped-entities': 'off',
    // all unused imports are errors
    'unused-imports/no-unused-imports': 'error',
    // suggested configuration from https://www.npmjs.com/package/eslint-plugin-unused-imports
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
