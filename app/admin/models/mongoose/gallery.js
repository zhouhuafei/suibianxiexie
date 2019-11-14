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
    // 图片的mime类型
    mimeType: {
        type: String,
        required: true,
        trim: true,
    },
    // 图片的大小，多少字节B，1kb = 1024B
    size: {
        type: Number,
        required: true,
        trim: true,
    },
    // 图片的路径，考虑到安全因素，查看图片列表时，此项不应该展示给用户。展示了也没关系。如果别人没有你服务器权限，自然不用担心，如果有服务器权限，需要担心的又何止这一点。
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
    // 图片被使用的次数，只有使用次数为0的图片才可以被物理删除。这个里面涉及到细节太多，实现起来太艰辛，图片这种资源，还是不物理删除比较好。
    /*
    beUsedNumber: {
        type: Number,
        default: 0,
        trim: true,
    },
    */
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
    // 图片的应用路径
    url: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
}, {collection: 'gallery'});

module.exports = mongoose.model('Gallery', schema);
