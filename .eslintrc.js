module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:vue/essential',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
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
