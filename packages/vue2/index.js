module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
  extends: ['plugin:vue/recommended', '@jirafa/eslint-config-ts'],
  rules: {
    'vue/max-attributes-per-line': ['error', { singleline: 3 }],
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
  },
}
