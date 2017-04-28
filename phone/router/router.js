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
};
Routes.prototype.phoneRegister = function () {
    this.app.get('/register', function (req, res) {
        res.render('page/register', {num: 2});
    })
};
Routes.prototype.phoneLogin = function () {
    this.app.get('/login', function (req, res) {
        res.render('page/login', {num: 2});
    })
};
Routes.prototype.phoneMine = function () {
    this.app.get('/mine', function (req, res) {
        res.render('page/mine', {num: 2});
    })
};
Routes.prototype.phoneUi = function () {
    this.app.get('/ui', function (req, res) {
        res.render('page/ui', {num: 2});
    })
};
Routes.prototype.phoneHome = function () {
    this.app.get('/', function (req, res) {
        res.render('page/index', {num: 2});
    })
};
module.exports = Routes;