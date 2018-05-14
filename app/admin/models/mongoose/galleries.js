const mongoose = require('../../../../db/mongoose');

// 数据格式
const schema = new mongoose.Schema({
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
    // 保存在 destination 中的文件名
    filename: {
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
    size: {
        type: Number,
        default: null,
    },
    // 用户计算机上的文件的名称
    originalName: {
        type: String,
        default: null,
    },
    // 文件创建的时间(上传的时间)
    createTime: {
        type: Date,
        default: null,
    },
    // 所属用户的id
    userId: {
        type: String,
        default: null,
    },
    // 所属用户的名称
    username: {
        type: String,
        default: null,
    },
});

module.exports = mongoose.model('galleries', schema);
