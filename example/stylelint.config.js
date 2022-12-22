module.exports = {
  customSyntax: 'postcss-scss',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier'
  ],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: '@stylelint/postcss-css-in-js',
    },
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {}
}
