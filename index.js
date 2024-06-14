/** @type {import("stylelint").Config} */
const config = {
  rules: {
    'shorthand-property-no-redundant-values': true,
    'selector-attribute-quotes': 'always',
    'font-family-name-quotes': 'always-where-recommended',
    'selector-pseudo-element-colon-notation': 'single',
    'selector-not-notation': 'complex',
    'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',
    'import-notation': 'string',
    'hue-degree-notation': 'angle',
    'font-weight-notation': 'numeric',
    'color-hex-length': 'short',
    'color-function-notation': 'legacy',
    'alpha-value-notation': 'number',
    'value-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'length-zero-no-unit': true,
    'at-rule-no-vendor-prefix': true,
  },
  extends: ['stylelint-config-recommended'],
  overrides: [
    {
      files: '**/*.{js,ts,tsx}',
      customSyntax: 'postcss-styled-syntax',
      extends: ['stylelint-config-styled-components'],
    },
    {
      files: ['**/*.scss'],
      extends: ['stylelint-config-standard-scss'],
    },
    {
      files: ['**/*.html'],
      customSyntax: 'postcss-html',
    },
  ],
};

export default config;
