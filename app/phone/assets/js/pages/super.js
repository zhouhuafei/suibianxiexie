require('../../scss/commons/common.scss');

class Super {
    constructor(json) {
        const self = this;
        self.tools = require('../utils/tools'); // 工具方法集合
        self.applications = require('../utils/applications'); // 应用方法集合
        self.axios = require('../api/axios'); // ajax
        self.opts = self.tools.extend({
            defaults: {},
            inherits: json,
        });
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
    }

    // (渲)渲染
    renderFooter() {
        const self = this;
        const gDataInfo = self.dataInfo;

        // 版权
        if (gDataInfo && gDataInfo.isShowCopyright) {
            const Copyright = require('../components/g-copyright');
            new Copyright({
                wrap: '.page-copyright-wrap',
            });
        }

        // 底部导航
        if (gDataInfo && gDataInfo.footerNav) {
            const Footer = require('../components/g-footer-nav');
            gDataInfo.footerNav.wrap = '.page-footer-nav-wrap';
            new Footer(gDataInfo.footerNav);
        }

        // 返回顶部
        const GoTop = require('../components/g-go-top');
        new GoTop({
            wrap: '.page-go-top-wrap',
        });

        // 延迟加载
        const LazyLoad = require('../components/g-lazy-load');
        self.lazyLoad = new LazyLoad();
    }
}

module.exports = Super;
