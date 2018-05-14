const mongoose = require('../../../../db/mongoose');

// 数据格式
const schema = new mongoose.Schema({
    // 文件编码
    encoding: {
        type: String,
        default: null,
        required: [true, 'The encoding of the galleries is required.'],
    },
    // 文件的mime类型
    mimeType: {
        type: String,
        default: null,
        required: [true, 'The mimeType of the galleries is required.'],
    },
    // 保存在 destination 中的文件名
    filename: {
        type: String,
        default: null,
        required: [true, 'The filename of the galleries is required.'],
    },
    // 保存路径
    destination: {
        type: String,
        default: null,
        required: [true, 'The destination of the galleries is required.'],
    },
    // 已上传文件的完整路径
    path: {
        type: String,
        default: null,
        required: [true, 'The path of the galleries is required.'],
    },
    // 文件大小，多少字节
    size: {
        type: Number,
        default: -1,
        required: [true, 'The size of the galleries is required.'],
    },
    // 用户计算机上的文件的名称
    originalName: {
        type: String,
        default: null,
        required: [true, 'The originalName of the galleries is required.'],
    },
    // 文件创建的时间(上传的时间)
    createTime: {
        type: Date,
        default: null,
        required: [true, 'The createTime of the galleries is required.'],
    },
    // 图片是否被使用
    isUsed: {
        type: Boolean,
        default: false,
    },
    // 图片分类id
    categoryId: {
        type: String,
        default: null,
        required: [true, 'The categoryId of the galleries is required.'],
    },
});

module.exports = mongoose.model('galleries', schema);
