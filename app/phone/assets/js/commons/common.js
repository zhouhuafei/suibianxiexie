require('../../scss/commons/common.scss');// 全局的样式

// 版权
(function () {
    if (dataInfo && dataInfo.isShowCopyright) {
        const Copyright = require('../components/g-copyright');
        new Copyright({
            wrap: '.page-copyright-wrap',
        });
    }
}());

// 底部导航
(function () {
    if (dataInfo && dataInfo.footerNav) {
        const Footer = require('../components/g-footer-nav');
        dataInfo.footerNav.wrap = '.page-footer-nav-wrap';
        new Footer(dataInfo.footerNav);
    }
}());

// 返回顶部
(function () {
    const GoTop = require('../components/g-go-top');
    new GoTop({
        wrap: '.page-go-top-wrap',
    });
}());

// 延迟加载
const LazyLoad = require('../components/g-lazy-load');
const lazyLoad = new LazyLoad();
module.exports.lazyLoad = lazyLoad;
