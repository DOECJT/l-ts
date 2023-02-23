module.exports = {
  extends: '@antfu',
  rules: {
    'no-console': 'off',
  },
  overrides: [
    {
      files: ['*.test.js'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
}
