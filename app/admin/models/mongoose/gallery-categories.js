const mongoose = require('../../../../db/mongoose');

// 数据格式
const schema = new mongoose.Schema({
    // 图片分类的名称
    name: {
        type: String,
        unique: [true, '分类名称已经存在'],
        required: [true, '分类名称是必填项'],
    },
});

module.exports = mongoose.model('gallery-categories', schema);
