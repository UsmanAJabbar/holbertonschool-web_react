const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: '../dist/',
    port: 8564,
    hot: true,
  },
  plugins: [ new HtmlWebpackPlugin({template: './dist/index.html'}) ],
  module: {
    rules: [{
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
            {
              test: /\.(gif|png|jpe?g|svg)$/i,
              use: ['file-loader', {
                                      loader: 'image-webpack-loader',
                                      options: { bypassOnDebug: true,
                                                 disable: true },
                                   }
                 ]
            },
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: { loader: 'babel-loader', options: { presets: [
                                                          ['@babel/preset-env', { targets: "defaults" }],
                                                          ['@babel/preset-react', { targets: "defaults" }] ]
                                                      }
              }
            }],
  },
  devtool: 'inline-source-map',
}