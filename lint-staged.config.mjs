/**
 * @type {import('lint-staged').Configuration}
 */
const config = {
  "**/*.ts?(x)": (filenames) => [
    "pnpm lint",
    `npx prettier --write ${filenames.join(" ")}`,
    "pnpm type-check",
  ],
};

export default config;
