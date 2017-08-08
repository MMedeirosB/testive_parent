var webpack = require('webpack');
var path = require('path');

const HOST = process.env.HOST || 'local.testive.com';
const PORT = process.env.PORT || '3000';

var config = {
  entry: {
    main: [
      'babel-polyfill',
      './src/main.js'
    ]
  },
  resolve: {
    modules: [
      // allows us to import modules as if /src was the root.
      // so I can do: import Comment from 'components/Comment'
      // instead of:  import Comment from '../components/Comment' or whatever relative path would be
      path.resolve(__dirname, './src'),
      'node_modules'
    ],
    // allows you to require without the .js at end of filenames
    // import Component from 'component' vs. import Component from 'component.js'
    extensions: ['*', '.js', '.json', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      }, {
        test: /\.(js|jsx)?$/,
        // don't run node_modules or bower_components through babel loader
        exclude: /(node_modules|bower_components)/,
        // babel is alias for babel-loader
        // npm i babel-core babel-loader --save-dev
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: PORT,
    host: HOST,
    hot: true,
    inline: true
  },
  plugins:[new webpack.HotModuleReplacementPlugin()]
};

module.exports = config;
