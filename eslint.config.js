import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
  { files: ["**/*.js"] },
  {
    rules: {
      indent: ["error", 2],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "semi-spacing": ["error", { before: false, after: true }],
      "semi-style": ["error", "last"],
      "no-extra-semi": "error",
      "no-unexpected-multiline": "error",
    },
  },
];
