//对页面的配置项进行处理
const route = require('../config/route');

class pageConfig {
    constructor(json) {
        this.opts = json || {};
        this.result = {
            isShowFooterNav: true,
            isShowCopyright: true
        };
        this.init();
    }

    init() {
        this.home();
    }

    home() {

    }
}

module.exports = pageConfig;