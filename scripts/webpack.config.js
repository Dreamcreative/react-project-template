const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}
const webpackConfig = {
  mode: 'production',
  entry: {
    app: [resolve('../src/app.tsx')]
  },
  output: {
    path: resolve('../dist'),
    filename: '[name][hash:5].js'
  },
  plugins: [new HtmlWebpackPlugin({ template: resolve('./public/index.html') })]
}
module.exports = webpackConfig
