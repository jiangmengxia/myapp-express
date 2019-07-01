'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
// const glob = require("glob");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)


// var vConsolePlugin = require('vconsole-webpack-plugin');

// add hot-reload related code to entry chunks
// Object.keys(baseWebpackConfig.entry).forEach(function (name) {
//   baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
// })

var getPlugin = function () {
    var plugin = [
        new webpack.DefinePlugin({
            'process.env': require('../config/dev.env')
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: {
                    warnings: false,
                    drop_debugger: true,
                    drop_console: true
                }
            },
            sourceMap: config.build.productionSourceMap,
            parallel: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin(),
        new VueLoaderPlugin(),
        // new vConsolePlugin({
        //   filter: [],  // 需要过滤的入口文件
        //   enable: true // 发布代码前记得改回 false
        // }),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './templates/index.html',
            inject: true,
            chunks: ['index'],
            title: '首页',
            showErrors: true,
            hash:true,
        }),

        // copy custom static assets
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../src/tinyMCE/langs'),
                to: path.resolve(config.build.assetsRoot,'langs'),
                // ignore: ['.*']
            }
        ]),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../src/tinyMCE/skins'),
                to: path.resolve(config.build.assetsRoot,'skins'),
                // ignore: ['.*']
            }
        ]),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../src/tinyMCE/plugins'),
                to: path.resolve(config.build.assetsRoot,'plugins'),
                // ignore: ['.*']
            }
        ]),

        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../dist'),
                to: path.resolve(__dirname, '../../views'),
                ignore: ['.*']
            }
        ]),
        // new CopyWebpackPlugin([
        //     {
        //         from: path.resolve(__dirname, 'src/lang'),
        //         to: config.dev.assetsPublicPath,
        //         ignore: ['.*']
        //     }
        // ])

        new ExtractTextPlugin({
            // filename: utils.assetsPath('css/[name].[contenthash].css'),
            filename: utils.assetsPath('css/[name].[hash].css'),
            // Setting the following option to `false` will not extract CSS from codesplit chunks.
            // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
            // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`,
            // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
            allChunks: true,
        }),
    ]
    // var pages = glob.sync("./page/*.html");
    // console.log(pages)
    // pages.forEach(function (name) {
    //   var chunk = name.slice(7, name.length - 5);
    //   var page = name.slice(7, name.length);
    //   var file = name.slice(2, name.length);
    //   var temp = path.join(config.dev.page, page);
    //   console.log('chunk:',chunk,'page:',page,'file:',file,'temp:',temp)
    //   plugin.push(
    //     new HtmlWebpackPlugin({
    //       filename: file,
    //       template: temp,
    //       inject: true,
    //       chunks: [chunk]
    //     })
    //   );
    // });
    return plugin
}


const devWebpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({sourceMap: config.dev.cssSourceMap, usePostCSS: true})
    },
    // cheap-module-eval-source-map is faster for development
    devtool: config.dev.devtool,
    // these devServer options should be customized in /config/index.js


    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: {
            rewrites: [
                {from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html')},
            ],
        },
        hot: true,
        contentBase: false, // since we use CopyWebpackPlugin.
        compress: true,
        host: HOST || config.dev.host,
        port: PORT || config.dev.port,
        open: config.dev.autoOpenBrowser,
        overlay: config.dev.errorOverlay
            ? {warnings: false, errors: true}
            : false,
        publicPath: config.dev.assetsPublicPath,
        proxy: config.dev.proxyTable,
        quiet: true, // necessary for FriendlyErrorsPlugin
        watchOptions: {
            poll: config.dev.poll,
        }
    },
    plugins: getPlugin(),
    mode:'development'
    /*  [
      new webpack.DefinePlugin({
        'process.env': require('../config/dev.env')
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
      new webpack.NoEmitOnErrorsPlugin(),
      // https://github.com/ampedandwired/html-webpack-plugin
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true
      }),
      // copy custom static assets
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, '../static'),
          to: config.dev.assetsSubDirectory,
          ignore: ['.*']
        }
      ])
    ]*/


})


module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = process.env.PORT || config.dev.port
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err)
        } else {
            // publish the new Port, necessary for e2e tests
            process.env.PORT = port
            // add port to devServer config
            devWebpackConfig.devServer.port = port

            // Add FriendlyErrorsPlugin
            devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
                compilationSuccessInfo: {
                    messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
                },
                onErrors: config.dev.notifyOnErrors
                    ? utils.createNotifierCallback()
                    : undefined
            }))

            resolve(devWebpackConfig)
        }
    })
})
