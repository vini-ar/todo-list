// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    inbox: "./src/pages/inbox.js",
    projects: "./src/pages/projects.js" 
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/templates/**/*.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "inbox.html",
      template: "./src/templates/inbox.html",
      chunks: ['inbox']
    }),
    new HtmlWebpackPlugin({
      filename: 'projects.html',
      template: "./src/templates/projects.html",
      chunks: ['projects']
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/templates/index.html',
      chunks: [],
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
