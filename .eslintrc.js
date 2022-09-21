module.exports = {
  root: true,
  env: {
    browser: false,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
  },
  overrides: [
    {
      files: ["./src/**/*"],
      env: {
        browser: true,
        node: false,
      },
    },
  ],
};
