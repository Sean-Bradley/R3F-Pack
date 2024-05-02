const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const fs = require('fs')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const InterpolateHtmlPlugin = require('@gozenc/interpolate-html-plugin')
const Dotenv = require('dotenv-webpack')

function getEntry() {
  return fs.readdirSync('./src/').filter((file) => file.match(/index\.(js|jsx|tsx)$/))
}

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, '../../../public')
    },
    hot: true,
    open: true,
    port: process.env.WDS_SOCKET_PORT || 3000,
    allowedHosts: 'all',
    historyApiFallback: true
  },
  output: {
    publicPath: '/'
  },
  entry: './src/' + getEntry(),
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        },
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript'
            ],
            plugins: [require.resolve('react-refresh/babel')]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|jpg|jpeg|gif|svg|ico|glb|gltf|obj|mtl|fbx|stl|ply)$/i,
        type: 'asset/inline'
      },
      {
        test: /\.json$/,
        type: 'json'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../../public/index.html')
    }),
    new ReactRefreshWebpackPlugin({ overlay: false }),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
      PUBLIC_URL: ''
    }),
    new Dotenv({ silent: true })
  ]
}
