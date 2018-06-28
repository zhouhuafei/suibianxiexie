const multer = require('multer'); // 用于处理 multipart/form-data 类型的表单数据，它主要用于上传文件。
const appConfig = require('../../../../app-config'); // 应用全局的配置
const tools = require('zhf.tools');
const typeOf = tools.typeOf;
// 路径
const pathConfig = {
    route: '/admin/api/',
};
// 路由的名字
const routeName = [
    {
        name: 'list', // 列表
    },
    {
        name: 'website-info', // 网站信息
        whichRequestMethodNoValidateLogin: ['get'], // 这个字段表示的意思是，当请求方式为get时不验证登录。
    },
    {
        name: 'gallery-categories', // 图片库里图片的分类
    },
    {
        name: 'galleries', // 图片库
        upload: multer({
            dest: `${appConfig.projectDir}/static-cache-wrap/static-cache/admin/galleries/`,
            limits: {
                fileSize: 300 * 1024, // 单个文件的大小不能超过300kb。
                files: 6, // 每次最多上传6个文件。
            },
            fileFilter: function (req, file, cb) {
                const mimeType = file.mimetype;
                cb(null, mimeType.split('/')[0] === 'image');
                /*
                // 拒绝这个文件，使用`false`，像这样:
                cb(null, false);
                // 接受这个文件，使用`true`，像这样:
                cb(null, true);
                // 如果有问题，你可以总是这样发送一个错误:
                cb(new Error('only receive image !'));
                */
            },
        }).array('images'),
    },
    {
        name: 'account-whether-exist', // 账号是否存在
    },
    {
        name: 'account-modify', // 更改账号,去修改
    },
    {
        name: 'password-modify', // 更改密码,去修改
    },
    {
        name: 'register', // 注册
        isValidateLogin: false,
    },
    {
        name: 'is-login', // 是否登陆了
        isValidateLogin: false,
    },
    {
        name: 'login', // 登陆
        isValidateLogin: false,
    },
    {
        name: 'verify-code-canvas', // 验证码,图文随机
        isValidateLogin: false,
    },
    {
        name: 'logout', // 退出
    },
];
// 路由的配置
const routeConfig = {};
routeName.forEach(function (v) {
    const route = `${pathConfig.route}${v.name}/`;
    routeConfig[v.name] = {
        name: v.name, // 路由名称
        route: route, // 路由
        isValidateLogin: v.isValidateLogin !== false, // 是否验证登陆(默认验证，这里的验证指的是增删改查全部验证，如果有些请求方式不需要验证，则需要配置whichRequestMethodNoValidateLogin字段)
        whichRequestMethodNoValidateLogin: typeOf(v.whichRequestMethodNoValidateLogin) === 'array' ? v.whichRequestMethodNoValidateLogin : undefined, // 哪些请求方式不验证登录(当whichRequestMethodNoValidateLogin值为undefined时，表示所有请求方式都需要验证登陆，为数组时则数组里所属的请求方式不验证登陆)
        isSupportJsonp: v.isSupportJsonp === true ? true : undefined, // 是否支持jsonp(默认不支持)
        upload: typeof v.upload === 'function' ? v.upload : undefined, // 是否是上传类型的接口(默认不是)
    };
});

module.exports = routeConfig;
