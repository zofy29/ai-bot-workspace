module.exports = {
  extends: ['airbnb-base', 'plugin:vue/recommended'],
  rules: {
    'max-len': 0,
    'import/prefer-default-export': false,
    'vue/max-attributes-per-line': false,
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  globals: {
    __static: true,
  },
};
