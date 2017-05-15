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
        var files = fs.readdirSync(`./app/controller/pages/`);//读取文件夹/文件,路径是相对于在哪里调用
        files.forEach(function (v) {
            var fileName = path.basename(v, '.js');
            var Controller = require(`../controller/pages/${fileName}`);//引入文件,路径是相对于这个文件本身
            self.opts.app.get(page[fileName].route, function (req, res) {
                new Controller({req: req, res: res}).getPageInfo();
            })
        });
    }

    error() {
        var self = this;
        var files = fs.readdirSync(`./app/controller/error/`);
        files.forEach(function (v) {
            var fileName = path.basename(v, '.js');
            var Controller = require(`../controller/error/${fileName}`);
            self.opts.app.use(function (req, res) {
                new Controller({req: req, res: res}).getPageInfo();
            });
        })
    }
}

module.exports = Route;