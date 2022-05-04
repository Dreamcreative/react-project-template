const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

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
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
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
  plugins: [new HtmlWebpackPlugin({ template: resolve('../src/public/index.html') }), new CleanWebpackPlugin()]
}
module.exports = webpackConfig
