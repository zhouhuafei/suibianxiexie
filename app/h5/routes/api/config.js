// 路径
const pathConfig = {
    route: '/h5/api/',
};
// 路由的名字
const routeName = [
    {
        name: 'list', // 列表
        isValidateLogin: false,
    },
    {
        name: 'verify-code-canvas', // 验证码,图文随机
        isValidateLogin: false,
    },
    {
        name: 'verify-code-random', // 验证码,数字随机
        isSupportJsonp: true, // 是否支持jsonp
        isValidateLogin: false,
    },
    {
        name: 'password-reset', // 忘记密码,去找回
        isValidateLogin: false,
    },
    {
        name: 'password-modify', // 更改密码,去修改
    },
    {
        name: 'logout', // 退出
    },
    {
        name: 'login', // 登陆
        isValidateLogin: false,
    },
    {
        name: 'register', // 没有账号,去注册
        isValidateLogin: false,
    },
];
// 路由的配置
const routeConfig = {};
routeName.forEach(function (v) {
    const route = `${pathConfig.route}${v.name}/`;
    routeConfig[v.name] = {
        name: v.name, // 路由名称
        route: route, // 路由
        isValidateLogin: v.isValidateLogin !== false, // 是否验证登陆(默认验证)
        isSupportJsonp: v.isSupportJsonp === true, // 是否支持jsonp(默认不支持)
    };
});

module.exports = routeConfig;
