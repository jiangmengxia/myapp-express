var webpack = require('webpack');
var HotMiddleWareConfig = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'

module.exports = {
    context: __dirname,
    entry: [
        // 添加一个和HotMiddleWare通信的客户端
        HotMiddleWareConfig,
        // 添加web应用入口文件
        '../bin/www.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: '#source-map',
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        // 在 webpack 插件中引入 webpack.HotModuleReplacementPlugin
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin()
    ],
};