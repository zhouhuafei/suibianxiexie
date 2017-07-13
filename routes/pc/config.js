var path = {
    route: '/pc/',
    view: 'pc/min/html/pages/'
};

module.exports = {
    //页面
    pages: {
        //开发-列表页
        'dev-list': {
            route: `${path.route}dev-list/`,//路由
            view: `${path.view}dev-list`,//视图
            title: 'dev-list'//标题
        },
        //开发-全局页
        'dev-global': {
            route: `${path.route}dev-global/`,//路由
            view: `${path.view}dev-global`,//视图
            title: 'g-global'//标题
        },
        //开发-模块页
        'dev-components': {
            route: `${path.route}dev-components/`,//路由
            view: `${path.view}dev-components`,//视图
            title: 'm-module'//标题
        },
        //开发-标准词汇页
        'dev-words': {
            route: `${path.route}dev-words/`,//路由
            view: `${path.view}dev-words`,//视图
            title: 'dev-words'//标题
        },
        //我的页面
        'mine': {
            route: `${path.route}mine/`,//路由
            view: `${path.view}mine`,//视图
            title: '我的'//标题
        },
        //注册页
        'register': {
            route: `${path.route}register/`,//路由
            view: `${path.view}register`,//视图
            title: '注册页'//标题
        },
        //登陆页
        'login': {
            route: `${path.route}login/`,//路由
            view: `${path.view}login`,//视图
            title: '登陆页'//标题
        },
        //首页
        'home': {
            route: `${path.route}`,//路由
            view: `${path.view}home`,//视图
            title: '首页'//标题
        }
    },
    //报错
    error: {
        //服务器报错500页面
        '500': {
            view: `${path.view}500`,//视图
            title: '服务器报错'//标题
        },
        //服务器报错404页面
        '404': {
            view: `${path.view}404`,//视图
            title: '页面没有找到'//标题
        }
    }
};