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
        this.error404();
        this.error500();
    }
    error404(){
        var self = this;
        var Controller = require(`../../controller/error/404`);
        self.opts.app.use(function (req, res, next) {
            new Controller({req: req, res: res}).render();
        });
    }
    error500(){
        var self = this;
        var Controller = require(`../../controller/error/500`);
        self.opts.app.use(function (err, req, res, next) {
            new Controller({req: req, res: res}).render();
        });
    }
}

module.exports = Route;