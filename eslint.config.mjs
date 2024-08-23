import feTsRules from '@shelf/eslint-config/frontend-typescript.js';

export default [
  ...feTsRules,
  {files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', '**/*.json']},
  {ignores: ['**/__mocks__']},
];
