//版权
(function () {
    if (pageInfo && pageInfo.config && pageInfo.config.isShowCopyright) {
        let Copyright = require('../components/g-copyright');
        new Copyright();
    }
})();

//底部导航
(function () {
    if (pageInfo && pageInfo.config && pageInfo.config.isShowFooterNav) {
        let Footer = require('../components/g-footer-nav');
        new Footer(pageInfo.data.footerNav);
    }
})();

//延迟加载
(function () {
    let LazyLoad = require('../components/g-lazy-load');
    new LazyLoad();
})();