var path = require('path');
var polyfill = require('babel-polyfill');
var webpack = require('webpack');

module.exports = {
  context: __dirname,

  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      'babel-polyfill',
      './src/js/index'
    ]
  },

  module: {
    loaders: [{
      test: /\.(ttf|eot|otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    },{
      test: /\.css$/,
      loader: 'style!css!autoprefixer?browsers=last 10 versions'
    },{
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=464600&minetype=application/font-woff'
    },{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }]
  },

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['.js', '.jsx']
  }
};
