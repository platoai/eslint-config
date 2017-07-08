# @platoai/eslint-config
[![npm version](https://badge.fury.io/js/%40platoai%2Feslint-config.svg)](https://badge.fury.io/js/%40platoai%2Feslint-config)

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

### Using the `@platoai` config with `eslint:recommended`

There are several rules in the [`eslint:recommended` ruleset](http://eslint.org/docs/rules/) that Plato AI style is not opinionated about that you might want to enforce in your project.

To use Plato AI style in conjunction with ESLint's recommended rule set, extend them both, making sure to list `@platoai` last:

```js
{
  "extends": ["eslint:recommended", "@platoai"],
  "rules": {
    // Additional, per-project rules...
  }
}
```

To see how the `@platoai` config compares with `eslint:recommended`, refer to the [source code of `index.js`](index.js), which lists every ESLint rule along with whether (and how) it is enforced by the `@platoai` config.


## License

Apache-2 © Google
