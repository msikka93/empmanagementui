'use strict'

// jp(June12, 2018) We use SSR and ES6 in our server side code
// so a webpack build is necessary. Howver, this config does not generate any asset for us,
// assets are generated during client build.

var fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const packageJson = require('./package.json')

const plugins = [
  new webpack.DefinePlugin(
    {
      __CLIENT__: false,
      __APPVERSION__: JSON.stringify(packageJson.version)
    },
    new webpack.IgnorePlugin(/\.(css|less)$/)
  )
]

module.exports = {

  entry: path.resolve(__dirname, 'server.js'),

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'server.bundle.js'
  },
  target: 'node',

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules'))
    .filter(moduleName => moduleName !== 'react-redux-popup' && moduleName !== 'react-redux-snackbar')
    .concat([
      'react-dom/server', 'react/addons'
    ]).reduce(function (ext, mod) {
      ext[mod] = 'commonjs ' + mod
      return ext
    }, {}),

  node: {
    __filename: true,
    __dirname: true
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, './src/client')
        ],
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['@babel/plugin-transform-runtime',
            require('@babel/plugin-proposal-class-properties')]
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['@babel/plugin-transform-runtime',
            require('@babel/plugin-proposal-class-properties')]
        }
      },
      // jp(June12, 2018) do not generate any asset for us, assets are
      // generated during client build
      {
        test: /\.(scss|css)$/,
        loader: 'css-loader/locals'
      },

      // jp(June12, 2018) do not generate any asset for us, assets are
      // generated during client build
      {
        test: /\.(ttf|eot|otf|png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              emitFile: false
            }
          }
        ]
      },

      // jp(June12, 2018) do not generate any asset for us, assets are
      // generated during client build
      {
        test: /\.(woff|woff2|svg)$/,
        loader: 'url-loader?emitFile=false'
      }
    ]
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.css', '.svg']
  }

}
