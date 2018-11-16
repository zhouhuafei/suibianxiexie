require('../../scss/commons/common.scss');
const extend = require('zhf.extend');
const ajax = require('../api/ajax');
const axios = require('../api/axios');
const jsonp = require('../api/jsonp');
const strTo = require('zhf.str-to-num');
const qr = require('qr-image');
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
        this.ajax = ajax;
        this.axios = axios;
        this.jsonp = jsonp;
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

        // 非生产环境
        if (!self.dataInfo.isProduction) {
            window.dataInfo = self.dataInfo;
        }

        // 延迟加载 power方法里如果有切换也使用到延迟加载 那么放在尾部就无解了 放在这里power里可以调用self.lazyload.render方法触发
        self.lazyload = new LazyLoad(self.opts.lazyload);

        // 菜单
        (function () {
            const btn = document.querySelectorAll('.g-menu-item-title');
            const activeClass = 'g-menu-item_active';
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
            const btn = document.querySelector('.js-g-logout');
            const api = self.dataInfo.api;
            const routes = self.dataInfo.routes;
            btn && btn.addEventListener('click', function () {
                new Confirm({
                    config: {
                        content: '确认退出账号？',
                    },
                    callback: {
                        confirm: function () {
                            self.axios({
                                url: api.logout.route,
                                method: 'POST',
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
                        img.src = json.result.base64;
                    }
                });
            };
            $(document).on('click', '.g-verify-code-canvas img', refreshVerifyCode);

            // 刷新输入框
            $(document).on('click', '.g-form-body-content-icon.iconfont.icon-clear', function () {
                const parent = $(this).closest('.g-form')[0];
                const input = parent.querySelector('.g-input');
                if (input) {
                    input.value = '';
                }
                const textarea = parent.querySelector('.g-textarea');
                if (textarea) {
                    textarea.value = '';
                }
                const verifyCode = parent.querySelector('.g-verify-code-canvas img');
                if (verifyCode) {
                    refreshVerifyCode.call(verifyCode);
                }
            });

            // 密码是否可视
            $(document).on('click', '.g-form-body-content-icon.iconfont.icon-eye_off, .g-form-body-content-icon.iconfont.icon-eye', function () {
                const parent = $(this).closest('.g-form')[0];
                const input = parent.querySelector('.g-input');
                if (this.classList.contains('icon-eye_off')) {
                    this.classList.remove('icon-eye_off');
                    this.classList.add('icon-eye');
                    input && (input.type = 'text');
                } else {
                    this.classList.remove('icon-eye');
                    this.classList.add('icon-eye_off');
                    input && (input.type = 'password');
                }
            });
        })();

        // input自动纠正的操作
        (function () {
            // 格式化成正整数
            $(document).on('blur', '.js-g-positive-integer', function () {
                this.value = strTo.toPositiveInteger(this.value);
            });
            // 格式化成保留2位小数的浮点数
            $(document).on('blur', '.js-g-positive-float', function () {
                this.value = strTo.toPositiveFloat(this.value);
            });
        })();

        // 表单验证
        this.validateInput = new Validate({element: '.js-validate-form'});
        // 对submit进行拦截
        $(document).on('submit', 'form', function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            const form = this;
            if (!self.validateInput.isAllPassValidate()) { // 防止验证未通过就提交
                return;
            }
            if (!form.isSubmitting) { // 防止重复提交
                form.isSubmitting = true;
                self.axios({
                    url: form.action,
                    // isHandleSuccess: true,
                    method: form.dataset.method || 'GET',
                    data: $(form).serialize(),
                    callbackSuccess: function () { // 请求成功的回调
                        typeof form.callbackSuccess === 'function' && form.callbackSuccess();
                    },
                    callbackFailure: function () { // 请求失败的回调
                        typeof form.callbackFailure === 'function' && form.callbackFailure();
                    },
                    callbackComplete: function () { // 请求完成的回调
                        typeof form.callbackComplete === 'function' && form.callbackComplete();
                        delete form.isSubmitting;
                    },
                });
            }
        });

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
            const qrDom = document.querySelector('.g-qr-code-svg');
            if (qrDom) {
                qrDom.innerHTML = qr.imageSync(window.location.href, {type: 'svg'});
            }
        }

        // 返回顶部
        new GoTop({wrap: '.page-go-top-wrap'});

        // 版权
        if (dataInfo && dataInfo.isShowCopyright) {
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

        // 工具提示框(文本提示框)的应用
        new TooltipApp({element: '.js-g-tooltip', eventType: 'mouseover', positionLocation: 'top-right'});
    }
}

module.exports = Super;
