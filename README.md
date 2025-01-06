# rollup-plugin-decaffeinate

> A Rollup/Vite plugin for your CoffeeScript projects

[![License](https://img.shields.io/github/license/idleberg/rollup-plugin-decaffeinate?color=blue&style=for-the-badge)](https://github.com/idleberg/rollup-plugin-decaffeinate/blob/main/LICENSE)
[![Version](https://img.shields.io/npm/v/rollup-plugin-decaffeinate?style=for-the-badge)](https://www.npmjs.org/package/rollup-plugin-decaffeinate)
[![Build](https://img.shields.io/github/actions/workflow/status/idleberg/rollup-plugin-decaffeinate/tests.yml?style=for-the-badge)](https://github.com/idleberg/rollup-plugin-decaffeinate/actions)

## Installation

`npm install -D rollup-plugin-decaffeinate`

## Usage

<details>
<summary><strong>Rollup</strong></summary>

```js
import { defineConfig } from 'vite';
import decaffeinate from 'rollup-plugin-decaffeinate';

export default {
    input: 'main.coffee',
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
};
```

</details>

<details>
<summary><strong>Vite</strong></summary>

### Vite

```js
import { defineConfig } from 'vite';
import decaffeinate from 'rollup-plugin-decaffeinate';

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

</details>

### Options

Please refer to the [Decaffeinate documentation](https://github.com/decaffeinate/decaffeinate) for available options.

## License

This work is licensed under [The MIT License](LICENSE).
