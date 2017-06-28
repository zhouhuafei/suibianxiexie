//路径
var path = {
    route: '/',
    view: 'phone/dist/views/pages/'
};
//路由的名字
var routeName = [
    {
        name: 'dev-list',//开发-列表页
        title: '开发列表'
    },
    {
        name: 'dev-global',//开发-全局页
        title: '开发全局'
    },
    {
        name: 'dev-module',//开发-模块页
        title: '开发模块'
    },
    {
        name: 'dev-word',//开发-标准词汇页
        title: '开发词汇'
    },
    {
        name: 'mine',//我的页面
        title: '我的',
        isValidateLogin: true//是否验证登陆
    },
    {
        name: 'register',//注册页
        title: '注册'
    },
    {
        name: 'login',//登陆页
        title: '登陆'
    },
    {
        name: 'home',//首页
        title: '首页'
    }
];
//路由的配置
var routeConfig = {};
routeName.forEach(function (v) {
    var route = `${path.route}${v.name}/`;
    if (v.name == 'home') {
        route = `${path.route}`;
    }
    routeConfig[v.name] = {
        route: route,//路由
        view: `${path.view}${v.name}`,//视图
        title: v.title,//标题
        isValidateLogin: v.isValidateLogin == true,//是否验证登陆(默认不验证)
        isShowFooterNav: v.isShowFooterNav == undefined//是否显示底部导航(默认显示)
    }
});
module.exports = routeConfig;