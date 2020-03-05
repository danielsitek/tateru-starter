const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV || 'development',

    entry: {
        'app': path.resolve(__dirname, 'src/assets/js/app.js')
    },

    output: {
        path: path.resolve(__dirname, 'dist'), // ex. '../../wwwroot/dist'
        filename: 'assets/js/[name]-[hash:10].bundle.js', // Substitutes [name] with the entry name, results in app.js
        chunkFilename: 'assets/js/[id]-[hash:10].chunk.js',
        publicPath: '/'
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: [ path.resolve(__dirname, 'src') ],
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.svg$/,
                include: [ path.resolve(__dirname, 'src') ],
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    },

    plugins: [
        new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
        new HtmlWebpackPlugin({
            template: 'dist/index.html',
            inject: true,
            chunks: 'all',
            hash: true,
            filename: 'index.html'
        })
    ],

    optimization: {
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: new RegExp(
                        `[\\/]node_modules[\\/]`
                    ),
                    name: 'vendors',
                    enforce: true
                }
            }
        }
    },

    devtool: 'cheap-module-eval-source-map',

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true
    }
};
