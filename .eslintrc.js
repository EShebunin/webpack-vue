module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:vue/essential',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier', 'import', 'jsx-a11y'],
  settings: {
    'import/resolver': {
      webpack: 'webpack.config.js',
    },
  },
  rules: {
    'no-param-reassign': 'off',
  },
};