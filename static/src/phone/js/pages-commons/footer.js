//版权
(function () {
    if (pageInfo && pageInfo.config && pageInfo.config.isShowCopyright) {
        let Copyright = require('../modules/m-copyright');
        new Copyright();
    }
})();

//底部导航
(function () {
    if (pageInfo && pageInfo.config && pageInfo.config.isShowFooterNav) {
        let Footer = require('../modules/m-footer-nav');
        new Footer(pageInfo.data.footerNav);
    }
})();

//延迟加载
(function () {
    let LazyLoad = require('../modules/m-lazy-load');
    new LazyLoad();
})();