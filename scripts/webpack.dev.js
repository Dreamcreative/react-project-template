const { merge } = require('webpack-merge')
const webpackConfig = {
  mode: 'development'
}
module.exports = merge(webpackConfig, require('./webpack.common'))
