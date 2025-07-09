import tseslint from 'typescript-eslint'
import eslint from '@eslint/js'

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            semi: ['error', 'never'],
            indent: ['error', 4],
            quotes: ['error', 'single'],
            'comma-dangle': ['error', 'always-multiline'],
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
        },
    },
)
