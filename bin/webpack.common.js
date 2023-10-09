const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    entry: './src/index.jsx',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                resolve: {
                    extensions: ['.js', '.jsx'],
                },
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                          '@babel/preset-env',
                          ['@babel/preset-react', 
                          { "runtime": "automatic" }]
                        ]
                      }
                },
            },
            {
                test: /\.(sa|sc|c)ss$/, 
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/inline',
            },
        ],
    },
    plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../../../public/index.html'),
		})
	],
    output: {
        filename: '[hash].bundle.js',
        path: path.resolve(__dirname, '../../../build'),
    },
}

