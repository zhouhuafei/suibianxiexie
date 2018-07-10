const mongoose = require('../../../../db/mongoose');

// 数据格式
const schema = new mongoose.Schema({
    // 网站名称
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    // 联系电话
    phone: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    // 网站logo
    logo: {
        type: Object,
        unique: true,
        required: true,
        trim: true,
    },
    // 网站favicon
    favicon: {
        type: Object,
        unique: true,
        required: true,
        trim: true,
    },
});

module.exports = mongoose.model('website-infos', schema);
