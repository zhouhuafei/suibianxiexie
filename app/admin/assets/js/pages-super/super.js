require('../../scss/commons/common.scss');

class Super {
    constructor(json) {
        const self = this;
        self.tools = require('zhf.tools'); // 工具方法集合
        self.applications = require('zhf.applications'); // 应用方法集合
        self.axios = require('../api/axios'); // axios
        self.jsonp = require('../api/jsonp'); // jsonp
        self.Dialog = require('../components-dom/g-dialog'); // 弹窗组件
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

        // 菜单
        (function () {
            const btn = document.querySelectorAll('.g-menu-item-title');
            const activeClass = 'g-menu-item-active';
            btn.forEach(function (v) {
                v.addEventListener('click', function () {
                    // btn.forEach(function (v) {
                    //     v.parentNode.classList.remove(activeClass);
                    // });
                    this.parentNode.classList.toggle(activeClass);
                });
            });
        })();

        // 账号退出
        (function () {
            const btn = document.querySelector('.js-logout');
            const api = self.dataInfo.api;
            const routes = self.dataInfo.routes;
            const Dialog = self.Dialog;
            btn && btn.addEventListener('click', function () {
                new Dialog({
                    config: {
                        type: 'confirm', // 默认是提示框
                        confirm: {
                            content: '确认退出账号？',
                        },
                    },
                    callback: {
                        confirm: function () {
                            self.axios({
                                url: api.logout.route,
                                method: 'post',
                            }).then(function (json) {
                                if (json.status === 'success') {
                                    window.location.href = routes['login'].route;
                                }
                            });
                        },
                    },
                });
            });
        })();

        // input图标相关的操作
        (function () {
            // 刷新验证码
            const refreshVerifyCode = function () {
                const img = this;
                self.axios({
                    url: self.dataInfo.api['verify-code-canvas'].route,
                }).then(function (json) {
                    if (json.status === 'success') {
                        img.src = json.result.data[0].base64;
                    }
                });
            };
            const verifyCode = document.querySelectorAll('.g-verify-code-canvas');
            verifyCode.forEach(function (v) {
                v.querySelector('img').addEventListener('click', refreshVerifyCode);
            });

            // 刷新输入框
            document.querySelectorAll('.g-input-icon.iconfont.icon-clear').forEach(function (v) {
                v.addEventListener('click', function () {
                    const parent = this.parentNode;
                    const input = parent.querySelector('.g-input-input');
                    if (input) {
                        input.value = '';
                    }
                    const verifyCode = parent.querySelector('.g-verify-code-canvas img');
                    if (verifyCode) {
                        refreshVerifyCode.call(verifyCode);
                    }
                });
            });

            // 密码是否可视
            document.querySelectorAll('.g-input-icon.iconfont.icon-eye').forEach(function (v) {
                v.addEventListener('click', function () {
                    const parent = this.parentNode;
                    const input = parent.querySelector('.g-input-input');
                    if (this.classList.contains('icon-eye')) {
                        this.classList.remove('icon-eye');
                        this.classList.add('icon-eye-on');
                        input && (input.type = 'text');
                    } else {
                        this.classList.remove('icon-eye-on');
                        this.classList.add('icon-eye');
                        input && (input.type = 'password');
                    }
                });
            });
        })();
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
            wrap: '.page-go-top-wrap',
        });

        // 版权
        if (dataInfo && dataInfo.isShowCopyright) {
            const Copyright = require('../components-dom/g-copyright');
            new Copyright({
                wrap: '.page-copyright-wrap',
            });
        }

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
