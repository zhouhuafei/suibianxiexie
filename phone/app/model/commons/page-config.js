//对页面的配置项进行处理

class pageConfig {
    constructor(json) {
        this.opts = json || {};
        this.result = {
            isShowFooterNav: true,
            isShowCopyright: true
        };
    }
}

module.exports = pageConfig;