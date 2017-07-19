//路径
let pathConfig = {
    route: `/phone/api/`
};
//路由的名字
let routeName = [
    {
        name: 'list',//列表
        isValidateLogin: false//是否验证登陆
    }
];
//路由的配置
let routeConfig = {};
routeName.forEach(function (v) {
    let route = `${pathConfig.route}${v.name}/`;
    routeConfig[v.name] = {
        route: route,//路由
        isValidateLogin: v.isValidateLogin === true//是否验证登陆(默认不验证)
    }
});

module.exports = routeConfig;