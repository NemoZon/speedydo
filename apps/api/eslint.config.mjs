import { config as baseConfig } from "@repo/eslint-config/base";
import globals from "globals";

const tsconfigRootDir = process.cwd();

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...baseConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir,
      },
    },
  },
  {
    ignores: ["dist/**", "eslint.config.mjs"]
  },
];
