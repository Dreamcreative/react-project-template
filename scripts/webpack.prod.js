const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const webpackConfig = {
  mode: 'production',
  plugins: [new CleanWebpackPlugin(), new BundleAnalyzerPlugin()]
}
module.exports = merge(webpackConfig, require('./webpack.common'))
