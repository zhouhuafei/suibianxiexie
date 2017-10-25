require('../../scss/commons/common.scss');

class Super {
    constructor(json) {
        const self = this;
        self.tools = require('../utils/tools'); // 工具方法集合
        self.applications = require('../utils/applications'); // 应用方法集合
        self.axios = require('../api/axios'); // axios
        self.jsonp = require('../api/jsonp'); // jsonp
        self.opts = self.tools.extend({
            defaults: {
                lazyload: {
                    isInitRender: false,
                },
            },
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
        console.log('dataInfo:', this.dataInfo);
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

        // 延迟加载
        const LazyLoad = require('../components-dom/g-lazy-load');
        self.lazyload = new LazyLoad(self.opts.lazyload);
    }

    // (渲)渲染
    renderFooter() {
        const self = this;
        const gDataInfo = self.dataInfo;

        // 返回顶部
        const GoTop = require('../components-dom/g-go-top');
        new GoTop({
            wrap: '.page-go-top-wrap',
        });

        // 版权
        if (gDataInfo && gDataInfo.isShowCopyright) {
            const Copyright = require('../components-dom/g-copyright');
            new Copyright({
                wrap: '.page-copyright-wrap',
            });
        }

        // 底部导航
        if (gDataInfo && gDataInfo.footerNav) {
            const Footer = require('../components-dom/g-footer-nav');
            gDataInfo.footerNav.wrap = '.page-footer-nav-wrap';
            new Footer(gDataInfo.footerNav);
        }

        // 延迟加载
        self.lazyload.render();
    }
}

module.exports = Super;
