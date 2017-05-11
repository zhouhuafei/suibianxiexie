"use strict";

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);throw new Error("Cannot find module '" + o + "'");
            }var f = n[o] = { exports: {} };t[o][0].call(f.exports, function (e) {
                var n = t[o][1][e];return s(n ? n : e);
            }, f, f.exports, e, t, n, r);
        }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
        s(r[o]);
    }return s;
})({ 1: [function (require, module, exports) {
        //一些小方法
        var base = {
            offset: require('../function/offset'), //获取元素距离文档的left和top
            constructorInherit: require('../function/constructor-inherit'), //构造函数继承
            scrollTo: require('../function/scroll-to'), //滚动到
            whetherDisableScroll: require('../function/whether-disable-scroll'), //是否禁止浏览器滚动
            WhenScrollBottom: require('../function/when-scroll-bottom'), //当滚动到底部
            objToArray: require('../function/obj-to-array'), //把json格式的对象转成数组
            strLimit: require('../function/str-limit'), //字符串限制
            getDomArray: require('../function/get-dom-array'), //获取一组dom节点
            createElement: require('../function/create-element'), //创建元素节点
            extend: require('../function/extend') //对象扩展
        };
        module.exports = base;
    }, { "../function/constructor-inherit": 3, "../function/create-element": 4, "../function/extend": 5, "../function/get-dom-array": 6, "../function/obj-to-array": 8, "../function/offset": 9, "../function/scroll-to": 10, "../function/str-limit": 11, "../function/when-scroll-bottom": 12, "../function/whether-disable-scroll": 13 }], 2: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base');

        //超类型(子类型继承的对象)
        var SuperType = require('../modules/m-super-type');
        var Mask = require('../modules/m-mask');

        //子类型
        var SubType = base.constructorInherit({
            superType: SuperType,
            //默认参数(继承超类型)
            parameter: {
                //回调
                callback: {
                    moduleDomRenderBefore: function moduleDomRenderBefore(self) {
                        if (self.opts.config.type == 'confirm') {
                            if (self.opts.config.confirm.isShowMask) {
                                self.mask = new Mask({
                                    wrap: self.opts.wrap,
                                    config: {
                                        moduleDomIsShow: true,
                                        moduleDomRenderMethod: { method: 'insertBefore' }
                                    }
                                });
                            }
                            if (self.wrapDom && getComputedStyle(self.wrapDom).position == 'static') {
                                self.wrapDom.style.position = 'relative';
                            }
                        }
                    },
                    //确认
                    confirm: function confirm() {},
                    //取消
                    cancel: function cancel() {},
                    //关闭
                    close: function close() {}
                },
                //配置
                config: {
                    /*
                     * 弹窗类型
                     * `alert`  提示信息类型
                     * `confirm`    确认框类型
                     * */
                    type: "alert", //默认是提示框
                    /*
                     * 弹窗位置
                     * `center` 居中
                     * `bottom` 居下
                     * `top` 居上
                     * */
                    positionLocation: "center", //弹窗的定位位置    positionMethod定位方式强制fixed
                    //提示框
                    alert: {
                        time: 2000, //展示的时间
                        isShowIcon: true, //是否显示icon
                        icon: "icon-chenggong", //icon的class
                        content: "\u6210\u529F" //内容信息
                    },
                    //确认框
                    confirm: {
                        //点击确认是否关闭弹窗
                        isShowHeader: true, //是否显示头部
                        headerContent: "\u63D0\u793A:", //头部内容
                        isShowBody: true, //是否显示主体
                        bodyContent: "<div>\u786E\u5B9A\u8981\u6267\u884C\u8FD9\u4E2A\u64CD\u4F5C?</div>", //主体内容
                        isShowFooter: true, //是否显示尾部
                        footerContent: "", //尾部内容
                        isShowClose: true, //是否显示关闭按钮
                        closeContent: "<div class=\"iconfont icon-guanbi\"></div>", //关闭按钮的内容
                        isShowConfirm: true, //是否显示确认按钮
                        confirmContent: "\u786E\u8BA4", //确认按钮的内容
                        isShowCancel: true, //是否显示取消按钮
                        cancelContent: "\u53D6\u6D88", //取消按钮的内容
                        isCustom: false, //是否自定义
                        customContent: "", //自定义的内容
                        isShowIcon: true, //是否显示icon
                        icon: "icon-jinggao", //icon的类型
                        isShowMask: true, //是否显示遮罩
                        isHandHide: false //是否手动隐藏(一般只用于点击确认时)
                    }
                },
                //数据
                data: {}
            }
        });

        //内部模块的创建(覆盖超类型)
        SubType.prototype.moduleDomCreate = function () {
            var config = this.opts.config;
            var type = "m-dialog-" + config.type; //弹窗类型
            var positionLocation = "m-dialog-" + config.positionLocation; //弹窗的定位位置
            //弹窗结构
            var html = "\n        " + this.renderAlert() + "\n        " + this.renderConfirm() + "\n    ";
            this.moduleDom = base.createElement({
                style: this.opts.config.moduleStyle,
                custom: this.opts.config.moduleDomCustomAttr,
                attribute: {
                    className: "m-dialog " + type + " " + positionLocation,
                    innerHTML: html
                }
            });
        };

        //提示框
        SubType.prototype.renderAlert = function () {
            var config = this.opts.config;
            if (config.type != "alert") {
                return "";
            }
            var alert = config.alert;
            var htmlIcon = "";
            if (alert.isShowIcon) {
                htmlIcon = "<div class=\"m-dialog-alert-icon iconfont " + alert.icon + "\"></div>";
            }
            return "\n        " + htmlIcon + "\n        <div class=\"m-dialog-alert-txt\">" + alert.content + "</div>\n    ";
        };

        //确认框
        SubType.prototype.renderConfirm = function () {
            var config = this.opts.config;
            if (config.type != "confirm") {
                return "";
            }
            var confirm = config.confirm;
            var htmlHeader = "";
            if (confirm.isShowHeader) {
                htmlHeader = "<div class=\"m-dialog-header\">" + confirm.headerContent + "</div>";
            }
            var htmlBody = "";
            if (confirm.isShowBody) {
                var htmlIcon = "";
                if (confirm.isShowIcon) {
                    htmlIcon = "<div class=\"m-dialog-icon iconfont " + confirm.icon + "\"></div>";
                }
                var bodyClass = "m-dialog-body-system";
                var bodyContent = "\n            " + htmlIcon + "\n            <div class=\"m-dialog-txt\">" + confirm.bodyContent + "</div>\n        ";
                if (confirm.isCustom) {
                    bodyClass = "m-dialog-body-custom";
                    bodyContent = confirm.bodyContent;
                }
                htmlBody = "\n            <div class=\"m-dialog-body\">\n                <div class=\"" + bodyClass + "\">\n                    " + bodyContent + "\n                </div>\n            </div>\n        ";
            }
            var htmlFooter = "";
            if (confirm.isShowFooter) {
                var htmlCancel = "";
                if (confirm.isShowCancel) {
                    htmlCancel = "<div class=\"g-btn g-btn-cancel m-dialog-cancel\">" + confirm.cancelContent + "</div>";
                }
                var htmlConfirm = "";
                if (confirm.isShowConfirm) {
                    htmlConfirm = "<div class=\"g-btn g-btn-confirm m-dialog-confirm\">" + confirm.confirmContent + "</div>";
                }
                htmlFooter = "<div class=\"m-dialog-footer\">" + htmlCancel + htmlConfirm + "</div>";
            }
            var htmlClose = "";
            if (confirm.isShowClose) {
                htmlClose = "<div class=\"m-dialog-close\">" + confirm.closeContent + "</div>";
            }
            return "\n        " + htmlHeader + "\n        " + htmlBody + "\n        " + htmlFooter + "\n        " + htmlClose + " \n    ";
        };

        //功能(覆盖超类型)
        SubType.prototype.power = function () {
            var self = this;
            var config = this.opts.config;
            //提示框
            if (config.type == "alert") {
                setTimeout(function () {
                    self.hide();
                }, config.alert.time);
            }
            //确认框
            if (config.type == "confirm") {
                var close = this.moduleDom.querySelector('.m-dialog-close');
                close && close.addEventListener('click', function () {
                    self.hide();
                    self.opts.callback.close();
                });
                var cancel = this.moduleDom.querySelector('.m-dialog-cancel');
                cancel && cancel.addEventListener('click', function () {
                    self.hide();
                    self.opts.callback.cancel();
                });
                var confirm = this.moduleDom.querySelector('.m-dialog-confirm');
                confirm && confirm.addEventListener('click', function () {
                    if (!self.opts.config.confirm.isHandHide) {
                        self.hide();
                    }
                    self.opts.callback.confirm();
                });
            }
        };

        SubType.prototype.hide = function () {
            this.moduleDomHide();
            this.mask && this.mask.moduleDomHide();
        };

        module.exports = SubType;
    }, { "../base/base": 1, "../modules/m-mask": 14, "../modules/m-super-type": 15 }], 3: [function (require, module, exports) {
        var extend = require('../function/extend'); //对象的扩展方法
        var objRemoveQuote = require('../function/obj-remove-quote'); //对象移除引用

        //构造函数的继承(拷贝继承)
        function constructorInherit(json) {
            var opts = extend({
                defaults: {
                    superType: null, //继承哪个超类(这个必须传的是一个构造函数,或者不传值)
                    parameter: {} //默认参数(这个必须传的是一个对象,或者不传值)
                },
                inherits: json
            });
            //超类型(需要是个构造函数)
            var SuperType = opts.superType;
            //子类型的默认参数(需要是个对象)
            var parameter = opts.parameter;
            //如果超类型不存在
            if (Object.prototype.toString.call(SuperType).toLowerCase().slice(8, -1) != 'function') {
                console.log('no find SuperType or SuperType error');
                return false;
            }
            //子类型
            function SubType(json) {
                //子类型自身的属性
                /*
                 * 注意:
                 * defaults要防止对象的引用(如果不防止的话,会出现BUG)
                 * 例如 wrap的默认值是'.g-wrap'
                 * 第一次   var obj1=new Sub({wrap:'body'});   wrap的值是'body'
                 * 第二次   var obj2=new Sub();    这里按理说wrap的值应该是默认值'.g-wrap'
                 * 但是由于对象引用的原因,这里的值会变成'body'
                 * 因此这里要处理掉对象的引用,所以我使用了JSON的方法进行了阻止
                 * 但是JSON.stringify方法居然会过滤掉对象内部的所有函数,真是日了狗了
                 * 所以我就封装了一个移除对象引用的函数
                 * */
                this.opts = extend({
                    defaults: objRemoveQuote({ obj: parameter }),
                    inherits: json
                });
                //子类型继承超类型的属性
                opts.superType.call(this, this.opts);
            }

            //子类型继承超类型的方法
            for (var attr in SuperType.prototype) {
                if (SuperType.prototype.hasOwnProperty(attr)) {
                    SubType.prototype[attr] = SuperType.prototype[attr];
                }
            }
            return SubType;
        }

        module.exports = constructorInherit;
    }, { "../function/extend": 5, "../function/obj-remove-quote": 7 }], 4: [function (require, module, exports) {
        //创建元素节点
        function createElement(json) {
            var opts = json || {};
            opts.elementName = opts.elementName || 'div'; //标签名称
            opts.style = opts.style || ""; //style样式
            opts.custom = opts.custom || {}; //自定义属性
            opts.attribute = opts.attribute || {}; //普通属性,checked,selected
            var elementNode = document.createElement(opts.elementName); //元素节点
            if (opts.style) {
                elementNode.setAttribute('style', opts.style);
            }
            for (var attr1 in opts.custom) {
                if (opts.custom.hasOwnProperty(attr1)) {
                    elementNode.setAttribute('data-' + attr1, opts.custom[attr1]);
                }
            }
            for (var attr0 in opts.attribute) {
                if (opts.attribute.hasOwnProperty(attr0)) {
                    elementNode[attr0] = opts.attribute[attr0];
                }
            }
            return elementNode;
        }

        module.exports = createElement;
    }, {}], 5: [function (require, module, exports) {
        //对象的扩展方法
        function extend(json) {
            var opts = json || {};
            opts.defaults = opts.defaults || {}; //默认对象
            opts.inherits = opts.inherits || {}; //继承对像
            opts.isDeep = opts.isDeep == false ? opts.isDeep : true; //是否进行深拷贝(默认进行深拷贝)
            var defaultsType = Object.prototype.toString.call(opts.defaults).slice(8, -1).toLowerCase();
            var inheritsType = Object.prototype.toString.call(opts.inherits).slice(8, -1).toLowerCase();
            if (defaultsType == inheritsType && opts.isDeep) {
                if (defaultsType == 'object' || defaultsType == 'array') {
                    //当为对象或者为数组
                    for (var attr in opts.inherits) {
                        if (opts.inherits.hasOwnProperty(attr)) {
                            var attrDefaultsType = Object.prototype.toString.call(opts.defaults[attr]).slice(8, -1).toLowerCase();
                            var attrInheritsType = Object.prototype.toString.call(opts.inherits[attr]).slice(8, -1).toLowerCase();
                            if (attrDefaultsType == attrInheritsType && opts.isDeep) {
                                //类型相同
                                if (attrDefaultsType == 'object' || attrDefaultsType == 'array') {
                                    //当为对象或者为数组
                                    extend({ defaults: opts.defaults[attr], inherits: opts.inherits[attr] });
                                } else {
                                    opts.defaults[attr] = opts.inherits[attr];
                                }
                            } else {
                                //类型不同,直接后面的覆盖前面的
                                opts.defaults[attr] = opts.inherits[attr];
                            }
                        }
                    }
                } else {
                    opts.defaults = opts.inherits;
                }
            } else {
                opts.defaults = opts.inherits;
            }
            return opts.defaults;
        }
        // var obj1 = extend({
        //     defaults: {
        //         a: 'a',
        //         b: {
        //             b1: 'b1',
        //             b2: 'b2',
        //             b3: {
        //                 c1: 'c1'
        //             }
        //         }
        //     },
        //     inherits: {
        //         a: 0,
        //         b: {
        //             b2: 1,
        //             b3: {
        //                 c2: 2
        //             }
        //         }
        //     }
        // });
        // console.log(obj1);//{a: 0, b: {b1: 'b1', b2: 1, b3: {c1: 'c1', c2: 2}}}
        // var obj2 = extend({
        //     defaults: {
        //         a: [
        //             0,
        //             [9, 8, 7],
        //             {
        //                 arr: [
        //                     1,
        //                     2,
        //                     3,
        //                     [7, 9, 10],
        //                     {good: 'good'}
        //                 ]
        //             }
        //         ],
        //         b: [
        //             {a1: 'a1'},
        //             {a2: 'a2'}
        //         ]
        //     },
        //     inherits: {
        //         a: [
        //             1,
        //             [3, 1],
        //             {
        //                 arr: [
        //                     8,
        //                     8,
        //                     8,
        //                     [6, 8]
        //                 ]
        //             }
        //         ],
        //         b: [
        //             'what?',
        //             {b1: 'b1'},
        //             {b2: 'b2'}
        //         ]
        //     }
        // });
        // console.log(obj2);//{a: [1, [3, 1, 7],{arr: [8, 8, 8, [6, 8, 10], {good: 'good'}]}], b: ['what?', {a2: 'a2', b1: 'b1'}, {b2: 'b2'}]}

        module.exports = extend;
    }, {}], 6: [function (require, module, exports) {
        //获取原生的dom节点并转换成数组,传入的参数支持:1.原生的dom节点,2.原生的dom集合,3.css选择器
        function getDomArray(json) {
            var opts = json || {};
            var dom = [];
            var element = opts.element ? opts.element : false;
            if (element) {
                //如果是字符串
                if (Object.prototype.toString.call(element).slice(8, -1).toLowerCase() == 'string') {
                    dom = [].slice.call(document.querySelectorAll(element));
                }
                //如果是dom节点(一个元素)    原生的
                if (element.nodeType == 1) {
                    dom = [element];
                }
                /*
                 * 如果是dom集合(一组元素)    HtmlCollection(通过getElementsBy系列获取到的)
                 * 如果是dom集合(一组元素)    NodeList(通过querySelectorAll获取到的)
                 * */
                if (Object.prototype.toString.call(element).slice(8, -1).toLowerCase() == 'htmlcollection' || Object.prototype.toString.call(element).slice(8, -1).toLowerCase() == 'nodelist') {
                    dom = [].slice.call(element);
                }
            }
            return dom;
        }

        module.exports = getDomArray;
    }, {}], 7: [function (require, module, exports) {
        //移除对象引用
        function objRemoveQuote(json) {
            var opts = json || {};
            var obj = opts.obj; //这里一定不能给默认值
            var objType = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

            if (objType != 'object' && objType != 'array') {
                return obj;
            }
            var newObj = {};
            if (objType == 'array') {
                newObj = [];
            }
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) {
                    newObj[attr] = objRemoveQuote({ obj: obj[attr] });
                }
            }
            return newObj;
        }

        module.exports = objRemoveQuote;
    }, {}], 8: [function (require, module, exports) {
        //把json格式的对象转成数组
        function objToArray(json) {
            var opts = json || {};
            var obj = opts.obj || {};
            var arr = [];
            if (obj instanceof Array) {
                obj.forEach(function (v, i) {
                    arr.push([i, v]);
                });
            } else {
                for (var attr in obj) {
                    if (obj.hasOwnProperty(attr)) {
                        arr.push({ key: attr, value: obj[attr] });
                    }
                }
            }
            return arr;
        }

        module.exports = objToArray;
    }, {}], 9: [function (require, module, exports) {
        var extend = require('../function/extend'); //对象的扩展
        var getDomArray = require('../function/get-dom-array'); //获取一组dom节点

        //获取元素距离文档的left和top
        function offset(json) {
            var opts = extend({
                defaults: {
                    element: null
                },
                inherits: json
            });
            var top = 0;
            var left = 0;
            var element = getDomArray({ element: opts.element })[0];
            while (element) {
                top += element.offsetTop;
                left += element.offsetLeft;
                element = element.offsetParent;
            }
            return {
                top: top,
                left: left
            };
        }

        module.exports = offset;
    }, { "../function/extend": 5, "../function/get-dom-array": 6 }], 10: [function (require, module, exports) {
        //滚动到指定位置
        function scrollTo(json) {
            var opts = json || {};
            var to = opts.to || '0';
            var scale = 6;
            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
            var speed = 0;
            var timer = null;
            var fn = function fn() {
                speed = Math.ceil((scrollT - to) / scale);
                scrollT -= speed;
                window.scrollTo(0, scrollT);
                timer = requestAnimationFrame(fn);
                if (scrollT <= to * 1) {
                    cancelAnimationFrame(timer);
                }
            };
            requestAnimationFrame(fn);
        }

        module.exports = scrollTo;
    }, {}], 11: [function (require, module, exports) {
        //字符数量限制
        function strLimit(json) {
            var opts = json || {};
            var max = opts.max;
            var str = opts.str;
            if (!str) {
                return '';
            }
            var length = str.length;
            if (length > max) {
                str = str.substring(0, max);
            }
            return str;
        }

        module.exports = strLimit;
    }, {}], 12: [function (require, module, exports) {
        var extend = require('../function/extend');

        //当滚动到了浏览器的底部
        function WhenScrollBottom(json) {
            this.opts = extend({
                defaults: {
                    callback: {
                        success: function success() {},
                        fail: function fail() {}
                    },
                    interval: 80, //函数节流时间(延迟时间)
                    errorHeight: 0 //滚动到底部上面一定高度就算是滚动到底部了(误差高度)
                },
                inherits: json
            });
            this.isLoadOver = false; //数据是否加载完毕
            this.init();
        }

        WhenScrollBottom.prototype.init = function () {
            this.render();
            this.power();
        };

        WhenScrollBottom.prototype.render = function () {
            var callback = this.opts.callback;
            var allH = document.body.scrollHeight;
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var clientHeight = document.documentElement.clientHeight;
            if (scrollTop + clientHeight >= allH - this.opts.errorHeight && !this.isLoadOver) {
                this.isLoadOver = true;
                callback.success(this);
                /*
                 * 条件:当你拿到请求的数据之后
                 * 可能性:1.如果你的数据加载完毕了,你需要手动把isLoadOver开关变成true
                 * 可能性:2.如果你的数据尚未加载完毕,你需要手动把isLoadOver开关变成false
                 * */
            } else {
                callback.fail();
            }
        };

        WhenScrollBottom.prototype.power = function () {
            var self = this;
            var timer = null;
            window.addEventListener('scroll', function () {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    self.render();
                }, self.opts.interval);
            });
        };

        module.exports = WhenScrollBottom;
    }, { "../function/extend": 5 }], 13: [function (require, module, exports) {
        //是否禁止浏览器滚动
        function whetherDisableScroll() {
            var doc = document;
            return {
                //阻止冒泡
                stopPropagation: function stopPropagation(ev) {
                    ev.stopPropagation();
                },
                //阻止默认事件
                preventDefault: function preventDefault(ev) {
                    ev.preventDefault();
                },
                //阻止冒泡,阻止默认事件
                returnFalse: function returnFalse(ev) {
                    ev.preventDefault();
                    ev.stopPropagation();
                },
                //禁止滚动
                noScroll: function noScroll() {
                    doc.addEventListener('touchmove', this.preventDefault, false);
                    doc.documentElement.style.overflow = 'hidden';
                },
                //解除禁止浏览器滚动
                yesScroll: function yesScroll() {
                    doc.removeEventListener('touchmove', this.preventDefault, false);
                    doc.documentElement.style.overflow = 'auto';
                }
            };
        }

        module.exports = whetherDisableScroll;
    }, {}], 14: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base');

        //超类型(子类型继承的对象)
        var SuperType = require('../modules/m-super-type');

        //子类型
        var SubType = base.constructorInherit({
            superType: SuperType,
            //默认参数(继承超类型)
            parameter: {
                //回调
                callback: {
                    click: function click() {},
                    moduleDomRenderBefore: function moduleDomRenderBefore(self) {
                        if (self.wrapDom && getComputedStyle(self.wrapDom).position == 'static') {
                            self.wrapDom.style.position = 'relative';
                        }
                    }
                },
                //配置
                config: {
                    isTransparent: false, //是不是透明的(默认不透明)
                    moduleDomIsShow: false //内部模块是否显示(默认不显示)
                },
                //数据
                data: {}
            }
        });

        //内部模块的创建(覆盖超类型)
        SubType.prototype.moduleDomCreate = function () {
            var isTransparent = '';
            if (this.opts.config.isTransparent) {
                isTransparent = 'm-mask-transparent';
            }
            this.moduleDom = base.createElement({
                style: this.opts.config.moduleStyle,
                custom: this.opts.config.moduleDomCustomAttr,
                attribute: {
                    className: "m-mask " + isTransparent,
                    innerHTML: ""
                }
            });
        };

        //功能(覆盖超类型)
        SubType.prototype.power = function () {
            var self = this;
            this.moduleDom.addEventListener('click', function (ev) {
                self.opts.callback.click();
                ev.stopPropagation();
            });
        };

        module.exports = SubType;
    }, { "../base/base": 1, "../modules/m-super-type": 15 }], 15: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base');

        //底层构造函数
        function SuperType(json) {
            //函数外部传来的参数(这个属性在其他模块的内部需要被重写)
            this.opts = base.extend({
                //内部默认参数
                defaults: {
                    //父级
                    wrap: ".g-wrap", //这个仅支持传入选择器和原生dom节点
                    //回调
                    callback: {
                        //内部模块创建之前
                        moduleDomCreateBefore: function moduleDomCreateBefore(self) {
                            //内部模块创建之前的回调待续...
                        },
                        //内部模块创建之后
                        moduleDomCreateAfter: function moduleDomCreateAfter(self) {
                            //内部模块创建之后的回调待续...
                        },
                        //内部模块渲染之前
                        moduleDomRenderBefore: function moduleDomRenderBefore(self) {
                            //内部模块渲染之前的回调待续...
                        },
                        //内部模块渲染之后
                        moduleDomRenderAfter: function moduleDomRenderAfter(self) {
                            //内部模块渲染之后的回调待续...
                        },
                        //内部模块移除之前
                        moduleDomRemoveBefore: function moduleDomRemoveBefore(self) {
                            //内部模块移除之前的回调待续...
                        },
                        //内部模块移除之后
                        moduleDomRemoveAfter: function moduleDomRemoveAfter(self) {
                            //内部模块移除之后的回调待续...
                        },
                        //内部模块显示之前
                        moduleDomShowBefore: function moduleDomShowBefore(self) {
                            //内部模块显示之前的回调待续...
                        },
                        //内部模块显示之后
                        moduleDomShowAfter: function moduleDomShowAfter(self) {
                            //内部模块显示之后的回调待续...
                        },
                        //内部模块隐藏之前
                        moduleDomHideBefore: function moduleDomHideBefore(self) {
                            //内部模块隐藏之前的回调待续...
                        },
                        //内部模块隐藏之后
                        moduleDomHideAfter: function moduleDomHideAfter(self) {
                            //内部模块隐藏之后的回调待续...
                        },
                        //外部容器创建之前
                        wrapDomCreateBefore: function wrapDomCreateBefore(self) {
                            //外部容器创建之前的回调待续...
                        },
                        //外部容器创建之后
                        wrapDomCreateAfter: function wrapDomCreateAfter(self) {
                            //外部容器创建之后的回调待续...
                        },
                        //外部容器渲染之前
                        wrapDomRenderBefore: function wrapDomRenderBefore(self) {
                            //外部容器渲染之前的回调待续...
                        },
                        //外部容器渲染之后
                        wrapDomRenderAfter: function wrapDomRenderAfter(self) {
                            //外部容器渲染之后的回调待续...
                        },
                        //外部容器移除之前
                        wrapDomRemoveBefore: function wrapDomRemoveBefore(self) {
                            //外部容器移除之前的回调待续...
                        },
                        //外部容器移除之后
                        wrapDomRemoveAfter: function wrapDomRemoveAfter(self) {
                            //外部容器移除之后的回调待续...
                        }
                    },
                    //配置
                    config: {
                        //内部模块的自定义属性
                        moduleDomCustomAttr: {},
                        //内部模块插入到外部容器的方式
                        moduleDomRenderMethod: {
                            method: 'appendChild', //'appendChild','insertBefore'
                            child: null
                        },
                        moduleDomStyle: "", //内部模块的样式(写法和css相同)
                        moduleDomIsShow: true, //内部模块是否显示(默认显示)
                        moduleDomIsClearTimer: true //内部模块是否清除所有定时器(默认清除)
                    },
                    //数据
                    data: {}
                },
                //外部传入参数
                inherits: json
            });
            //函数内部自带的属性
            this.moduleDom = null; //内部的模块
            this.wrapDom = null; //内部模块的外部承载容器,如果没有也没关系,不过不往里面append罢了
            this.moduleDomTimer = {}; //内部模块的定时器存储(假设内部模块有定时器)
            this.init(); //初始化
        }

        //初始化
        SuperType.prototype.init = function () {
            this.render();
            this.power();
        };

        //渲染
        SuperType.prototype.render = function () {
            this.moduleDomRender();
            this.wrapDomRender();
        };

        //功能(这个方法在其他模块的内部需要被重写)
        SuperType.prototype.power = function () {
            //功能待续...
        };

        //内部模块的创建(这个方法在其他模块的内部需要被重写)
        SuperType.prototype.moduleDomCreate = function () {
            this.moduleDom = base.createElement({
                style: this.opts.config.moduleDomStyle,
                custom: this.opts.config.moduleDomCustomAttr,
                attribute: {
                    className: "m-super-type",
                    innerHTML: "\n                <div class=\"m-super-type-txt\">\u5468\u534E\u98DE\u7231\u4FAF\u4E3D\u6770,\u4FAF\u4E3D\u6770\u7231\u5468\u534E\u98DE</div>\n            "
                }
            });
        };

        //内部模块的渲染
        SuperType.prototype.moduleDomRender = function () {
            this.moduleDomRemove();
            var callback = this.opts.callback;
            callback.moduleDomCreateBefore(this);
            this.moduleDomCreate();
            callback.moduleDomCreateAfter(this);
        };

        //内部模块的移除
        SuperType.prototype.moduleDomRemove = function () {
            var callback = this.opts.callback;
            callback.moduleDomRemoveBefore(this);
            if (this.moduleDom && this.moduleDom.parentNode) {
                this.moduleDom.parentNode.removeChild(this.moduleDom);
            }
            this.moduleDomClearTimer();
            callback.moduleDomRemoveAfter(this);
        };

        //内部模块的定时器清除(假设内部模块有定时器)
        SuperType.prototype.moduleDomClearTimer = function () {
            if (this.opts.config.moduleDomIsClearTimer) {
                for (var attr in this.moduleDomTimer) {
                    if (this.moduleDomTimer.hasOwnProperty(attr)) {
                        clearInterval(this.moduleDomTimer[attr]);
                        clearTimeout(this.moduleDomTimer[attr]);
                    }
                }
            }
        };

        //内部模块的显示(显示隐藏和是否清除定时器无关)
        SuperType.prototype.moduleDomShow = function () {
            var callback = this.opts.callback;
            callback.moduleDomShowBefore(this);
            if (this.wrapDom) {
                this.opts.config.moduleDomIsShow = true;
                this.wrapDomRenderMethod();
            }
            callback.moduleDomShowAfter(this);
        };

        //内部模块的隐藏(显示隐藏和是否清除定时器无关)
        SuperType.prototype.moduleDomHide = function () {
            var callback = this.opts.callback;
            callback.moduleDomHideBefore(this);
            if (this.moduleDom.parentNode) {
                this.moduleDom.parentNode.removeChild(this.moduleDom);
                this.opts.config.moduleDomIsShow = false;
            }
            callback.moduleDomHideAfter(this);
        };

        //外部容器的创建
        SuperType.prototype.wrapDomCreate = function () {
            this.wrapDom = base.getDomArray({ element: this.opts.wrap })[0];
        };

        //外部容器的渲染
        SuperType.prototype.wrapDomRender = function () {
            var callback = this.opts.callback;
            callback.wrapDomCreateBefore(this);
            this.wrapDomCreate();
            callback.wrapDomCreateAfter(this);
            if (this.wrapDom) {
                callback.moduleDomRenderBefore(this);
                callback.wrapDomRenderBefore(this);
                this.wrapDomRenderMethod();
                callback.wrapDomRenderAfter(this);
                callback.moduleDomRenderAfter(this);
            }
        };

        //外部容器的渲染方式
        SuperType.prototype.wrapDomRenderMethod = function () {
            var config = this.opts.config;
            if (config.moduleDomIsShow) {
                var renderMethod = config.moduleDomRenderMethod;
                if (renderMethod.method == 'insertBefore') {
                    var dom = base.getDomArray({ element: renderMethod.child })[0];
                    if (dom) {
                        this.wrapDom.insertBefore(this.moduleDom, dom);
                    } else {
                        this.wrapDom.insertBefore(this.moduleDom, this.wrapDom.children[0]);
                    }
                }
                if (renderMethod.method == 'appendChild') {
                    this.wrapDom.appendChild(this.moduleDom);
                }
            }
        };

        //外部容器的移除
        SuperType.prototype.wrapDomRemove = function () {
            var callback = this.opts.callback;
            callback.wrapDomRemoveBefore(this);
            //先移除内部的模块
            this.moduleDomRemove();
            //再移除外部的容器
            if (this.wrapDom) {
                this.wrapDom.parentNode.removeChild(this.wrapDom);
            }
            callback.wrapDomRemoveAfter(this);
        };

        //获取内部模块的整体html结构
        SuperType.prototype.getModuleDomHtml = function () {
            return this.moduleDom.outerHTML;
        };

        module.exports = SuperType;
    }, { "../base/base": 1 }] }, {}, [2]);