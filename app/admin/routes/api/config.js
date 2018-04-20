// 路径
const pathConfig = {
    route: '/phone/api/',
};
// 路由的名字
const routeName = [
    {
        name: 'list', // 列表
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
        isSupportJsonp: v.isSupportJsonp === true, // 是否支持jsonp(默认不支持)
    };
});

module.exports = routeConfig;
