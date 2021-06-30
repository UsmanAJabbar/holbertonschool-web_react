const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist/',
    port: 8564,
    hot: true,
  },
  plugins: [ new HtmlWebpackPlugin() ],
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
            }],
  },
  devtool: 'inline-source-map'
}