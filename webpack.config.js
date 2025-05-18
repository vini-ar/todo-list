const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const entry = {
  inbox: "./src/pages/inbox.js",
  projects: "./src/pages/projects.js",
};

module.exports = {
  entry,
  mode: "development",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    chunkFilename: "[name].[contenthash].chunk.js",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    watchFiles: ["./src/templates/**/*.html"],
    historyApiFallback: {
      rewrites: [{ from: /^\/$/, to: "/inbox.html" }],
    },
    open: "/inbox.html",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/templates/inbox.html',
      filename: 'inbox.html',
      chunks: ['runtime', 'vendor', 'inbox'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/templates/projects.html',
      filename: 'projects.html',
      chunks: ['runtime', 'vendor', 'projects'],
    }),
  ],
  optimization: {
    usedExports: true,
    runtimeChunk: {
      name: "runtime",
    },
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
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
