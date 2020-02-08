module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            modules: true,
            experimentalObjectRestSpread: true,
        },
    },
    // plugins: ["react", "prettier"],
    rules: {
        'prettier/prettier': 'error',
        // 'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        '@typescript-eslint/interface-name-prefix': [
            'error',
            {
                prefixWithI: 'always',
            },
        ],
        'react/prop-types': 0,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
