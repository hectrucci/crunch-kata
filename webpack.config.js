const ExtractTextPlugin = require('extract-text-webpack-plugin'),
    extractStyles = new ExtractTextPlugin({filename: 'bundle.[contenthash].css'}),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanPlugin = require('clean-webpack-plugin'),
    webpack = require('webpack');

const config = {
    context: `${__dirname}/app`,
    entry: './index.js',
    output: {
        path: `${__dirname}/app`,
        filename: 'bundle.[hash].js'
    },
    resolve: {
        alias: {
            jquery: `${__dirname}/node_modules/jquery/src/jquery.js`
        },
        modules: ['node_modules'],
        descriptionFiles: ['package.json']
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ng-annotate-loader',
                        options: {
                            add: true,
                            map: false
                        }
                    },
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'raw-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: extractStyles.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.scss$/,
                use: extractStyles.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'application/font-woff',
                            name: 'fonts/[name].[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(svg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /angular\.js$/,
                use: 'exports-loader?angular'
            },
            {
                test: /jquery\.js$/,
                use: 'exports-loader?jQuery'
            }
        ]
    },
    plugins: [
        extractStyles,
        new HtmlWebpackPlugin(
            {
                inject: false,
                filename: `${__dirname}/app/index.html`,
                template: `${__dirname}/app/templates/index.ejs`
            }
        )
    ]
};

if (process.env.NODE_ENV === 'production') {
    const cleanDist = new CleanPlugin(
        [
            `${__dirname}/dist`
        ],
        {
            verbose: false
        }
    );
    config.output.path = `${__dirname}/dist`;
    config.output.publicPath = '/';
    config.plugins.push(cleanDist);
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;