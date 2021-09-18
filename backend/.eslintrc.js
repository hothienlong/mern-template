module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: ["eslint:recommended",],
	parser: "babel-eslint",
	parserOptions: {
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["prettier"],
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"prettier/prettier": [
			1,
			{
				trailingComma: "es5",
				singleQuote: true,
				semi: true,
				useTabs: true,
			},
		],
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		...require("eslint-config-prettier").rules,
	},
};
