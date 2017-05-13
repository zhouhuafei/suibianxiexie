//对页面的标题进行处理
const route = require('../config/route');

class pageTitle {
    constructor(json) {
        this.opts = json || {};
        this.result = '页面标题';
        this.init();
    }

    init() {
        this.home();
    }

    home() {

    }
}

module.exports = pageTitle;