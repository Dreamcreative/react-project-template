const { merge } = require('webpack-merge')
const webpackConfig = {
  mode: 'development',
  devServer: {
    host: 'localhost',
    hot: true,
    port: 8080
  }
}
module.exports = merge(webpackConfig, require('./webpack.common'))
