'use strict';

module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'declaration-property-value-no-unknown': true,
    'selector-pseudo-element-colon-notation': 'single',
    'import-notation': 'string',
    'font-weight-notation': 'numeric',
    'color-function-notation': 'legacy',
    'alpha-value-notation': 'number',
    'color-no-invalid-hex': true,
    'comment-whitespace-inside': 'always',
    'max-nesting-depth': 3,
    'selector-max-attribute': 3,
    'selector-max-combinators': 2,
    'selector-max-id': 1,
    'selector-max-compound-selectors': 3,
    'selector-max-pseudo-class': 3,
    'selector-max-type': 3,
    'selector-max-universal': 1,
    'color-named': 'never',
    'color-hex-alpha': 'never',
  },
  overrides: [
    {
      files: '**/*.{js,ts,tsx}',
      customSyntax: '@stylelint/postcss-css-in-js',
    },
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
      extends: ['stylelint-config-recommended-scss'],
    },
    {
      files: ['**/*.html'],
      customSyntax: 'postcss-html',
    },
  ],
};
