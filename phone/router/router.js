function Routes(opt) {
    if (!opt || !opt.app) {
        return;
    }
    this.app = opt.app;
    this.init();
    this.error();
}
Routes.prototype.init = function () {
    this.home();
    this.ui();
    this.mine();
    this.login();
    this.register();
    this.list();
};
Routes.prototype.list = function () {
    this.app.get('/list', function (req, res) {
        res.render('page/list', {
            data: {
                title: '列表'
            },
            config: {}
        });
    })
};
Routes.prototype.register = function () {
    this.app.get('/register', function (req, res) {
        res.render('page/register', {
            data: {
                title: '注册'
            },
            config: {}
        });
    })
};
Routes.prototype.login = function () {
    this.app.get('/login', function (req, res) {
        res.render('page/login', {
            data: {
                title: '登陆'
            },
            config: {}
        });
    })
};
Routes.prototype.mine = function () {
    this.app.get('/mine', function (req, res) {
        res.render('page/mine', {
            data: {
                title: '我的'
            },
            config: {}
        });
    })
};
Routes.prototype.ui = function () {
    this.app.get('/ui', function (req, res) {
        res.render('page/ui', {
            data: {
                title: 'ui'
            },
            config: {}
        });
    })
};
Routes.prototype.home = function () {
    this.app.get('/', function (req, res) {
        res.render('page/home', {
            data: {
                title: '首页'
            },
            config: {}
        });
    })
};
Routes.prototype.error = function () {
    //404
    this.app.use(function (req, res) {
        res.render('page/404', {
            data: {
                title: '404'
            },
            config: {}
        });
    });
    //500
    this.app.use(function (err, req, res) {
        res.type('text/plain');
        res.status('500');
        res.send('500 - Server Error');
    });
};
module.exports = Routes;