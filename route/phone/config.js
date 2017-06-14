var path = {
    route: '/',
    view: 'phone/min/html/pages/'
};

module.exports = {
    //开发
    dev: {
        //开发-列表页
        list: {
            route: `${path.route}dev/list/`,//路由
            view: `${path.view}dev/dev-list`,//视图
            title: 'dev-list'//标题
        },
        //开发-全局页
        global: {
            route: `${path.route}dev/global/`,//路由
            view: `${path.view}dev/dev-global`,//视图
            title: 'g-global'//标题
        },
        //开发-模块页
        module: {
            route: `${path.route}dev/module/`,//路由
            view: `${path.view}dev/dev-module`,//视图
            title: 'm-module'//标题
        },
        //开发-标准词汇页
        word: {
            route: `${path.route}dev/word/`,//路由
            view: `${path.view}dev/dev-word`,//视图
            title: 'dev-word'//标题
        }
    },
    //我的页面
    mine: {
        route: `${path.route}mine/`,//路由
        view: `${path.view}mine`,//视图
        title: '我的'//标题
    },
    //注册页
    register: {
        route: `${path.route}register/`,//路由
        view: `${path.view}register`,//视图
        title: '注册页'//标题
    },
    //登陆页
    login: {
        route: `${path.route}login/`,//路由
        view: `${path.view}login`,//视图
        title: '登陆页'//标题
    },
    //首页
    home: {
        route: `${path.route}`,//路由
        view: `${path.view}home`,//视图
        title: '首页'//标题
    }
};