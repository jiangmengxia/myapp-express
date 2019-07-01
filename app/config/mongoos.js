const mongoose = require('mongoose');
const config = require('./config');
module.exports = {
    //  mongoose.Promise = global.Promise;//如果有promise的问题，可以用这个试试
    connect: function () {
        mongoose.connect(config.mongodb);//连接mongodb数据库
        // 实例化连接对象
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, '连接错误：'));
        db.once('open', function (callback) {
            console.log('MongoDB连接成功！！');
        });
        return db;
    }
}