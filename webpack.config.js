var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [path.join(__dirname, 'src/client/index.js'), 'webpack-hot-middleware/client?noInfo=true&reload=true'],
  output: {
    path: path.join(__dirname, 'src/server/public/javascripts/'),
    publicPath: '/javascripts/',
    filename: 'build.js'
  },
  resolve: {
    modules: [path.join(__dirname, 'node_modules')],
    extensions: ['.js', '.vue'],
    alias: {
        '@': path.join(__dirname,'src/client'),
        vue: 'vue/dist/vue.common.js'
    }
  },
  module: {
    rules:[
        /*{
            test: /\.vue$/,
            exclude: /node_modules/,
            use:[{
                loader: 'eslint-loader',
                options:{
                    formatter: require('eslint-friendly-formatter')
                }
            }],
            enforce: 'pre'
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use:[{
                loader: 'eslint-loader',
                options:{
                    formatter: require('eslint-friendly-formatter')
                }
            }],
            enforce: 'pre'
        },*/
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use:[{
                loader: 'babel-loader'
            }]
        },
        {
            test: /\.vue$/,
            use: [{loader:'vue-loader'}]
        },
        {
            test: /\.json$/,
            use: [{loader:'json-loader'}]
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            use:[{
                loader: 'url-loader',
                options:{
                    limit: 10000,
                    name: '[name].[ext]?[hash:7]'
                }
            }]
        }
    ]
  },
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/server/views/index.html',
        inject: true,
        hash: true,
        minify: {
            removeComments: true,
            collapseWhitespace: false
        }
    }),
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]
}