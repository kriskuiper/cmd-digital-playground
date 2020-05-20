const commonjs = require('@rollup/plugin-commonjs')
const resolve = require('@rollup/plugin-node-resolve')
const { terser } = require('rollup-plugin-terser')

const production = !process.env.ROLLUP_WATCH

module.exports = {
  input: 'src/assets/js/app.js',
  output: {
    file: '_site/scripts/bundle.js',
    format: 'iife'
  },
  plugins: [
    commonjs(),
    resolve(),

    // Only minify & uglify in production
    production && terser()
  ]
}
