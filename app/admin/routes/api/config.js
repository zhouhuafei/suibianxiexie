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
        isValidateLogin: false, // 获取不需要验证是否登录，但是保存需要验证，所以统一不验证，需要验证的方法内部进行验证。
    },
    {
        name: 'gallery-categories', // 图片库里图片的分类
    },
    {
        name: 'galleries', // 图片库
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
        isValidateLogin: v.isValidateLogin !== false, // 是否验证登陆(默认验证，这里的验证指的是增删改查全部验证，如果只验证增，则需要这里设置成false，然后接口内部自行处理)
        isSupportJsonp: v.isSupportJsonp === true, // 是否支持jsonp(默认不支持)
    };
});

module.exports = routeConfig;
