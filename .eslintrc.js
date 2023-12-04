module.exports = {
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  plugins: ['jsx-a11y'],
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
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
