module.exports = {
  env: {
    jest: true
  },
  plugins: ['import'],
  rules: {
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
    }],
  },
};

