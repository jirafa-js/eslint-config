# @jirafa/eslint-config

> Forked from [antfu/eslint-config](https://github.com/antfu/eslint-config)

[![npm](https://img.shields.io/npm/v/@jirafa/eslint-config?color=a1b858&label=)](https://npmjs.com/package/@jirafa/eslint-config)

- Single quotes, no semi
- Auto fix for formatting (aimed to be used standalone without Prettier)
- TypeScript, Vue, React out-of-box
- Lint also for json, yaml, markdown
- Sorted imports, dangling commas for cleaner commit diff
- Reasonable defaults, best practices, only one-line of config

## Usage

### Install

```bash
pnpm i -D @jirafa/eslint-config-basic # JavaScript only
# Or yarn add -D / npm install -D
pnpm i -D @jirafa/eslint-config-ts # JavaScript and TypeScript
pnpm i -D @jirafa/eslint-config-vue # JavaScript, TypeScript and Vue 3
pnpm i -D @jirafa/eslint-config-vue2 # JavaScript, TypeScript and Vue 2

pnpm i -D @jirafa/eslint-config-prettier # Prettier only
pnpm i -D @jirafa/eslint-config # JavaScript, TypeScript, Vue 3 and Prettier
```

### Config

```jsonc
// .eslintrc
{
  "extends": "@jirafa"
}
```

```jsonc
// .prettierrc
{
  "singleQuote": true,
  "semi": true,
  "arrowParens": "avoid",
  "jsxSingleQuote": true,
  "endOfLine": "lf",
  "trailingComma": "es5"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### VSCode

```jsonc
// settings.json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "vue",
    "json",
    "json5",
    "jsonc",
    "yaml"
  ],
  "eslint.probe": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "vue",
    "json",
    "json5",
    "jsonc",
    "yaml"
  ]
}
```

## License

MIT
