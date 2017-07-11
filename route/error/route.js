//页面路由
const tools = require('../../base/tools');

class Route {
    constructor(json) {
        this.opts = tools.extend({
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

    error404() {
        let self = this;
        self.opts.app.use(function (req, res, next) {
            res.status(404).send('404 - not found');
            //var Controller = require(`../../controller/error/404`);
            //new Controller({req: req, res: res}).render();
        });
    }

    error500() {
        let self = this;
        self.opts.app.use(function (err, req, res, next) {
            res.status(500).send('500 - server error');
            //var Controller = require(`../../controller/error/500`);
            // new Controller({req: req, res: res}).render();
        });
    }
}

module.exports = Route;