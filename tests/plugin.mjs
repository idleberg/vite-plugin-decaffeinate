import { readFile } from 'node:fs/promises';
import { basename, extname } from 'node:path';
import { test } from 'uvu';
import * as assert from 'uvu/assert';

import * as helper from './helpers.mjs';

for (const input of helper.inputs) {
	const baseName = basename(input, extname(input));

	await helper.rollupBuild(helper.fixtures(input))
	.then(() => {
		test(`Rollup compiles ${baseName}`, async () => {
			const actual = await helper.readFileGlob(`rollup--${baseName}-*.js`);
			const expected = await readFile(helper.expected(`rollup--${baseName}.js`), 'utf-8');

			assert.is(actual, expected);
		});
	});

	await helper.viteBuild(helper.fixtures(input))
	.then(() => {
		test(`Vite compiles ${baseName}`, async () => {
			const actual = await helper.readFileGlob(`vite--${baseName}-*.js`);
			const expected = await readFile(helper.expected(`vite--${baseName}.js`), 'utf-8');

			assert.is(actual, expected);
		});
	});
}

test.run();
