// 路径
const pathConfig = {
    route: '/phone/api/',
};
// 路由的名字
const routeName = [
    {
        name: 'list', // 列表
    },
    {
        name: 'verify-code-register', // 验证码-注册
    },
    {
        name: 'password-find', // 忘记密码,去找回
    },
    {
        name: 'password-reset', // 修改密码,去重置
    },
    {
        name: 'logout', // 退出
    },
    {
        name: 'login', // 登陆
    },
    {
        name: 'register', // 没有账号,去注册
    },
];
// 路由的配置
const routeConfig = {};
routeName.forEach(function (v) {
    const route = `${pathConfig.route}${v.name}/`;
    routeConfig[v.name] = {
        name: v.name, // 路由名称
        route: route, // 路由
        isValidateLogin: v.isValidateLogin === true, // 是否验证登陆(默认不验证)
    };
});

module.exports = routeConfig;
