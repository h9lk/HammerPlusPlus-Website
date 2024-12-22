import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    ignores: ['node_modules', 'build', '*.config.js', '*.config.cjs']
  },
  eslintConfigPrettier
];
