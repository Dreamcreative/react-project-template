const { merge } = require('webpack-merge')
const webpack = require('webpack')
const webpackConfig = {
  mode: 'development',
  devServer: {
    host: 'localhost',
    hot: true,
    port: 8080
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}
module.exports = merge(webpackConfig, require('./webpack.common'))
