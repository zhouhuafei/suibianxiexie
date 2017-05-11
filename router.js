const RouterPhone = require('./phone/router/router');

class Router {
    constructor(json) {
        var app = json.app;
        if (app) {
            new RouterPhone({app: app});
        }
    }
}

module.exports = Router;