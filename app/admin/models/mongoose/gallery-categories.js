const mongoose = require('../../../../db/mongoose');

// 数据格式
const schema = new mongoose.Schema({
    // 图片分类的名称
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
});

module.exports = mongoose.model('gallery-categories', schema);
