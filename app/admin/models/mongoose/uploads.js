const mongoose = require('../../../../db/mongoose');

// 数据格式
const schema = new mongoose.Schema({
    // 文件名称
    name: {
        type: String,
        default: null,
    },
    // 文件类型
    type: {
        type: String,
        default: null,
    },
    // 文件大小
    size: {
        type: Object,
        default: {
            B: null, // 多少字节
            KB: null, // 多少千字节
            M: null, // 多少兆
        },
    },
    // 文件url
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

module.exports = mongoose.model('uploads', schema);
