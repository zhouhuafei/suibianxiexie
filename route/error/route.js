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
        //this.error500();
    }
    error404(){
        var self = this;
        self.opts.app.use(function (req, res, next) {
            res.status(404).send('Sorry cant find that!');
            //var Controller = require(`../../controller/error/404`);
            //new Controller({req: req, res: res}).render();
        });
    }
    error500(){
        var self = this;
        self.opts.app.use(function(err, req, res, next) {
            res.status(500).send('Something broke!');
            //var Controller = require(`../../controller/error/500`);
            // new Controller({req: req, res: res}).render();
        });
    }
}

module.exports = Route;