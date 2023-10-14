const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const fs = require("fs");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

function getEntry() {
  return fs
    .readdirSync("./src/")
    .filter((file) => file.match(/index\.(js|jsx|tsx)$/));
}

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "../../../public"),
    },
    hot: true,
    open: true,
    port: 3000,
    allowedHosts: "all",
  },
  entry: "./src/" + getEntry(),
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx", ".tsx"],
        },
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
              "@babel/preset-typescript",
            ],
            plugins: [require.resolve('react-refresh/babel')]
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/inline",
      },
    ],
  },
  plugins: [       
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../../../public/index.html"),
    }),
    new ReactRefreshWebpackPlugin({overlay: false})
  ]
};
