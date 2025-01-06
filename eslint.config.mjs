import eslint from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist';
import unicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config} */
const config = [
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		plugins: {
			unicorn,
			perfectionist,
		},
		rules: {
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/no-explicit-any': 'off',

			 'perfectionist/sort-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
        },
      ],

			'unicorn/filename-case': 'error',
			'unicorn/new-for-builtins': 'error',
			'unicorn/prefer-node-protocol': 'error',
		},
	},
	{
		ignores: [
			'dist/',
			'tests/dist/',
			'tests/expected/',
			'tests/fixtures/',
		],
	},
];

export default config;
