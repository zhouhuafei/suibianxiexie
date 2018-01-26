// 路径
const pathConfig = {
    route: '/admin/',
    view: 'admin/pages/',
};
// 路由的名字
const routeName = [
    {
        name: 'home', // 首页
        title: '首页',
        isValidateLogin: false,
    },
];
// 路由的配置
const routeConfig = {};
routeName.forEach(function (v) {
    let route = `${pathConfig.route}${v.name}/`;
    if (v.name === 'home') {
        route = `${pathConfig.route}`;
    }
    routeConfig[v.name] = {
        name: v.name, // 路由名称
        title: v.title, // 标题
        route: route, // 路由
        view: `${pathConfig.view}${v.name}`, // 视图
        isValidateLogin: v.isValidateLogin === undefined, // 是否验证登陆信息(默认验证)
        isShowCopyright: v.isShowCopyright === undefined, // 是否显示版权信息(默认显示)
        isShowFooterNav: v.isShowFooterNav === undefined, // 是否显示底部导航(默认显示)
    };
});
module.exports = routeConfig;
