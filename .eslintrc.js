module.exports = {
  rules: {
    "quotes": "single",
    "semi": false,
    "space-before-function-paren": ["error", "never"],
    "prefer-object-spread": true,
    "no-trailing-whitespaces": true,
    "eqeqeq": true,
    "no-alert": true,
    "vars-on-top": ["warning", "always"],
    "no-unused-vars": true,
    "lines-around-comment": ["error", {
      beforeBlockComment: true,
      afterBlockComment: false,
      beforeLineComment: true,
      afterLineComment: false
    }]
  }
}
