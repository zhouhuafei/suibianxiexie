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
        name: 'password-modify', // 更改密码,去修改
        isValidateLogin: false,
    },
    {
        name: 'register', // 注册
        isValidateLogin: false,
    },
    {
        name: 'login', // 登陆
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
        isValidateLogin: v.isValidateLogin !== false, // 是否验证登陆(默认验证)
        isSupportJsonp: v.isSupportJsonp === true, // 是否支持jsonp(默认不支持)
    };
});

module.exports = routeConfig;
