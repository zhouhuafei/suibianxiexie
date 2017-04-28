//版权
(function () {
    if (pageConfig && pageConfig.isShowCopyright) {
        var Copyright = require('../modules/m-copyright');
        new Copyright();
    }
})();

//底部导航
(function () {
    if (pageConfig && pageConfig.isShowFooterNav) {
        var Footer = require('../modules/m-footer-nav');
        new Footer();
    }
})();

//延迟加载
(function () {
    var LazyLoad = require('../modules/m-lazy-load');
    new LazyLoad();
})();