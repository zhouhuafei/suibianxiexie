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
        window.addEventListener('load', function () {
            setTimeout(function () {

                //base函数测试
                (function () {
                    var Select = require('../function/select');
                    //测试全选
                    new Select({
                        items: '.g-checkbox-checkbox',
                        callback: {
                            click: function click(obj) {
                                console.log(obj);
                            }
                        }
                    });
                })();

                //验证
                (function () {
                    var ValidateInput = require('../modules/m-validate-form');
                    var aInput = [].slice.call(document.querySelectorAll('.m-validate-form'));
                    aInput.forEach(function (v) {
                        new ValidateInput({ element: v });
                    });
                })();

                require('../commons/common'); //每个页面都要用到的js(一定要放到最底部)
            }, 0);
        });
    }, { "../commons/common": 2, "../function/select": 6, "../modules/m-validate-form": 11 }], 2: [function (require, module, exports) {
        //版权
        (function () {
            if (pageInfo && pageInfo.config && pageInfo.config.isShowCopyright) {
                var Copyright = require('../modules/m-copyright');
                new Copyright();
            }
        })();

        //底部导航
        (function () {
            if (pageInfo && pageInfo.config && pageInfo.config.isShowFooterNav) {
                var Footer = require('../modules/m-footer-nav');
                new Footer(pageInfo.data.footerNav);
            }
        })();

        //延迟加载
        (function () {
            var LazyLoad = require('../modules/m-lazy-load');
            new LazyLoad();
        })();
    }, { "../modules/m-copyright": 7, "../modules/m-footer-nav": 8, "../modules/m-lazy-load": 9 }], 3: [function (require, module, exports) {
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
    }, {}], 4: [function (require, module, exports) {
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
    }, {}], 5: [function (require, module, exports) {
        var extend = require('../tools/extend'); //对象的扩展方法
        var getDomArray = require('../function/get-dom-array'); //获取原生的dom节点并转换成数组

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
    }, { "../function/get-dom-array": 4, "../tools/extend": 13 }], 6: [function (require, module, exports) {
        //全选,不选,反选
        var extend = require('../tools/extend'); //对象的扩展方法
        var getDomArray = require('../function/get-dom-array'); //获取原生的dom节点并转换成数组

        function Select(json) {
            this.opts = extend({
                defaults: {
                    items: null, //所有的被选项
                    callback: {
                        click: function click() {}
                    }
                },
                inherits: json
            });
            this.itemsDom = getDomArray({ element: this.opts.items });
            this.init();
        }

        //初始化
        Select.prototype.init = function () {
            this.power();
        };

        //不选
        Select.prototype.selectNothing = function () {
            this.itemsDom.forEach(function (v) {
                v.checked = false;
            });
        };

        //全选
        Select.prototype.selectAll = function () {
            this.itemsDom.forEach(function (v) {
                v.checked = true;
            });
        };

        //反选
        Select.prototype.selectReverse = function () {
            this.itemsDom.forEach(function (v) {
                v.checked = !v.checked;
            });
        };

        //当某一项被选中时,是否全部选项都被选中了
        Select.prototype.power = function () {
            var self = this;
            this.itemsDom.forEach(function (v1) {
                v1.addEventListener('click', function () {
                    var isCheckedAll = true; //是否全部的选项都被选中了(假设全部选中)
                    self.itemsDom.forEach(function (v2) {
                        if (v2.checked == false) {
                            isCheckedAll = false;
                        }
                    });
                    self.opts.callback.click({ element: this, isCheckedAll: isCheckedAll });
                });
            });
        };

        module.exports = Select;
    }, { "../function/get-dom-array": 4, "../tools/extend": 13 }], 7: [function (require, module, exports) {
        var createElement = require('../function/create-element'); //创建元素节点
        var constructorInherit = require('../tools/constructor-inherit'); //构造函数的继承(拷贝继承)
        var SuperType = require('../modules/m-super-type'); //超类型(子类型继承的对象)

        //子类型
        var SubType = constructorInherit({
            superType: SuperType,
            //默认参数(继承超类型)
            parameter: {
                //回调
                callback: {},
                //配置
                config: {},
                //数据
                data: {}
            }
        });

        //内部模块的创建(覆盖超类型)
        SubType.prototype.moduleDomCreate = function () {
            this.moduleDom = createElement({
                style: this.opts.config.moduleDomStyle,
                custom: this.opts.config.moduleDomCustomAttr,
                attribute: {
                    className: "m-copyright",
                    innerHTML: "\n                <div class=\"m-copyright-icon iconfont icon-banquan\"></div>\n                <div class=\"m-copyright-txt\">\u7248\u6743\u4FE1\u606F\u54DF</div>\n            "
                }
            });
        };

        //功能(覆盖超类型)
        SubType.prototype.power = function () {
            //功能重写待续...
        };

        module.exports = SubType;
    }, { "../function/create-element": 3, "../modules/m-super-type": 10, "../tools/constructor-inherit": 12 }], 8: [function (require, module, exports) {
        var createElement = require('../function/create-element'); //创建元素节点
        var constructorInherit = require('../tools/constructor-inherit'); //构造函数的继承(拷贝继承)
        var SuperType = require('../modules/m-super-type'); //超类型(子类型继承的对象)
        var jsonToArray = require('../tools/json-to-array');

        //子类型
        var SubType = constructorInherit({
            superType: SuperType,
            //默认参数(继承超类型)
            parameter: {
                //回调
                callback: {},
                //配置
                config: {},
                //数据
                data: {
                    /*
                     home: {
                     link: '/',
                     icon: 'icon-shouye',
                     txt: '首页',
                     isHighlight: false,
                     isShowMark: false
                     },
                     devGlobal: {
                     link: '/dev-global',
                     icon: 'icon-kaifa',
                     txt: 'g-global',
                     isHighlight: false,
                     isShowMark: false
                     },
                     devModule: {
                     link: '/dev-module',
                     icon: 'icon-kaifa',
                     txt: 'm-module',
                     isHighlight: false,
                     isShowMark: false
                     },
                     devWord: {
                     link: '/dev-word',
                     icon: 'icon-kaifa',
                     txt: '标准词汇',
                     isHighlight: false,
                     isShowMark: false
                     },
                     mine: {
                     link: '/mine',
                     icon: 'icon-wode',
                     txt: '我的',
                     isHighlight: false,
                     isShowMark: false
                     }
                     */
                }
            }
        });

        SubType.prototype.moduleDomCreate = function () {
            this.moduleDomClass = "m-footer-nav";
            var moduleDomHtml = "";
            var data = jsonToArray({ json: this.opts.data });
            data.forEach(function (value) {
                var v = value.value;
                var highlightClass = "";
                if (v.isHighlight) {
                    highlightClass = "m-footer-nav-body-active";
                }
                var markHtml = "";
                if (v.isShowMark) {
                    markHtml = "<div class=\"m-footer-nav-body-mark\"></div>";
                }
                moduleDomHtml += "\n            <a class=\"m-footer-nav-body " + highlightClass + "\" href=\"" + v.link + "\">\n                <div class=\"m-footer-nav-body-icon iconfont " + v.icon + "\"></div>\n                <div class=\"m-footer-nav-body-txt\">" + v.txt + "</div>\n                " + markHtml + "\n            </a>\n        ";
            });
            this.moduleDom = createElement({
                style: this.opts.config.moduleDomStyle,
                custom: this.opts.config.moduleDomCustomAttr,
                attribute: {
                    className: this.moduleDomClass,
                    innerHTML: "<div class=\"m-footer-nav-wrap\">" + moduleDomHtml + "</div>"
                }
            });
        };

        //功能(覆盖超类型)
        SubType.prototype.power = function () {
            //功能重写待续...
        };

        module.exports = SubType;
    }, { "../function/create-element": 3, "../modules/m-super-type": 10, "../tools/constructor-inherit": 12, "../tools/json-to-array": 14 }], 9: [function (require, module, exports) {
        var extend = require('../tools/extend'); //对象的扩展方法
        var offset = require('../function/offset'); //获取元素距离文档的left和top
        var getDomArray = require('../function/get-dom-array'); //获取原生的dom节点并转换成数组

        //延迟加载
        function LazyLoad(json) {
            this.opts = extend({
                defaults: {
                    element: '.m-lazy-load', //哪些元素进行懒加载
                    srcAttr: 'data-src', //默认获取哪里的属性值当做src
                    moreHeight: 0, //多加载一部分高度的图片
                    interval: 80 //函数节流时间(延迟时间)
                },
                inherits: json
            });
            this.clientHeight = document.documentElement.clientHeight;
            this.init();
        }
        LazyLoad.prototype.init = function () {
            this.render();
            this.power();
        };
        LazyLoad.prototype.render = function () {
            var self = this;
            var moreHeight = this.opts.moreHeight;
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var minTop = scrollTop - moreHeight;
            var maxTop = this.clientHeight + minTop + moreHeight;
            var src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUCB1jYAACAAAFAAGNu5vzAAAAAElFTkSuQmCC';
            var aDom = getDomArray({ element: this.opts.element });
            aDom.forEach(function (v) {
                if (v.tagName.toLowerCase() == 'img') {
                    if (!v.getAttribute('src')) {
                        v.src = src;
                    }
                    v.setAttribute('height', '100%');
                    v.setAttribute('width', '100%');
                }
            });
            aDom.forEach(function (v) {
                //排除那些被none掉的元素(被none掉的元素,通过offsetWidth和offsetHeight获取到的值是0)
                if (v.offsetWidth) {
                    var elementTop = offset({ element: v }).top;
                    var elementBottom = elementTop + v.offsetHeight;
                    //出现在可视区才进行处理
                    if (elementBottom >= minTop && elementTop <= maxTop) {
                        if (v.tagName.toLowerCase() == 'img') {
                            if (v.getAttribute(self.opts.srcAttr)) {
                                v.src = v.getAttribute(self.opts.srcAttr);
                            }
                            v.removeAttribute('height');
                            v.removeAttribute('width');
                        } else {
                            if (v.getAttribute(self.opts.srcAttr)) {
                                v.style.backgroundImage = 'url(' + v.getAttribute(self.opts.srcAttr) + ')';
                            }
                        }
                        v.classList.remove('m-lazy-load');
                        v.classList.add('m-lazy-load-active');
                    }
                }
            });
        };
        LazyLoad.prototype.power = function () {
            var self = this;
            var timer = null;
            window.addEventListener('scroll', function () {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    self.render();
                }, self.opts.interval);
            });
        };
        module.exports = LazyLoad;
    }, { "../function/get-dom-array": 4, "../function/offset": 5, "../tools/extend": 13 }], 10: [function (require, module, exports) {
        var extend = require('../tools/extend'); //对象的扩展方法
        var createElement = require('../function/create-element'); //创建元素节点
        var getDomArray = require('../function/get-dom-array'); //获取原生的dom节点并转换成数组

        //底层构造函数
        function SuperType(json) {
            //函数外部传来的参数(这个属性在其他模块的内部需要被重写)
            this.opts = extend({
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
            this.moduleDom = createElement({
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
            this.wrapDom = getDomArray({ element: this.opts.wrap })[0];
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
                    var dom = getDomArray({ element: renderMethod.child })[0];
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
    }, { "../function/create-element": 3, "../function/get-dom-array": 4, "../tools/extend": 13 }], 11: [function (require, module, exports) {
        var validate = require('../tools/validate'); //表单验证
        var getDomArray = require('../function/get-dom-array'); //获取原生的dom节点并转换成数组

        function ValidateForm(json) {
            this.opts = json || {};
            this.element = getDomArray({ element: this.opts.element })[0];
            this.hintClass = this.opts.hintClass || 'm-validate-form-hint';
            this.eventsType = this.opts.eventsType || 'blur';
            this.validateType = this.element.dataset.validate || 'undefined';
            this.validateHintTxt = this.element.dataset.hint || 'undefined';
            this.init();
        }
        ValidateForm.prototype.init = function () {
            this.render();
            this.validateEvents();
        };
        ValidateForm.prototype.render = function () {
            this.renderWrap();
            this.renderHint();
        };
        ValidateForm.prototype.renderWrap = function () {
            this.wrapDom = this.element.parentNode;
            if (this.wrapDom && getComputedStyle(this.wrapDom).position == 'static') {
                this.wrapDom.style.position = 'relative';
            }
        };
        ValidateForm.prototype.renderHint = function () {
            this.hintDom = document.createElement('span');
            this.hintDom.classList.add(this.hintClass);
        };
        ValidateForm.prototype.renderHintAdd = function (json) {
            //只有没被隐藏的才进行验证
            if (this.element.offsetWidth) {
                var opts = json || {};
                this.hintDom.innerHTML = opts.txt || '本项必填';
                this.wrapDom.appendChild(this.hintDom);
            }
        };
        ValidateForm.prototype.renderHintRemove = function () {
            var isHaveHintDom = this.wrapDom.querySelector("." + this.hintClass);
            if (isHaveHintDom) {
                this.wrapDom.removeChild(this.hintDom);
            }
        };
        ValidateForm.prototype.validateSave = function () {
            var self = this;
            var type = self.validateType.split(' ');
            var hintTxt = self.validateHintTxt.split(' ');
            var value = this.element.value;
            this.isValidateSuccess = true; //是否验证成功了
            type.forEach(function (v, i) {
                if (v == 'no-space' && self.isValidateSuccess) {
                    //设置了非空验证
                    validate.isSpace({
                        value: value,
                        success: function success() {
                            //空
                            self.renderHintAdd({ txt: hintTxt[i] });
                            self.isValidateSuccess = false;
                        },
                        fail: function fail() {
                            //非空
                            self.renderHintRemove();
                            self.isValidateSuccess = true;
                        }
                    });
                }
                if (v == 'no-zero' && self.isValidateSuccess) {
                    //设置了非零验证
                    validate.isZero({
                        value: value,
                        success: function success() {
                            //零
                            self.renderHintAdd({ txt: hintTxt[i] });
                            self.isValidateSuccess = false;
                        },
                        fail: function fail() {
                            //非零
                            self.renderHintRemove();
                            self.isValidateSuccess = true;
                        }
                    });
                }
                if (v == 'yes-integer' && self.isValidateSuccess) {
                    //设置了整数验证
                    validate.isInteger({
                        value: value,
                        success: function success() {
                            //整数
                            self.renderHintRemove();
                            self.isValidateSuccess = true;
                        },
                        fail: function fail() {
                            //非整数
                            self.renderHintAdd({ txt: hintTxt[i] });
                            self.isValidateSuccess = false;
                        }
                    });
                }
            });
        };
        ValidateForm.prototype.validateEvents = function () {
            var self = this;
            if (self.element) {
                self.element.addEventListener(self.eventsType, function () {
                    self.validateSave();
                });
            }
        };

        module.exports = ValidateForm;
    }, { "../function/get-dom-array": 4, "../tools/validate": 16 }], 12: [function (require, module, exports) {
        var extend = require('../tools/extend'); //对象的扩展方法
        var objRemoveQuote = require('../tools/obj-remove-quote'); //对象移除引用

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
    }, { "../tools/extend": 13, "../tools/obj-remove-quote": 15 }], 13: [function (require, module, exports) {
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
    }, {}], 14: [function (require, module, exports) {
        //把json格式的对象转成数组
        function jsonToArray(json) {
            var opts = json || {};
            var obj = opts.json || {};
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

        module.exports = jsonToArray;
    }, {}], 15: [function (require, module, exports) {
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
    }, {}], 16: [function (require, module, exports) {
        //验证
        var validate = {
            //是不是空
            isSpace: function isSpace(json) {
                var opts = json || {};
                var success = opts.success || function () {
                    console.log('no find success callback');
                };
                var fail = opts.fail || function () {
                    console.log('no find fail callback');
                };
                var value = opts.value || " ";
                var valueTrim = value.trim();
                var b = false;
                if (valueTrim == '') {
                    b = true;
                    success();
                } else {
                    fail();
                }
                return b;
            },
            //是不是0
            isZero: function isZero(json) {
                var opts = json || {};
                var success = opts.success || function () {
                    console.log('no find success callback');
                };
                var fail = opts.fail || function () {
                    console.log('no find fail callback');
                };
                var value = opts.value || " ";
                var valueTrim = value.trim();
                var b = false;
                if (valueTrim == 0) {
                    b = true;
                    success();
                } else {
                    fail();
                }
                return b;
            },
            //是不是整数(包含0)
            isInteger: function isInteger(json) {
                var opts = json || {};
                var success = opts.success || function () {
                    console.log('no find success callback');
                };
                var fail = opts.fail || function () {
                    console.log('no find fail callback');
                };
                var value = opts.value || " ";
                var valueTrim = value.trim();
                var reg = /^\d+$/;
                var b = false;
                if (reg.test(valueTrim)) {
                    b = true;
                    success();
                } else {
                    fail();
                }
                return b;
            },
            //是不是保留了num位小数点
            isReservedDecimal: function isReservedDecimal(json) {
                var opts = json || {};
                var success = opts.success || function () {
                    console.log('no find success callback');
                };
                var fail = opts.fail || function () {
                    console.log('no find fail callback');
                };
                var num = opts.num || 2;
                var value = opts.value || " ";
                var valueTrim = value.trim();
                var reg = new RegExp("^\\d+\\.\\d{" + num + "}$");
                var b = false;
                if (reg.test(valueTrim)) {
                    b = true;
                    success();
                } else {
                    fail();
                }
                return b;
            }
        };

        module.exports = validate;
    }, {}] }, {}, [1]);