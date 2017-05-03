function Routes(opt) {
    if (!opt || !opt.app) {
        return;
    }
    this.app = opt.app;
    this.init();
}
Routes.prototype.init = function () {
    this.phoneHome();
    this.phoneUi();
    this.phoneMine();
    this.phoneLogin();
    this.phoneRegister();
    this.phoneList();
};
Routes.prototype.phoneList = function () {
    this.app.get('/list', function (req, res) {
        res.render('page/list', {
            title: '列表页'
        });
    })
};
Routes.prototype.phoneRegister = function () {
    this.app.get('/register', function (req, res) {
        res.render('page/register', {
            title: '注册'
        });
    })
};
Routes.prototype.phoneLogin = function () {
    this.app.get('/login', function (req, res) {
        res.render('page/login', {
            title: '登录'
        });
    })
};
Routes.prototype.phoneMine = function () {
    this.app.get('/mine', function (req, res) {
        res.render('page/mine', {
            title: '我的'
        });
    })
};
Routes.prototype.phoneUi = function () {
    this.app.get('/ui', function (req, res) {
        res.render('page/ui', {
            title: 'ui'
        });
    })
};
Routes.prototype.phoneHome = function () {
    this.app.get('/', function (req, res) {
        res.render('page/home', {
            title: '首页'
        });
    })
};
module.exports = Routes;