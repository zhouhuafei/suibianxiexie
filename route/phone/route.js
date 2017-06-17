//页面路由
const extend = require('../../libs/tools/extend');
const config = require('./config');
const controllerPath = `../../controller/phone/`;//控制器的路径

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
        var app = self.opts.app;
        for (var attr in config) {
            if (config.hasOwnProperty(attr)) {
                try {
                    var Controller = require(`${controllerPath}${attr}`);
                    (function (Controller) {
                        app.get(config[attr].route, function (req, res) {
                            new Controller({req: req, res: res});
                        })
                    })(Controller);
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }
}

module.exports = Route;