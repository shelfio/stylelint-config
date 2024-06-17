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
    expect(result.results[0].warnings).toHaveLength(66);
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
    expect(result.results[0].warnings).toHaveLength(30);
  });

  it('should pass valid html', async () => {
    const result = await stylelint.lint({
      files: './__mocks__/valid.html',
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
    expect(result.results[0].warnings).toHaveLength(75);
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
    expect(result.results[0].warnings).toHaveLength(37);
  });
});
