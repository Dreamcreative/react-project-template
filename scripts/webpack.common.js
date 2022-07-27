const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')
const { name } = require('./../package.json')
function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}
const webpackConfig = {
  entry: {
    app: resolve('../src/app.tsx')
  },
  output: {
    path: resolve('../dist'),
    filename: '[name][contenthash:5].js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': resolve('../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.less$/,
        use: [
          {
            // creates style nodes from JS strings
            loader: 'style-loader'
          },
          {
            // translates CSS into CommonJS
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: { localIdentName: '[local]__[hash:base64:5]' }
            }
          },
          {
            // compiles Less to CSS
            loader: 'less-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: resolve('../src/public/index.html'), title: name, inject: 'body' }),
    new WebpackBar({
      name: name,
      color: 'yellowgreen',
      profile: true
    })
  ]
}
module.exports = webpackConfig
