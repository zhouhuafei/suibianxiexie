const mongoose = require('../../../../db/mongoose');

// 不能关联所属用户，否则用户忘记密码，去删库的话，以前存的图片就不属于他了。
// 后台网站管理员应该就一个，即使管理员多个，他们也是共享这些上传的图片和网站后台信息。
// 如果是前台用户上传的，则需要关联所属用户，前台除去系统信息，其他的信息都需要关联所属用户。

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
