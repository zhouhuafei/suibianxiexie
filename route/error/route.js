//页面路由
const extend = require('../../libs/tools/extend');

class Route {
    constructor(json) {
        this.opts = extend({
            defaults: {
                app: null
            },
            inherits: json
        });
        if (!this.opts.app) {
            return;
        }
        this.init();
    }

    init() {
        var self = this;
        var opts = self.opts;
        var app = opts.app;
        var controllerPath = `../../controller/phone/`;
        //404
        app.use(function (req, res, next) {
            res.writeHead(404, {'Content-Type': 'text/plain;charset=utf-8'});
            res.end(JSON.stringify({code: 404}));
            //var Controller = require(`../../controller/error/404`);
            //new Controller({req: req, res: res}).render();

            //官方推荐
            //res.status(404).send('Sorry cant find that!');
        });
        //500
        app.use(function (err, req, res, next) {
            res.writeHead(500, {'Content-Type': 'text/plain;charset=utf-8'});
            res.end(JSON.stringify({code: 500}));
            //var Controller = require(`../../controller/error/500`);
            //new Controller({req: req, res: res}).render();

            //官方推荐
            //res.status(500).send('Something broke!');
        });
    }
}

module.exports = Route;