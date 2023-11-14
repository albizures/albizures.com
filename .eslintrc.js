module.exports = {
	env: {
		node: true,
		es2022: true,
		browser: true,
	},
	extends: ["eslint:recommended", "plugin:astro/recommended"],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},

	overrides: [
		{
			files: ["*.astro"],
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"],
			},
			rules: {},
		},
		{
			files: ["*.ts", "*.tsx"],
			parser: "@typescript-eslint/parser",
			plugins: ["@typescript-eslint"],
			rules: {
				"@typescript-eslint/array-type": [
					"error",
					{ default: "generic", readonly: "generic" },
				],
				"@typescript-eslint/consistent-type-definitions": ["error", "type"],
				"@typescript-eslint/indent": "off",
			},
		},
	],

	rules: {
		"arrow-parens": ["error", "always"],
		curly: ["error", "all"],
		indent: "off",
	},
};
