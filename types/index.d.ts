/**
 * @see {@link https://github.com/decaffeinate/decaffeinate#common-options}
 */
type CommonOptions = {
	useCS2?: boolean;
	useJSModules?: boolean;
};

/**
 * @see {@link https://github.com/decaffeinate/decaffeinate#other-options}
 */
type OtherOptions = {
	disableSuggestionComment?: boolean;
	disallowInvalidConstructors?: boolean;
	literate?: boolean;
	logicalAssignment?: boolean;
	loose?: boolean;
	looseComparisonNegation?: boolean;
	looseDefaultParams?: boolean;
	looseForExpressions?: boolean;
	looseForOf?: boolean;
	looseIncludes?: boolean;
	looseJSModules?: boolean;
	noArrayIncludes?: boolean;
	nullishCoalescing?: boolean;
	optionalChaining?: boolean;
	preferLet?: boolean;
	safeImportFunctionIdentifiers?: string[];
};

export type DecaffeinateOptions = CommonOptions & OtherOptions;

export type DecaffeinateTransform = {
	code: string;
};
