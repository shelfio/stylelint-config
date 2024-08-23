'use strict';

/** @type {import("stylelint").Config} */
module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
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
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'keyframes-name-pattern': null,
    'selector-max-universal': 1,
    'color-named': 'never',
    'color-hex-alpha': 'never',
  },
  overrides: [
    {
      files: '**/*.{js,ts,tsx}',
      customSyntax: 'postcss-styled-syntax',
      rules: {
        'media-query-no-invalid': null,
      },
    },
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
      extends: ['stylelint-config-recommended-scss'],
      rules: {
        'media-query-no-invalid': null,
      },
    },
    {
      files: ['**/*.html'],
      customSyntax: 'postcss-html',
    },
  ],
};
