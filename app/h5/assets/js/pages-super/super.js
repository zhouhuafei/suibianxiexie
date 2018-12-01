require('../../scss/commons/common.scss');
window['g-is_h5'] = true;
const qr = require('qr-image');
const extend = require('zhf.extend');
const axios = require('../api/axios');
const jsonp = require('../api/jsonp');
const {
    Message,
    Confirm,
    Validate,
    GoTop,
    TooltipApp,
    Copyright,
    LazyLoad,
} = require('zhf.g-ui/dist/js/commons_dom/g-common/index.js');

class Super {
    constructor(json) {
        const self = this;
        self.axios = axios;
        self.jsonp = jsonp;
        self.opts = extend({
            lazyload: {
                isInitRender: false,
            },
        }, json);
        self.init();
    }

    // (初)初始化数据
    init() {
        const self = this;
        // window.addEventListener('load', function () {
        // setTimeout(function () { // 不加定时器和window的load事件，即使是js渲染的结构，chrome浏览器回退也可以回到指定位置。
        self.renderHeader();
        self.power();
        self.renderFooter();
        // }, 0);
        // });
    }

    // (功)(覆)功能(这个方法需要在子类型里被覆盖掉)
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
        self.lazyload = new LazyLoad(self.opts.lazyload);

        // Vue
        const Vue = require('vue');
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
        new GoTop({
            wrap: '.g-go-top-wrap',
        });

        // 版权
        if (dataInfo && dataInfo.isShowCopyright) {
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
        // const spacingLoading = document.querySelector('#spacing-loading');
        // if (spacingLoading) {
        //     spacingLoading.parentNode.removeChild(spacingLoading);
        // }
    }
}

module.exports = Super;
