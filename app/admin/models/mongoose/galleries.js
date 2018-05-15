const mongoose = require('../../../../db/mongoose');

// 数据格式
const schema = new mongoose.Schema({
    // 文件的mime类型
    mimeType: {
        type: String,
        required: [true, 'The mimeType of the galleries is required.'],
    },
    // 保存在 destination 中的文件名
    filename: {
        type: String,
        required: [true, 'The filename of the galleries is required.'],
    },
    // 已上传文件所在的目录
    destination: {
        type: String,
        required: [true, 'The destination of the galleries is required.'],
    },
    // 已上传文件的完整路径
    path: {
        type: String,
        required: [true, 'The path of the galleries is required.'],
    },
    // 文件大小，多少字节
    size: {
        type: Number,
        required: [true, 'The size of the galleries is required.'],
    },
    // 文件在用户计算机上的名称
    originalName: {
        type: String,
        required: [true, 'The originalName of the galleries is required.'],
    },
    // 文件创建的时间(上传的时间)
    createTime: {
        type: Date,
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
        required: [true, 'The categoryId of the galleries is required.'],
    },
});

module.exports = mongoose.model('galleries', schema);
