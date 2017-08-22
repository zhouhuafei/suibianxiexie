require('../../scss/globals/global.scss');// 全局的样式

(function () {
    if (pageInfo && pageInfo.isShowCopyright) {
        let Copyright = require('../components/g-copyright');
        new Copyright({
            wrap: '.g-copyright-wrap',
        });
    }
})();// 版权

(function () {
    if (pageInfo && pageInfo.footerNav) {
        let Footer = require('../components/g-footer-nav');
        pageInfo.footerNav.wrap = '.g-footer-nav-wrap';
        new Footer(pageInfo.footerNav);
    }
})();// 底部导航

// 延迟加载
let LazyLoad = require('../components/g-lazy-load');
let lazyLoad = new LazyLoad();

module.exports.lazyLoad = lazyLoad;
