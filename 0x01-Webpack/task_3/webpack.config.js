const path = require('path');

module.exports = {
  mode: 'development',
  entry: './modules/header/header.js',
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [{
              test: /\.css$/,
              use: ['style-loader','css-loader']
            },
            {
              test: /\.(png|jp(e*)g|svg)$/,
              use: ['file-loader', 'image-webpack-loader']
           }]
  },
  devTool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    port: 8564,
  }
}