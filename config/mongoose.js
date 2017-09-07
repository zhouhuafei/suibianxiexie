// mongodb
const mongoose = require('mongoose');

// 路径,数据库名字
const url = 'mongodb://localhost:27017/suibianxiexie';

// 链接
mongoose.connect(url, {useMongoClient: true});

// 连接成功
mongoose.connection.on('connected', function () {
    console.log('mongoose connection open to:\n', url);
});

// 连接异常
mongoose.connection.on('error', function (error) {
    console.log('mongoose connection error:\n', error);
});

// 连接断开
mongoose.connection.on('disconnected', function () {
    console.log('mongoose connection disconnected:\n');
});

module.exports = mongoose;
