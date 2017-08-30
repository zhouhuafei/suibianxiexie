require('../../scss/pages-globals/global.scss');// 全局的样式

(function () {
    if (pageInfo && pageInfo.isShowCopyright) {
        const Copyright = require('../components/g-copyright');
        new Copyright({
            wrap: '.g-copyright-wrap',
        });
    }
}());// 版权

(function () {
    if (pageInfo && pageInfo.footerNav) {
        const Footer = require('../components/g-footer-nav');
        pageInfo.footerNav.wrap = '.g-footer-nav-wrap';
        new Footer(pageInfo.footerNav);
    }
}());// 底部导航

// 延迟加载
const LazyLoad = require('../components/g-lazy-load');

const lazyLoad = new LazyLoad();

module.exports.lazyLoad = lazyLoad;
