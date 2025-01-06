import { defineConfig } from 'tsup';

export default defineConfig((options) => {
	const isProduction = options.watch !== true;

	return {
		target: 'node18',
		clean: isProduction,
		dts: isProduction,
		entry: ['src/index.ts'],
		format: ['cjs'],
		minify: isProduction,
		treeshake: 'recommended',
	};
});
