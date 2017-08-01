//版权
(function () {
    if (pageInfo && pageInfo.config && pageInfo.config.isShowCopyright) {
        let Copyright = require('../components/g-copyright');
        new Copyright({
            wrap: '.g-copyright-wrap'
        });
    }
})();

//底部导航
(function () {
    if (pageInfo && pageInfo.config && pageInfo.config.isShowFooterNav) {
        let Footer = require('../components/g-footer-nav');
        pageInfo.data.footerNav.wrap = '.g-footer-nav-wrap';
        new Footer(pageInfo.data.footerNav);
    }
})();

//延迟加载
let LazyLoad = require('../components/g-lazy-load');
let lazyLoad = new LazyLoad();

module.exports.lazyLoad = lazyLoad;