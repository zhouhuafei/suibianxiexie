const mongoose = require('../../../../db/mongoose');

// 数据格式
const schema = new mongoose.Schema({
    // 保存在 destination 中的文件名
    fileName: {
        type: String,
        default: null,
    },
    // 用户计算机上的文件的名称
    originalName: {
        type: String,
        default: null,
    },
    // 文件编码
    encoding: {
        type: String,
        default: null,
    },
    // 文件的mime类型
    mimeType: {
        type: String,
        default: null,
    },
    // 保存路径
    destination: {
        type: String,
        default: null,
    },
    // 已上传文件的完整路径
    path: {
        type: String,
        default: null,
    },
    // 文件大小，多少字节
    sizeB: {
        type: Number,
        default: null,
    },
    // 文件大小，多少千字节
    sizeKB: {
        type: Number,
        default: null,
    },
    // 文件大小，多少兆
    sizeM: {
        type: Number,
        default: null,
    },
    // 文件在站点中可被使用的url
    url: {
        type: String,
        default: null,
    },
    // 文件创建的时间(上传的时间)
    createTime: {
        type: Date,
        default: null,
    },
});

module.exports = mongoose.model('galleries', schema);
