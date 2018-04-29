require('../../scss/commons/common.scss');

class Super {
    constructor(json) {
        const self = this;
        self.tools = require('zhf.tools'); // 工具方法集合
        self.applications = require('zhf.applications'); // 应用方法集合
        self.axios = require('../api/axios'); // axios
        self.jsonp = require('../api/jsonp'); // jsonp
        self.opts = self.tools.extend({
            lazyload: {
                isInitRender: false,
            },
        }, json);
        self.init();
    }

    // (初)初始化数据
    init() {
        const self = this;
        window.addEventListener('load', function () {
            setTimeout(function () {
                self.renderHeader();
                self.power();
                self.renderFooter();
            }, 0);
        });
    }

    // (功)(盖)功能(这个方法需要在子类型里被覆盖掉)
    power() {
    }

    // (渲)渲染
    renderHeader() {
        const self = this;

        // 数据信息
        self.dataInfo = (function () {
            const input = document.querySelector('#page-info-str');
            const value = input.value;
            input.parentNode.removeChild(input);
            const wrap = document.querySelector('.g-wrap');
            [].slice.call(wrap.querySelectorAll('script')).forEach(function (v) {
                wrap.removeChild(v);
            });
            try {
                return JSON.parse(value);
            } catch (err) {
                console.log('dataInfo的json格式值出现错误:', err);
                return value || {};
            }
        }());
        // console.log('dataInfo:\n', self.dataInfo);

        // 延迟加载 power方法里如果有切换也使用到延迟加载 那么放在尾部就无解了 放在这里power里可以调用self.lazyload.render方法触发
        const LazyLoad = require('../components-dom/g-lazy-load');
        self.lazyload = new LazyLoad(self.opts.lazyload);

        // Vue
        const Vue = require('vue');
        Vue.prototype.$tools = self.tools;
        Vue.prototype.$applications = self.applications;
        Vue.prototype.$axios = self.axios;
        Vue.prototype.$jsonp = self.jsonp;
        Vue.prototype.$lazyload = self.lazyload;
        self.Vue = Vue;
    }

    // (渲)渲染
    renderFooter() {
        const self = this;
        const dataInfo = self.dataInfo;

        // 二维码
        if (dataInfo && dataInfo.isShowQrCode) {
            const qr = require('qr-image');
            const qrDom = document.querySelector('.g-qr-code-svg');
            if (qrDom) {
                qrDom.innerHTML = qr.imageSync(window.location.href, {type: 'svg'});
            }
        }

        // 返回顶部
        const GoTop = require('../components-dom/g-go-top');
        new GoTop({
            wrap: '.g-go-top-wrap',
        });

        // 版权
        if (dataInfo && dataInfo.isShowCopyright) {
            const Copyright = require('../components-dom/g-copyright');
            new Copyright({
                wrap: '.g-copyright-wrap',
            });
        }

        /*
        // 底部导航
        if (dataInfo && dataInfo.footerNav) {
            const Footer = require('../components-dom/g-footer-nav');
            dataInfo.footerNav.wrap = '.page-footer-nav-wrap';
            new Footer(dataInfo.footerNav);
        }
        */

        // 延迟加载
        self.lazyload.render();

        // spacing-loading移除
        const spacingLoading = document.querySelector('#spacing-loading');
        if (spacingLoading) {
            spacingLoading.parentNode.removeChild(spacingLoading);
        }
    }
}

module.exports = Super;
