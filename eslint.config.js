import js from '@eslint/js';
import jest from 'eslint-plugin-jest';
import globals from 'globals';

export default [
    js.configs.recommended,
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: { ...globals.node },
        },
    },
    {
        files: ['**/*.test.js'],
        ...jest.configs['flat/recommended'],
        languageOptions: {
            globals: { ...globals.jest },
        },
        rules: {
            ...jest.configs['flat/recommended'].rules,
            'jest/no-disabled-tests': 'warn',
            'jest/no-conditional-expect': 'error',
            'jest/no-identical-title': 'error',
        },
    },
];