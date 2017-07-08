# @platoai/eslint-config

> [ESLint](http://eslint.org/) [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the Plato AI style.

## Installation

```
npm install --save-dev eslint @platoai/eslint-config
```

## Usage

Once the `@platoai/eslint-config` package is installed, you can use it by specifying `@platoai` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "@platoai",
  "rules": {
    // Additional, per-project rules...
  }
}
```

## License
[MIT](https://opensource.org/licenses/MIT)
