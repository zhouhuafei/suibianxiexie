//页面路由
const extend = require('../libs/tools/extend');
const page = require('../config/page');
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
        this.pages();
        this.error();
    }

    pages() {
        var self = this;
        var files = fs.readdirSync(`./controller/pages/`);
        files.forEach(function (v) {
            var fileName = path.basename(v, '.js');
            var filePath = `../controller/pages/${fileName}`;
            var Controller = require(filePath);
            self.opts.app.get(page[fileName].route, function (req, res) {
                new Controller({req: req, res: res});
            })
        });
    }

    error() {
        var self = this;
        var files = fs.readdirSync(`./controller/error/`);
        files.forEach(function (v) {
            var fileName = path.basename(v, '.js');
            var filePath = `../controller/error/${fileName}`;
            var Controller = require(filePath);
            self.opts.app.use(function (req, res) {
                new Controller({req: req, res: res});
            });
        })
    }
}

module.exports = Route;