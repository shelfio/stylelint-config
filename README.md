# @shelf/stylelint-config [![CircleCI](https://circleci.com/gh/shelfio/stylelint-config/tree/master.svg?style=svg)](https://circleci.com/gh/shelfio/stylelint-config/tree/master)![](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

> Shelf's reusable stylelint config which covers:
>  - CSS
>  - SCSS
>  - HTML
>  - React inline styles
>  - Styled Components

## Install

```
$ yarn add @shelf/stylelint-config
```

## Usage

```js
{
  extends: '@shelf/stylelint-config'
}
```

## Publish

```sh
$ git checkout master
$ yarn version
$ yarn publish
$ git push origin master --tags
```

## License

MIT © [Shelf](https://shelf.io)
