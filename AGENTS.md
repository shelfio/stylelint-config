# stylelint-config

`@shelf/stylelint-config`: a public, shareable Stylelint config for CSS, SCSS, HTML, and styles in JavaScript and TypeScript files (Styled Components). `index.js` is the whole published package.

## Commands

- `pnpm install` — install dependencies.
- `pnpm test` — lint the fixtures in `__mocks__/` with the config and compare the warnings.
- `pnpm lint` — format with oxfmt and fix lint; CI runs `pnpm lint:ci`.
- `pnpm find-deadcode` — list unused files, exports, and dependencies.

## Rules

- When you change a rule in `index.js`, update the `valid.*` and `invalid.*` fixtures in `__mocks__/` and the expected warnings in `index.test.js`.
- A custom syntax or shared config that `index.js` loads (`postcss-scss`, `postcss-html`, `postcss-styled-syntax`, `stylelint-config-*`) must be in `dependencies`, because projects that use this config resolve it from this package.
- This repository is public: do not put internal links, Jira keys, or internal hostnames in code, commits, or pull requests.

## Shared Skills

- Use `shelf-git-conventions` for branches, commits, and pull requests. The default branch is `master`.
- Use `unit-tests-101` when you write or review unit tests.
