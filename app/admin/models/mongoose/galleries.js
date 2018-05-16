const mongoose = require('../../../../db/mongoose');

// 数据格式
const schema = new mongoose.Schema({
    // 文件的mime类型
    mimeType: {
        type: String,
        required: true,
        trim: true,
    },
    // 文件的大小，多少字节
    size: {
        type: Number,
        required: true,
        trim: true,
    },
    // 文件的路径
    path: {
        type: String,
        required: true,
        trim: true,
    },
    // 文件的原名
    originalName: {
        type: String,
        required: true,
        trim: true,
    },
    // 文件被记录到数据库的时间
    createTime: {
        type: Date,
        required: true,
        trim: true,
    },
    // 文件是否被使用
    isUsed: {
        type: Boolean,
        default: false,
        required: true,
        trim: true,
    },
    // 文件所属分类的id
    categoryId: {
        type: String,
        required: true,
        trim: true,
    },
});

module.exports = mongoose.model('galleries', schema);
