const mongoose = require('../../../../db/mongoose');

// 数据格式
const schema = new mongoose.Schema({
    // 图片分类的名称
    name: {
        type: String,
        default: null,
        unique: true,
        required: [true, 'The name of the galleries-categories is required.'],
    },
    // 所属用户的id
    userId: {
        type: String,
        default: null,
        required: [true, 'The userId of the galleries-categories is required.'],
    },
});

module.exports = mongoose.model('gallery-categories', schema);
