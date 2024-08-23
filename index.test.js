import stylelint from 'stylelint';
import config from './index';

function getWarnings(result) {
  return result.results[0].warnings.map(({rule, text}) => ({rule, text}));
}

describe('stylelint-config', () => {
  it('should fail invalid css', async () => {
    const result = await stylelint.lint({
      files: './__mocks__/invalid.css',
      config,
    });

    expect(result.errored).toBeTruthy();
    expect(getWarnings(result)).toEqual([
      {
        rule: 'alpha-value-notation',
        text: 'Expected "50%" to be "0.5" (alpha-value-notation)',
      },
      {
        rule: 'color-hex-alpha',
        text: 'Unexpected alpha channel in "#ff000080" (color-hex-alpha)',
      },
      {
        rule: 'color-named',
        text: 'Unexpected named color "red" (color-named)',
      },
      {
        rule: 'color-named',
        text: 'Unexpected named color "blue" (color-named)',
      },
      {
        rule: 'color-named',
        text: 'Unexpected named color "green" (color-named)',
      },
      {
        rule: 'color-named',
        text: 'Unexpected named color "yellow" (color-named)',
      },
      {
        rule: 'color-named',
        text: 'Unexpected named color "purple" (color-named)',
      },
      {
        rule: 'color-named',
        text: 'Unexpected named color "orange" (color-named)',
      },
      {
        rule: 'color-named',
        text: 'Unexpected named color "brown" (color-named)',
      },
      {
        rule: 'color-named',
        text: 'Unexpected named color "pink" (color-named)',
      },
      {
        rule: 'color-named',
        text: 'Unexpected named color "red" (color-named)',
      },
      {
        rule: 'color-no-invalid-hex',
        text: 'Unexpected invalid hex color "#zzzzzz" (color-no-invalid-hex)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'font-weight-notation',
        text: 'Expected "bold" to be "700" (font-weight-notation)',
      },
      {
        rule: 'import-notation',
        text: 'Expected "url("styles.css")" to be ""styles.css"" (import-notation)',
      },
      {
        rule: 'no-invalid-position-at-import-rule',
        text: 'Unexpected invalid position @import rule (no-invalid-position-at-import-rule)',
      },
      {
        rule: 'property-no-unknown',
        text: 'Unexpected unknown property "foo-bar" (property-no-unknown)',
      },
      {
        rule: 'selector-max-attribute',
        text: 'Expected ".max-attribute[class][data-attr][type][role]" to have no more than 3 attribute selectors (selector-max-attribute)',
      },
      {
        rule: 'selector-max-combinators',
        text: 'Expected ".nesting-4" to have no more than 2 combinators (selector-max-combinators)',
      },
      {
        rule: 'selector-max-combinators',
        text: 'Expected ".combinators-1 > .combinators-2 + .combinators-3 ~ .combinators-4" to have no more than 2 combinators (selector-max-combinators)',
      },
      {
        rule: 'selector-max-combinators',
        text: 'Expected "div span p ul" to have no more than 2 combinators (selector-max-combinators)',
      },
      {
        rule: 'selector-max-compound-selectors',
        text: 'Expected ".nesting-4" to have no more than 3 compound selectors (selector-max-compound-selectors)',
      },
      {
        rule: 'selector-max-compound-selectors',
        text: 'Expected ".combinators-1 > .combinators-2 + .combinators-3 ~ .combinators-4" to have no more than 3 compound selectors (selector-max-compound-selectors)',
      },
      {
        rule: 'selector-max-compound-selectors',
        text: 'Expected "div span p ul" to have no more than 3 compound selectors (selector-max-compound-selectors)',
      },
      {
        rule: 'selector-max-id',
        text: 'Expected "#id1 #id2" to have no more than 1 ID selector (selector-max-id)',
      },
      {
        rule: 'selector-max-pseudo-class',
        text: 'Expected ".pseudo-class:hover:focus:active:checked" to have no more than 3 pseudo-classes (selector-max-pseudo-class)',
      },
      {
        rule: 'selector-max-type',
        text: 'Expected "div span p ul" to have no more than 3 type selectors (selector-max-type)',
      },
      {
        rule: 'selector-max-universal',
        text: 'Expected "* *" to have no more than 1 universal selector (selector-max-universal)',
      },
      {
        rule: 'selector-pseudo-element-colon-notation',
        text: 'Expected single colon pseudo-element notation (selector-pseudo-element-colon-notation)',
      },
    ]);
  });

  it('should fail invalid scss', async () => {
    const result = await stylelint.lint({
      files: './__mocks__/invalid.scss',
      config,
    });

    expect(result.errored).toBeTruthy();
    expect(getWarnings(result)).toEqual([
      {rule: 'alpha-value-notation', text: 'Expected "50%" to be "0.5" (alpha-value-notation)'},
      {rule: 'color-hex-alpha', text: 'Unexpected alpha channel in "#ff000080" (color-hex-alpha)'},
      {rule: 'color-named', text: 'Unexpected named color "red" (color-named)'},
      {rule: 'color-named', text: 'Unexpected named color "blue" (color-named)'},
      {rule: 'color-named', text: 'Unexpected named color "green" (color-named)'},
      {rule: 'color-named', text: 'Unexpected named color "yellow" (color-named)'},
      {rule: 'color-named', text: 'Unexpected named color "purple" (color-named)'},
      {rule: 'color-named', text: 'Unexpected named color "orange" (color-named)'},
      {rule: 'color-named', text: 'Unexpected named color "brown" (color-named)'},
      {rule: 'color-named', text: 'Unexpected named color "pink" (color-named)'},
      {rule: 'color-named', text: 'Unexpected named color "red" (color-named)'},
      {
        rule: 'color-no-invalid-hex',
        text: 'Unexpected invalid hex color "#zzzzzz" (color-no-invalid-hex)',
      },
      {rule: 'font-weight-notation', text: 'Expected "bold" to be "700" (font-weight-notation)'},
      {
        rule: 'import-notation',
        text: 'Expected "url("styles.css")" to be ""styles.css"" (import-notation)',
      },
      {
        rule: 'no-invalid-position-at-import-rule',
        text: 'Unexpected invalid position @import rule (no-invalid-position-at-import-rule)',
      },
      {
        rule: 'property-no-unknown',
        text: 'Unexpected unknown property "foo-bar" (property-no-unknown)',
      },
      {
        rule: 'selector-max-attribute',
        text: 'Expected ".max-attribute[class][data-attr][type][role]" to have no more than 3 attribute selectors (selector-max-attribute)',
      },
      {
        rule: 'selector-max-combinators',
        text: 'Expected ".nesting-4" to have no more than 2 combinators (selector-max-combinators)',
      },
      {
        rule: 'selector-max-combinators',
        text: 'Expected ".combinators-1 > .combinators-2 + .combinators-3 ~ .combinators-4" to have no more than 2 combinators (selector-max-combinators)',
      },
      {
        rule: 'selector-max-combinators',
        text: 'Expected "div span p ul" to have no more than 2 combinators (selector-max-combinators)',
      },
      {
        rule: 'selector-max-compound-selectors',
        text: 'Expected ".nesting-4" to have no more than 3 compound selectors (selector-max-compound-selectors)',
      },
      {
        rule: 'selector-max-compound-selectors',
        text: 'Expected ".combinators-1 > .combinators-2 + .combinators-3 ~ .combinators-4" to have no more than 3 compound selectors (selector-max-compound-selectors)',
      },
      {
        rule: 'selector-max-compound-selectors',
        text: 'Expected "div span p ul" to have no more than 3 compound selectors (selector-max-compound-selectors)',
      },
      {
        rule: 'selector-max-id',
        text: 'Expected "#id1 #id2" to have no more than 1 ID selector (selector-max-id)',
      },
      {
        rule: 'selector-max-pseudo-class',
        text: 'Expected ".pseudo-class:hover:focus:active:checked" to have no more than 3 pseudo-classes (selector-max-pseudo-class)',
      },
      {
        rule: 'selector-max-type',
        text: 'Expected "div span p ul" to have no more than 3 type selectors (selector-max-type)',
      },
      {
        rule: 'selector-max-universal',
        text: 'Expected "* *" to have no more than 1 universal selector (selector-max-universal)',
      },
      {
        rule: 'selector-pseudo-element-colon-notation',
        text: 'Expected single colon pseudo-element notation (selector-pseudo-element-colon-notation)',
      },
    ]);
  });

  it.each`
    format    | file
    ${'css'}  | ${'./__mocks__/valid.css'}
    ${'scss'} | ${'./__mocks__/valid.scss'}
    ${'html'} | ${'./__mocks__/valid.html'}
    ${'js'}   | ${'./__mocks__/valid.styled.js'}
  `('should pass valid $format', async ({file}) => {
    const result = await stylelint.lint({
      files: file,
      config,
    });

    expect(result.errored).toBeFalsy();
  });

  it('should fail invalid html', async () => {
    const result = await stylelint.lint({
      files: './__mocks__/invalid.html',
      config,
    });

    expect(result.errored).toBeTruthy();
    expect(getWarnings(result)).toEqual([
      {
        rule: 'alpha-value-notation',
        text: 'Expected "50%" to be "0.5" (alpha-value-notation)',
      },
      {
        rule: 'alpha-value-notation',
        text: 'Expected "15%" to be "0.15" (alpha-value-notation)',
      },
      {
        rule: 'alpha-value-notation',
        text: 'Expected "50%" to be "0.5" (alpha-value-notation)',
      },
      {
        rule: 'color-hex-alpha',
        text: 'Unexpected alpha channel in "#ff000080" (color-hex-alpha)',
      },
      {
        rule: 'color-named',
        text: 'Unexpected named color "red" (color-named)',
      },
      {
        rule: 'color-named',
        text: 'Unexpected named color "blue" (color-named)',
      },
      {
        rule: 'color-named',
        text: 'Unexpected named color "green" (color-named)',
      },
      {
        rule: 'color-named',
        text: 'Unexpected named color "yellow" (color-named)',
      },
      {
        rule: 'color-named',
        text: 'Unexpected named color "purple" (color-named)',
      },
      {
        rule: 'color-named',
        text: 'Unexpected named color "orange" (color-named)',
      },
      {
        rule: 'color-named',
        text: 'Unexpected named color "brown" (color-named)',
      },
      {
        rule: 'color-named',
        text: 'Unexpected named color "pink" (color-named)',
      },
      {
        rule: 'color-named',
        text: 'Unexpected named color "red" (color-named)',
      },
      {
        rule: 'color-no-invalid-hex',
        text: 'Unexpected invalid hex color "#zzzzzz" (color-no-invalid-hex)',
      },
      {
        rule: 'color-no-invalid-hex',
        text: 'Unexpected invalid hex color "#12345aa" (color-no-invalid-hex)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'font-family-name-quotes',
        text: 'Expected quotes around "Times New Roman" (font-family-name-quotes)',
      },
      {
        rule: 'font-weight-notation',
        text: 'Expected "bold" to be "700" (font-weight-notation)',
      },
      {
        rule: 'font-weight-notation',
        text: 'Expected "bold" to be "700" (font-weight-notation)',
      },
      {
        rule: 'hue-degree-notation',
        text: 'Expected "10" to be "10deg" (hue-degree-notation)',
      },
      {
        rule: 'import-notation',
        text: 'Expected "url("styles.css")" to be ""styles.css"" (import-notation)',
      },
      {
        rule: 'length-zero-no-unit',
        text: 'Unexpected unit (length-zero-no-unit)',
      },
      {
        rule: 'no-invalid-position-at-import-rule',
        text: 'Unexpected invalid position @import rule (no-invalid-position-at-import-rule)',
      },
      {
        rule: 'property-no-unknown',
        text: 'Unexpected unknown property "foo-bar" (property-no-unknown)',
      },
      {
        rule: 'property-no-vendor-prefix',
        text: 'Unexpected vendor-prefix "-webkit-transform" (property-no-vendor-prefix)',
      },
      {
        rule: 'selector-max-attribute',
        text: 'Expected ".max-attribute[class][data-attr][type][role]" to have no more than 3 attribute selectors (selector-max-attribute)',
      },
      {
        rule: 'selector-max-combinators',
        text: 'Expected ".nesting-4" to have no more than 2 combinators (selector-max-combinators)',
      },
      {
        rule: 'selector-max-combinators',
        text: 'Expected ".combinators-1 > .combinators-2 + .combinators-3 ~ .combinators-4" to have no more than 2 combinators (selector-max-combinators)',
      },
      {
        rule: 'selector-max-combinators',
        text: 'Expected "div span p ul" to have no more than 2 combinators (selector-max-combinators)',
      },
      {
        rule: 'selector-max-compound-selectors',
        text: 'Expected ".nesting-4" to have no more than 3 compound selectors (selector-max-compound-selectors)',
      },
      {
        rule: 'selector-max-compound-selectors',
        text: 'Expected ".combinators-1 > .combinators-2 + .combinators-3 ~ .combinators-4" to have no more than 3 compound selectors (selector-max-compound-selectors)',
      },
      {
        rule: 'selector-max-compound-selectors',
        text: 'Expected "div span p ul" to have no more than 3 compound selectors (selector-max-compound-selectors)',
      },
      {
        rule: 'selector-max-id',
        text: 'Expected "#id1 #id2" to have no more than 1 ID selector (selector-max-id)',
      },
      {
        rule: 'selector-max-pseudo-class',
        text: 'Expected ".pseudo-class:hover:focus:active:checked" to have no more than 3 pseudo-classes (selector-max-pseudo-class)',
      },
      {
        rule: 'selector-max-type',
        text: 'Expected "div span p ul" to have no more than 3 type selectors (selector-max-type)',
      },
      {
        rule: 'selector-max-universal',
        text: 'Expected "* *" to have no more than 1 universal selector (selector-max-universal)',
      },
      {
        rule: 'selector-pseudo-element-colon-notation',
        text: 'Expected single colon pseudo-element notation (selector-pseudo-element-colon-notation)',
      },
      {
        rule: 'shorthand-property-no-redundant-values',
        text: 'Expected "1px 2px 1px 2px" to be "1px 2px" (shorthand-property-no-redundant-values)',
      },
      {
        rule: 'value-no-vendor-prefix',
        text: 'Unexpected vendor-prefix "-webkit-flex" (value-no-vendor-prefix)',
      },
    ]);
  });

  it('should fail invalid js', async () => {
    const result = await stylelint.lint({
      files: './__mocks__/invalid.styled.js',
      config,
    });

    expect(result.errored).toBeTruthy();
    expect(getWarnings(result)).toEqual([
      {
        rule: 'alpha-value-notation',
        text: 'Expected "50%" to be "0.5" (alpha-value-notation)',
      },
      {
        rule: 'color-hex-alpha',
        text: 'Unexpected alpha channel in "#ff000080" (color-hex-alpha)',
      },
      {
        rule: 'color-named',
        text: 'Unexpected named color "red" (color-named)',
      },
      {
        rule: 'color-named',
        text: 'Unexpected named color "blue" (color-named)',
      },
      {
        rule: 'color-named',
        text: 'Unexpected named color "green" (color-named)',
      },
      {
        rule: 'color-named',
        text: 'Unexpected named color "yellow" (color-named)',
      },
      {
        rule: 'color-named',
        text: 'Unexpected named color "purple" (color-named)',
      },
      {
        rule: 'color-named',
        text: 'Unexpected named color "orange" (color-named)',
      },
      {
        rule: 'color-named',
        text: 'Unexpected named color "brown" (color-named)',
      },
      {
        rule: 'color-named',
        text: 'Unexpected named color "pink" (color-named)',
      },
      {
        rule: 'color-named',
        text: 'Unexpected named color "red" (color-named)',
      },
      {
        rule: 'color-no-invalid-hex',
        text: 'Unexpected invalid hex color "#zzzzzz" (color-no-invalid-hex)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace after "/*" (comment-whitespace-inside)',
      },
      {
        rule: 'comment-whitespace-inside',
        text: 'Expected whitespace before "*/" (comment-whitespace-inside)',
      },
      {
        rule: 'font-weight-notation',
        text: 'Expected "bold" to be "700" (font-weight-notation)',
      },
      {
        rule: 'import-notation',
        text: 'Expected "url("styles.css")" to be ""styles.css"" (import-notation)',
      },
      {
        rule: 'property-no-unknown',
        text: 'Unexpected unknown property "foo-bar" (property-no-unknown)',
      },
      {
        rule: 'selector-max-attribute',
        text: 'Expected ".max-attribute[class][data-attr][type][role]" to have no more than 3 attribute selectors (selector-max-attribute)',
      },
      {
        rule: 'selector-max-combinators',
        text: 'Expected ".nesting-4" to have no more than 2 combinators (selector-max-combinators)',
      },
      {
        rule: 'selector-max-combinators',
        text: 'Expected ".combinators-1 > .combinators-2 + .combinators-3 ~ .combinators-4" to have no more than 2 combinators (selector-max-combinators)',
      },
      {
        rule: 'selector-max-combinators',
        text: 'Expected "div span p ul" to have no more than 2 combinators (selector-max-combinators)',
      },
      {
        rule: 'selector-max-compound-selectors',
        text: 'Expected ".nesting-4" to have no more than 3 compound selectors (selector-max-compound-selectors)',
      },
      {
        rule: 'selector-max-compound-selectors',
        text: 'Expected ".combinators-1 > .combinators-2 + .combinators-3 ~ .combinators-4" to have no more than 3 compound selectors (selector-max-compound-selectors)',
      },
      {
        rule: 'selector-max-compound-selectors',
        text: 'Expected "div span p ul" to have no more than 3 compound selectors (selector-max-compound-selectors)',
      },
      {
        rule: 'selector-max-id',
        text: 'Expected "#id1 #id2" to have no more than 1 ID selector (selector-max-id)',
      },
      {
        rule: 'selector-max-pseudo-class',
        text: 'Expected ".pseudo-class:hover:focus:active:checked" to have no more than 3 pseudo-classes (selector-max-pseudo-class)',
      },
      {
        rule: 'selector-max-type',
        text: 'Expected "div span p ul" to have no more than 3 type selectors (selector-max-type)',
      },
      {
        rule: 'selector-max-universal',
        text: 'Expected "* *" to have no more than 1 universal selector (selector-max-universal)',
      },
      {
        rule: 'selector-pseudo-element-colon-notation',
        text: 'Expected single colon pseudo-element notation (selector-pseudo-element-colon-notation)',
      },
    ]);
  });
});
