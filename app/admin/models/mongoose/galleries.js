const mongoose = require('../../../../db/mongoose');

// 数据格式
const schema = new mongoose.Schema({
    // 图片的mime类型
    mimeType: {
        type: String,
        required: true,
        trim: true,
    },
    // 图片的大小，多少字节
    size: {
        type: Number,
        required: true,
        trim: true,
    },
    // 图片的路径
    path: {
        type: String,
        required: true,
        trim: true,
    },
    // 图片的原名
    originalName: {
        type: String,
        required: true,
        trim: true,
    },
    // 图片被记录到数据库的时间
    createTime: {
        type: Date,
        required: true,
        trim: true,
    },
    // 图片被使用的次数，只有使用次数为0的图片才可以被物理删除
    beUsedNumber: {
        type: Number,
        default: 0,
        trim: true,
    },
    // 图片所属分类的id
    categoryId: {
        type: String,
        default: 'default',
        trim: true,
    },
    // 图片的宽度
    width: {
        type: Number,
        required: true,
        trim: true,
    },
    // 图片的高度
    height: {
        type: Number,
        required: true,
        trim: true,
    },
});

module.exports = mongoose.model('galleries', schema);
