import { glob } from 'glob';
import { readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'vite'

import decaffeinate from '../dist/index.js'

const __dirname = dirname(fileURLToPath(import.meta.url));

export const fixtures = glob => join(__dirname, 'fixtures', glob);
export const expected = glob => join(__dirname, 'expected', glob);

export const inputs = [
	'examples.coffee',
	'js-entrypoint.js',
	'ts-entrypoint.ts',
];

/**
 * Reads a file by glob pattern
 * @param filePath
 * @returns
 */
export async function readFileGlob(filePath) {
	const fileDir = resolve(__dirname, 'dist/assets');
	const matches = await glob(filePath, {
		cwd: resolve(__dirname, 'dist/assets'),
	});

	if (matches.length === 0) {
		throw new Error(`File not found: ${filePath}`);
	}

	return readFile(resolve(fileDir, matches[0]), 'utf-8');
}

/**
 * Helper function for Vite build
 * @param input
 * @returns
 */
export async function viteBuild(input) {
	await build({
		build: {
			emptyOutDir: false,
			rollupOptions: {
				input: resolve(__dirname, input),
				output: {
					dir: resolve(__dirname, 'dist/assets'),
					entryFileNames: 'vite--[name]-[hash].js',
				},
				treeshake: false,
			},
			minify: false,
		},
		logLevel: 'silent',
		plugins: [
			decaffeinate(),
		],
	});
}
