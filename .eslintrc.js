module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'object-curly-spacing': 'off',
    'react/prop-types': 'off',
    quotes: 'off',
    'no-trailing-spaces': 'off',
    'eol-last': 'off',
    'operator-linebreak': 'off',
    'space-before-function-paren': 'off',
    semi: 'off'
  }
}
