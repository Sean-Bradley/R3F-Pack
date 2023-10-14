const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const fs = require("fs");

function getEntry() {
  return fs
    .readdirSync("./src/")
    .filter((file) => file.match(/index\.(js|jsx|tsx)$/));
}

module.exports = {
  mode: 'production',
  performance: {
    hints: false
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
  ],
  output: {
    filename: "[fullhash].bundle.js",
    path: path.resolve(__dirname, "../../../build"),
  },
};