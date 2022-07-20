const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const webpackConfig = {
  mode: 'production',
  plugins: [new CleanWebpackPlugin()]
}
module.exports = merge(webpackConfig, require('./webpack.common'))
