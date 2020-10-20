module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "import",
  ],
  extends: [
    "airbnb-typescript",
    "plugin:import/warnings",
    "plugin:import/errors",
  ],
  rules: {
    "camelcase": "off",
    // array constructor off - we use the typescript specific one
    "no-array-constructor": "off",
    // JS general / generic
    "no-empty-function": "off",
    "no-unused-vars": "warn",
    "no-var": "error",
    "prefer-const": "error",
    "no-use-before-define": "off",
    "arrow-parens": ["error", "as-needed", { "requireForBlockBody": true }],
    "no-multiple-empty-lines": "error",
    "prefer-rest-params": "error",
    "no-trailing-spaces": "error",
    "max-len": ["warn", { "code": 840 }],

    // React specific
    "react/prop-types": "off",
    "react/prefer-stateless-function": "off",
    "react/jsx-boolean-value": ["error", "always"],

    "no-warning-comments": ["warn", { "terms": ["todo", "TODO"] }],
    // import specific rules
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    "import/order": ["error", {
      "newlines-between": "always-and-inside-groups",
      "alphabetize": {
        "order": "asc"
      },
    }],

    // Typescript Specific stuff
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/ban-ts-ignore": "error",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/camelcase": "error",
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/interface-name-prefix": "error",
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
  },
};
