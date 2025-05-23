import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/typescript"),
  {
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
  {
    ignores: ["**/*.stories.tsx"],
  },
];

export default eslintConfig;
