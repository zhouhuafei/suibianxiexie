//页面路由
const extend = require('../../libs/tools/extend');
const fs = require('fs');
const path = require('path');

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
        var files = fs.readdirSync(`./controller/error/`);
        files.forEach(function (v) {
            var fileName = path.basename(v, '.js');
            var Controller = require(`../../controller/error/${fileName}`);
            self.opts.app.use(function (req, res) {
                new Controller({req: req, res: res}).render();
            });
        })
    }
}

module.exports = Route;