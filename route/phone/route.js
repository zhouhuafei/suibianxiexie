//页面路由
const extend = require('../../libs/tools/extend');
const config = require('./config');
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
        var opts = self.opts;
        var app = opts.app;
        var controllerPath = `../../controller/phone/`;
        //首页
        app.get(config.home.route, function (req, res) {
            var Controller = require(`${controllerPath}home`);//引入文件,路径是相对于这个文件本身
            new Controller({req: req, res: res}).render();
        });
    }
}

module.exports = Route;