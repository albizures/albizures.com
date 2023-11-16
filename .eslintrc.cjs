module.exports = {
	env: {
		node: true,
		es2022: true,
		browser: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:astro/recommended',
		'plugin:import/errors',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['import', '@typescript-eslint'],
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
		},
	],

	rules: {
		'arrow-parens': ['error', 'always'],
		curly: ['error', 'all'],
		indent: 'off',
		'import/no-unresolved': 'off',
		'@typescript-eslint/array-type': [
			'error',
			{ default: 'generic', readonly: 'generic' },
		],
		'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
		'@typescript-eslint/indent': 'off',
	},
};
