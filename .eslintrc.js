module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'keyword-spacing': ['error', {
      after: true,
      overrides: {
        'catch': { after: false },
        'if': { after: false },
        'switch': { after: false }
      }
    }],
    'linebreak-style': ["error", "unix"],
    'no-unused-vars': "warn",
    'semi': ['error', 'always'],
    'space-before-function-paren': [
      2,
      {
        anonymous: 'never',
        named: 'never'
      }
    ],
    'vue/html-self-closing': ['error', { html: { component: 'never', normal: "never" } }],
    'vue/max-attributes-per-line': ['warn', { singleline: 3 }],
    'vue/singleline-html-element-content-newline': 0
  }
}
