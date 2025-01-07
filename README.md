# vite-plugin-decaffeinate

> A Vite plugin for your CoffeeScript projects

[![License](https://img.shields.io/github/license/idleberg/vite-plugin-decaffeinate?color=blue&style=for-the-badge)](https://github.com/idleberg/vite-plugin-decaffeinate/blob/main/LICENSE)
[![Version](https://img.shields.io/npm/v/vite-plugin-decaffeinate?style=for-the-badge)](https://www.npmjs.org/package/vite-plugin-decaffeinate)
[![Build](https://img.shields.io/github/actions/workflow/status/idleberg/vite-plugin-decaffeinate/tests.yml?style=for-the-badge)](https://github.com/idleberg/vite-plugin-decaffeinate/actions)

## Installation

`npm install -D vite-plugin-decaffeinate`

## Usage

```js
import { defineConfig } from 'vite';
import decaffeinate from 'vite-plugin-decaffeinate';

export default defineConfig({
    plugins: [
        decaffeinate({
            // the following are the default values
            disableSuggestionComment: false,
            disallowInvalidConstructors: false,
            literate: false,
            logicalAssignment: false,
            loose: false,
            looseComparisonNegation: false,
            looseDefaultParams: false,
            looseForExpressions: false,
            looseForOf: false,
            looseIncludes: false,
            looseJSModules: false,
            noArrayIncludes: false,
            nullishCoalescing: false,
            optionalChaining: false,
            preferLet: false,
            safeImportFunctionIdentifiers: [],
            useCS2: false,
            useJSModules: false,
        })
    ]
});
```

### Options

Please refer to the [Decaffeinate documentation](https://github.com/decaffeinate/decaffeinate) for available options.

## License

This work is licensed under [The MIT License](LICENSE).
