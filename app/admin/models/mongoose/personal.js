// 个人信息表
const mongoose = require('../../../../db/mongoose');

// 数据格式
const schema = new mongoose.Schema({
    // (不可修改)用户id。
    uid: {
        type: String,
        default: null,
        unique: true,
        required: [true, 'uid is required'],
    },
    // 昵称(建议单独放一个表)
    nickname: {
        type: String,
        default: '',
    },
    // 性别(建议单独放一个表)
    sex: {
        type: String,
        default: '', // 'boy'和'girl'
    },
}, {collection: 'personal'});

module.exports = mongoose.model('Personal', schema);
