module.exports = {
	extends: ['eslint:recommended', 'google'],
	parserOptions: {
		ecmaVersion: 8,
	},
	rules: {
		indent: ['error', 'tab'],
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'comma-dangle': ['error', 'always-multiline'],
		'arrow-parens': ['error', 'always'],
		'require-jsdoc': ['warn'],
	},
	env: {
		es6: true,
	},
};
