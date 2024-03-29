module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'rules': {
    quotes: ['error', 'single', { 'allowTemplateLiterals': true }],
    indent: ['error', 2],
  }
};
