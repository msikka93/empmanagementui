'use strict'
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const packageJson = require('./package.json')

const plugins = [
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: 'style.css'
  }),

  // define global vars
  new webpack.DefinePlugin(
    {
      __CLIENT__: true,
      __APPVERSION__: JSON.stringify(packageJson.version)
    }
  ),
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  new webpack.optimize.AggressiveMergingPlugin()
]

const optimization = {
  splitChunks: {
    cacheGroups: {
      vendor: {
        chunks: 'initial',
        name: 'vendor',
        test: 'vendor'
      }
    }
  }
}

module.exports = {
  // devtool: 'source-map',
  // create a separte bundle for the modules which do not change very often
  // so that is bundle is cached by the browser
  entry: {
    app: './src/client/index',
    vendor: [
      'react',
      'redux',
      'react-dom',
      'react-router',
      'react-intl'
    ]
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },

      // load styles
      {
        test: /\.less/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader'
          },
          'less-loader'
        ]
      },

      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader'
          },
          'sass-loader']
      },

      // Load images
      { test: /\.jpg/, loader: 'url-loader?limit=10000&mimetype=image/jpg' },
      { test: /\.gif/, loader: 'url-loader?limit=10000&mimetype=image/gif' },
      { test: /\.png/, loader: 'url-loader?limit=10000&mimetype=image/png' },
      { test: /\.svg/, loader: 'url-loader?limit=10000&mimetype=image/svg' },

      // Load fonts
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
      { test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' }
    ]
  },
  plugins: plugins,
  optimization: optimization,
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.css', '.scss']
  }
}
