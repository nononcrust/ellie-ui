/**
 * @type {import('lint-staged').Configuration}
 */
const config = {
  "**/*.ts?(x)": (filenames) => [
    `npx eslint --fix --max-warnings=0 ${filenames.join(" ")}`,
    `npx prettier --write ${filenames.join(" ")}`,
    "npx tsc -p tsconfig.app.json --noEmit",
  ],
};

export default config;
