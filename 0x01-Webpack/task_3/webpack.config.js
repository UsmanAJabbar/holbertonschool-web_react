const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    header: './modules/header/header.js',
    body: './modules/header/body.js',
    footer: './modules/header/footer.js'
  },
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
  plugins: ["html-webpack-plugin", "clean-webpack-plugin"],
  devTool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    port: 8564,
  },
  chunks: ['all']
}