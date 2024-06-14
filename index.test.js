import stylelint from 'stylelint';
import config from './index';

describe('stylelint-config', () => {
  it('should pass valid css', async () => {
    const result = await stylelint.lint({
      files: './__mocks__/valid.css',
      config,
    });

    expect(result.errored).toBeFalsy();
  });

  it('should fail invalid css', async () => {
    const result = await stylelint.lint({
      files: './__mocks__/invalid.css',
      config,
    });

    expect(result.errored).toBeTruthy();
    expect(result.results[0].warnings).toEqual([
      {
        column: 32,
        endColumn: 35,
        endLine: 4,
        line: 4,
        rule: 'alpha-value-notation',
        severity: 'error',
        text: 'Expected "15%" to be "0.15" (alpha-value-notation)',
      },
      {
        column: 12,
        endColumn: 15,
        endLine: 6,
        line: 6,
        rule: 'alpha-value-notation',
        severity: 'error',
        text: 'Expected "50%" to be "0.5" (alpha-value-notation)',
      },
      {
        column: 1,
        endColumn: 14,
        endLine: 31,
        line: 31,
        rule: 'at-rule-no-vendor-prefix',
        severity: 'error',
        text: 'Unexpected vendor-prefixed at-rule "@-ms-viewport" (at-rule-no-vendor-prefix)',
      },
      {
        column: 23,
        endColumn: 25,
        endLine: 25,
        line: 25,
        rule: 'block-no-empty',
        severity: 'error',
        text: 'Unexpected empty block (block-no-empty)',
      },
      {
        column: 31,
        endColumn: 33,
        endLine: 25,
        line: 25,
        rule: 'block-no-empty',
        severity: 'error',
        text: 'Unexpected empty block (block-no-empty)',
      },
      {
        column: 25,
        endColumn: 27,
        endLine: 29,
        line: 29,
        rule: 'block-no-empty',
        severity: 'error',
        text: 'Unexpected empty block (block-no-empty)',
      },
      {
        column: 41,
        endColumn: 43,
        endLine: 23,
        line: 23,
        rule: 'block-no-empty',
        severity: 'error',
        text: 'Unexpected empty block (block-no-empty)',
      },
      {
        column: 10,
        endColumn: 20,
        endLine: 14,
        line: 14,
        rule: 'color-function-notation',
        severity: 'error',
        text: 'Expected legacy color-function notation (color-function-notation)',
      },
      {
        column: 10,
        endColumn: 17,
        endLine: 20,
        line: 20,
        rule: 'color-hex-length',
        severity: 'error',
        text: 'Expected "#ffffff" to be "#fff" (color-hex-length)',
      },
      {
        column: 15,
        endColumn: 23,
        endLine: 10,
        line: 10,
        rule: 'color-no-invalid-hex',
        severity: 'error',
        text: 'Unexpected invalid hex color "#12345aa" (color-no-invalid-hex)',
      },
      {
        column: 13,
        endColumn: 28,
        endLine: 3,
        line: 3,
        rule: 'font-family-name-quotes',
        severity: 'error',
        text: 'Expected quotes around "Times New Roman" (font-family-name-quotes)',
      },
      {
        column: 16,
        endColumn: 20,
        endLine: 5,
        line: 5,
        rule: 'font-weight-notation',
        severity: 'error',
        text: 'Expected "bold" to be "700" (font-weight-notation)',
      },
      {
        column: 27,
        endColumn: 29,
        endLine: 4,
        line: 4,
        rule: 'hue-degree-notation',
        severity: 'error',
        text: 'Expected "10" to be "10deg" (hue-degree-notation)',
      },
      {
        column: 9,
        endColumn: 23,
        endLine: 27,
        line: 27,
        rule: 'import-notation',
        severity: 'error',
        text: 'Expected "url("foo.css")" to be ""foo.css"" (import-notation)',
      },
      {
        column: 18,
        endColumn: 22,
        endLine: 25,
        line: 25,
        rule: 'keyframe-selector-notation',
        severity: 'error',
        text: 'Expected "from" to be "0%" (keyframe-selector-notation)',
      },
      {
        column: 9,
        endColumn: 11,
        endLine: 9,
        line: 9,
        rule: 'length-zero-no-unit',
        severity: 'error',
        text: 'Unexpected unit (length-zero-no-unit)',
      },
      {
        column: 9,
        endColumn: 34,
        endLine: 23,
        line: 23,
        rule: 'media-feature-name-no-vendor-prefix',
        severity: 'error',
        text: 'Unexpected vendor-prefix (media-feature-name-no-vendor-prefix)',
      },
      {
        column: 1,
        endColumn: 23,
        endLine: 27,
        line: 27,
        rule: 'no-invalid-position-at-import-rule',
        severity: 'error',
        text: 'Unexpected invalid position @import rule (no-invalid-position-at-import-rule)',
      },
      {
        column: 3,
        endColumn: 20,
        endLine: 8,
        line: 8,
        rule: 'property-no-vendor-prefix',
        severity: 'error',
        text: 'Unexpected vendor-prefix "-webkit-transform" (property-no-vendor-prefix)',
      },
      {
        column: 8,
        endColumn: 14,
        endLine: 13,
        line: 13,
        rule: 'selector-attribute-quotes',
        severity: 'error',
        text: 'Expected quotes around "flower" (selector-attribute-quotes)',
      },
      {
        column: 6,
        endColumn: 24,
        endLine: 29,
        line: 29,
        rule: 'selector-no-vendor-prefix',
        severity: 'error',
        text: 'Unexpected vendor-prefix "::-moz-placeholder" (selector-no-vendor-prefix)',
      },
      {
        column: 8,
        endColumn: 17,
        endLine: 19,
        line: 19,
        rule: 'selector-not-notation',
        severity: 'error',
        text: 'Expected complex :not() pseudo-class notation (selector-not-notation)',
      },
      {
        column: 2,
        endColumn: 4,
        endLine: 17,
        line: 17,
        rule: 'selector-pseudo-element-colon-notation',
        severity: 'error',
        text: 'Expected single colon pseudo-element notation (selector-pseudo-element-colon-notation)',
      },
      {
        column: 3,
        endColumn: 34,
        endLine: 2,
        line: 2,
        rule: 'shorthand-property-no-redundant-values',
        severity: 'error',
        text: 'Expected "1px 2px 1px 2px" to be "1px 2px" (shorthand-property-no-redundant-values)',
      },
      {
        column: 12,
        endColumn: 24,
        endLine: 7,
        line: 7,
        rule: 'value-no-vendor-prefix',
        severity: 'error',
        text: 'Unexpected vendor-prefix "-webkit-flex" (value-no-vendor-prefix)',
      },
    ]);
  });

  it('should pass valid scss', async () => {
    const result = await stylelint.lint({
      files: './__mocks__/valid.scss',
      config,
    });

    expect(result.errored).toBeFalsy();
  });

  it('should fail invalid scss', async () => {
    const result = await stylelint.lint({
      files: './__mocks__/invalid.scss',
      config,
    });

    expect(result.errored).toBeTruthy();
    expect(result.results[0].warnings).toHaveLength(28);
  });

  it('should pass valid js', async () => {
    //console.log(validHtml);
    const result = await stylelint.lint({
      files: './__mocks__/valid.styled.js',
      config,
    });

    expect(result.errored).toBeFalsy();
  });

  it('should fail invalid js', async () => {
    const result = await stylelint.lint({
      files: './__mocks__/invalid.styled.js',
      config,
    });

    expect(result.errored).toBeTruthy();
    expect(result.results[0].warnings).toEqual([
      {
        column: 34,
        endColumn: 37,
        endLine: 10,
        line: 10,
        rule: 'alpha-value-notation',
        severity: 'error',
        text: 'Expected "15%" to be "0.15" (alpha-value-notation)',
      },
      {
        column: 14,
        endColumn: 17,
        endLine: 12,
        line: 12,
        rule: 'alpha-value-notation',
        severity: 'error',
        text: 'Expected "50%" to be "0.5" (alpha-value-notation)',
      },
      {
        column: 5,
        endColumn: 18,
        endLine: 46,
        line: 46,
        rule: 'at-rule-no-vendor-prefix',
        severity: 'error',
        text: 'Unexpected vendor-prefixed at-rule "@-ms-viewport" (at-rule-no-vendor-prefix)',
      },
      {
        column: 12,
        endColumn: 8,
        endLine: 36,
        line: 35,
        rule: 'block-no-empty',
        severity: 'error',
        text: 'Unexpected empty block (block-no-empty)',
      },
      {
        column: 12,
        endColumn: 8,
        endLine: 38,
        line: 37,
        rule: 'block-no-empty',
        severity: 'error',
        text: 'Unexpected empty block (block-no-empty)',
      },
      {
        column: 29,
        endColumn: 6,
        endLine: 44,
        line: 43,
        rule: 'block-no-empty',
        severity: 'error',
        text: 'Unexpected empty block (block-no-empty)',
      },
      {
        column: 45,
        endColumn: 6,
        endLine: 32,
        line: 31,
        rule: 'block-no-empty',
        severity: 'error',
        text: 'Unexpected empty block (block-no-empty)',
      },
      {
        column: 14,
        endColumn: 24,
        endLine: 20,
        line: 20,
        rule: 'color-function-notation',
        severity: 'error',
        text: 'Expected legacy color-function notation (color-function-notation)',
      },
      {
        column: 14,
        endColumn: 21,
        endLine: 28,
        line: 28,
        rule: 'color-hex-length',
        severity: 'error',
        text: 'Expected "#ffffff" to be "#fff" (color-hex-length)',
      },
      {
        column: 17,
        endColumn: 25,
        endLine: 16,
        line: 16,
        rule: 'color-no-invalid-hex',
        severity: 'error',
        text: 'Unexpected invalid hex color "#12345aa" (color-no-invalid-hex)',
      },
      {
        column: 15,
        endColumn: 30,
        endLine: 9,
        line: 9,
        rule: 'font-family-name-quotes',
        severity: 'error',
        text: 'Expected quotes around "Times New Roman" (font-family-name-quotes)',
      },
      {
        column: 18,
        endColumn: 22,
        endLine: 11,
        line: 11,
        rule: 'font-weight-notation',
        severity: 'error',
        text: 'Expected "bold" to be "700" (font-weight-notation)',
      },
      {
        column: 29,
        endColumn: 31,
        endLine: 10,
        line: 10,
        rule: 'hue-degree-notation',
        severity: 'error',
        text: 'Expected "10" to be "10deg" (hue-degree-notation)',
      },
      {
        column: 13,
        endColumn: 27,
        endLine: 41,
        line: 41,
        rule: 'import-notation',
        severity: 'error',
        text: 'Expected "url(\'foo.css\')" to be "\'foo.css\'" (import-notation)',
      },
      {
        column: 7,
        endColumn: 11,
        endLine: 35,
        line: 35,
        rule: 'keyframe-selector-notation',
        severity: 'error',
        text: 'Expected "from" to be "0%" (keyframe-selector-notation)',
      },
      {
        column: 11,
        endColumn: 13,
        endLine: 15,
        line: 15,
        rule: 'length-zero-no-unit',
        severity: 'error',
        text: 'Unexpected unit (length-zero-no-unit)',
      },
      {
        column: 13,
        endColumn: 38,
        endLine: 31,
        line: 31,
        rule: 'media-feature-name-no-vendor-prefix',
        severity: 'error',
        text: 'Unexpected vendor-prefix (media-feature-name-no-vendor-prefix)',
      },
      {
        column: 5,
        endColumn: 27,
        endLine: 41,
        line: 41,
        rule: 'no-invalid-position-at-import-rule',
        severity: 'error',
        text: 'Unexpected invalid position @import rule (no-invalid-position-at-import-rule)',
      },
      {
        column: 5,
        endColumn: 22,
        endLine: 14,
        line: 14,
        rule: 'property-no-vendor-prefix',
        severity: 'error',
        text: 'Unexpected vendor-prefix "-webkit-transform" (property-no-vendor-prefix)',
      },
      {
        column: 10,
        endColumn: 28,
        endLine: 43,
        line: 43,
        rule: 'selector-no-vendor-prefix',
        severity: 'error',
        text: 'Unexpected vendor-prefix "::-moz-placeholder" (selector-no-vendor-prefix)',
      },
      {
        column: 13,
        endColumn: 22,
        endLine: 27,
        line: 27,
        rule: 'selector-not-notation',
        severity: 'error',
        text: 'Expected complex :not() pseudo-class notation (selector-not-notation)',
      },
      {
        column: 6,
        endColumn: 8,
        endLine: 23,
        line: 23,
        rule: 'selector-pseudo-element-colon-notation',
        severity: 'error',
        text: 'Expected single colon pseudo-element notation (selector-pseudo-element-colon-notation)',
      },
      {
        column: 5,
        endColumn: 36,
        endLine: 8,
        line: 8,
        rule: 'shorthand-property-no-redundant-values',
        severity: 'error',
        text: 'Expected "1px 2px 1px 2px" to be "1px 2px" (shorthand-property-no-redundant-values)',
      },
      {
        column: 14,
        endColumn: 26,
        endLine: 13,
        line: 13,
        rule: 'value-no-vendor-prefix',
        severity: 'error',
        text: 'Unexpected vendor-prefix "-webkit-flex" (value-no-vendor-prefix)',
      },
    ]);
  });
});
