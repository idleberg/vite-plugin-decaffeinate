import { type ConversionResult, convert } from 'decaffeinate';

import type { DecaffeinateOptions, DecaffeinateTransform } from '../types';

export default function Plugin(
	options: DecaffeinateOptions = {
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
	},
) {
	return {
		name: 'decaffeinate',
		transform(src: string, id: string): DecaffeinateTransform {
			if (!/\.(coffee|cson)$/.test(id)) {
				return;
			}

			const result: ConversionResult = convert(src, {
				...options,
				filename: id,
			});

			return {
				code: result.code,
			};
		},
	};
}
