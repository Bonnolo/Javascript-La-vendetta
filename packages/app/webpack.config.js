const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/app.js',
    output: {
        path: `${__dirname}/dist`,
        publicPath: 'dist/',
        filename: '[name].[contenthash].js'
    },
    resolve: {
        extensions: ['.js', '.json'],
        symlinks: false
    },
    module: {
        rules: [
            {
                test: /\.(scss)/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),
            filename: 'index.html',
            showErrors: true
        }),
    ]
}