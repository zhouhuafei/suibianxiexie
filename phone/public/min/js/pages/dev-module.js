"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
            constructorInherit: require('../function/constructor-inherit'), //构造函数继承
            createElement: require('../function/create-element'), //创建元素节点
            extend: require('../tools/extend') //对象扩展
        };
        module.exports = base;
    }, { "../function/constructor-inherit": 5, "../function/create-element": 6, "../tools/extend": 31 }], 2: [function (require, module, exports) {
        window.addEventListener('load', function () {
            setTimeout(function () {
                //ajax测试
                (function () {
                    var Ajax = require('../function/ajax');
                    // new Ajax({
                    //     callback: {},
                    //     config: {
                    //         url: '/api/getList'
                    //     },
                    //     data: {
                    //         hellow: 'hellow'
                    //     }
                    // })
                })();

                //base函数测试
                (function () {
                    var WhenScrollBottom = require('../function/when-scroll-bottom');
                    //测试滚动到底部loading
                    new WhenScrollBottom({
                        callback: {
                            success: function success(self) {
                                var Loading = require('../modules/m-loading');
                                var loading = new Loading({
                                    wrap: '.g-page',
                                    config: {
                                        status: 'loading'
                                    }
                                });
                                loading.moduleDomShow();
                                //self.isLoadOver = false;
                            }
                        }
                    });
                })();

                //slide切换
                (function () {
                    var Slide = require('../modules/m-slide');
                    new Slide({
                        wrap: '.page-slide',
                        data: {
                            items: [{
                                img: {
                                    width: 0,
                                    height: 0,
                                    url: 'http://img1.imgtn.bdimg.com/it/u=1056872014,4038868309&fm=23&gp=0.jpg'
                                },
                                link: ''
                            }, {
                                img: {
                                    width: 0,
                                    height: 0,
                                    url: 'http://img3.imgtn.bdimg.com/it/u=1732308780,3782498029&fm=23&gp=0.jpg'
                                },
                                link: ''
                            }, {
                                img: {
                                    width: 0,
                                    height: 0,
                                    url: 'http://img3.imgtn.bdimg.com/it/u=4027566086,3099254237&fm=23&gp=0.jpg'
                                },
                                link: ''
                            }, {
                                img: {
                                    width: 0,
                                    height: 0,
                                    url: 'http://img4.imgtn.bdimg.com/it/u=120609946,455952432&fm=23&gp=0.jpg'
                                },
                                link: ''
                            }, {
                                img: {
                                    width: 0,
                                    height: 0,
                                    url: 'http://img2.imgtn.bdimg.com/it/u=2763208243,961494673&fm=23&gp=0.jpg'
                                },
                                link: ''
                            }]
                        }
                    });
                })();

                //导航
                (function () {
                    var Navigation = require('../modules/m-navigation');
                    new Navigation({ wrap: '.page-navigation' });
                })();

                //弹窗测试
                (function () {
                    var Dialog = require('../modules/m-dialog');
                    new Dialog({
                        callback: {
                            confirm: function confirm() {
                                new Dialog({ config: { alert: { icon: 'icon-chenggong', content: '已确认' } } });
                            },
                            cancel: function cancel() {
                                new Dialog({ config: { alert: { icon: 'icon-chenggong', content: '已取消' } } });
                            },
                            close: function close() {
                                new Dialog({ config: { alert: { icon: 'icon-chenggong', content: '已关闭' } } });
                            }
                        },
                        config: {
                            type: 'confirm'
                        }
                    });
                })();

                //分页测试
                (function () {
                    var Pagination = require('../modules/m-pagination');
                    new Pagination({ wrap: '.page-pagination' });
                })();

                //没有数据
                (function () {
                    var NoData = require('../modules/m-no-data');
                    new NoData({ wrap: '.page-no-data' });
                })();

                //加载中
                (function () {
                    var Loading = require('../modules/m-loading');
                    var loading = new Loading({
                        config: {
                            status: 'loading'
                        }
                    });
                    loading.moduleDomShow();
                    var over = new Loading({
                        config: {
                            status: 'over'
                        }
                    });
                    over.moduleDomShow();
                })();

                //超类型模块测试
                (function () {
                    var SuperType = require('../modules/m-super-type');
                    new SuperType({ wrap: ".page-super-type" });
                    var SubType = require('../modules/m-sub-type');
                    new SubType({ wrap: ".page-super-type" });
                    var SuperTypeEs6 = require('../modules/m-super-type-es6');
                    new SuperTypeEs6({ wrap: ".page-super-type" });
                    var SubTypeEs6 = require('../modules/m-sub-type-es6');
                    new SubTypeEs6({ wrap: ".page-super-type" });
                })();

                //返回顶部
                (function () {
                    var GoTop = require('../modules/m-go-top');
                    new GoTop();
                })();

                //遮罩
                (function () {
                    var Mask = require('../modules/m-mask');
                    var mask = new Mask({
                        callback: {
                            click: function click() {
                                mask.moduleDomHide();
                            }
                        }
                    });
                    //mask.moduleDomShow();
                })();

                //单选开关
                (function () {
                    var Radio = require('../modules/m-radio-switch');
                    new Radio({
                        wrap: '.page-radio-switch',
                        callback: {
                            click: function click(json) {
                                console.log(json);
                            }
                        }
                    });
                })();

                //表格
                (function () {
                    var Table = require('../modules/m-table');
                    var table = new Table({
                        wrap: ".page-table",
                        data: {
                            header: [{
                                content: "<div>header0</div>"
                            }, {
                                content: "<div>header1</div>"
                            }, {
                                content: "<div>header2</div>"
                            }],
                            body: [[{
                                content: "<div>body0-0</div>"
                            }, {
                                content: "<div>body1-0</div>"
                            }, {
                                content: "<div>body2-0</div>"
                            }], [{
                                content: "<div>body0-1</div>"
                            }, {
                                content: "<div>body1-1</div>"
                            }, {
                                content: "<div>body2-1</div>"
                            }], [{
                                content: "<div>body0-2</div>"
                            }, {
                                content: "<div>body1-2</div>"
                            }, {
                                content: "<div>body2-2</div>"
                            }]],
                            footer: ""
                        }
                    });
                })();

                //星评
                (function () {
                    var Star = require('../modules/m-star');
                    var star = new Star({
                        wrap: ".page-star",
                        callback: {
                            click: function click(json) {
                                console.log(json);
                            }
                        }
                    });
                })();

                require('../commons/common'); //每个页面都要用到的js(一定要放到最底部)
            }, 0);
        });
    }, { "../commons/common": 3, "../function/ajax": 4, "../function/when-scroll-bottom": 11, "../modules/m-dialog": 13, "../modules/m-go-top": 15, "../modules/m-loading": 17, "../modules/m-mask": 18, "../modules/m-navigation": 19, "../modules/m-no-data": 20, "../modules/m-pagination": 21, "../modules/m-radio-switch": 22, "../modules/m-slide": 23, "../modules/m-star": 24, "../modules/m-sub-type": 26, "../modules/m-sub-type-es6": 25, "../modules/m-super-type": 28, "../modules/m-super-type-es6": 27, "../modules/m-table": 29 }], 3: [function (require, module, exports) {
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
                new Footer();
            }
        })();

        //延迟加载
        (function () {
            var LazyLoad = require('../modules/m-lazy-load');
            new LazyLoad();
        })();
    }, { "../modules/m-copyright": 12, "../modules/m-footer-nav": 14, "../modules/m-lazy-load": 16 }], 4: [function (require, module, exports) {
        var extend = require('../tools/extend'); //对象的扩展
        var Dialog = require('../modules/m-dialog'); //弹窗
        var Loading = require('../modules/m-loading'); //加载中

        //ajax封装
        function Ajax(json) {
            this.opts = extend({
                defaults: {
                    //回调
                    callback: {
                        //上传期间持续不断地触发
                        uploadProgress: function uploadProgress() {},
                        //上传完成时触发
                        uploadLoad: function uploadLoad() {},
                        //在接收到响应数据的第一个字节时触发
                        loadStart: function loadStart() {},
                        //在接收响应期间持续不断地触发
                        progress: function progress() {},
                        //在请求发生错误时触发
                        error: function error() {},
                        //在因为调用abort()方法而终止请求时触发
                        abort: function abort() {},
                        //在接收到完整的响应数据时触发
                        load: function load() {},
                        //接收到完整的响应且响应状态为200
                        success: function success() {},
                        //接收到完整的响应且响应状态不为200
                        fail: function fail() {},
                        //在通信完成或者触发error、abort或load事件后触发
                        loadEnd: function loadEnd() {},
                        //等同于loadEnd
                        complete: function complete() {},
                        //请求超时
                        timeout: function timeout() {}
                    },
                    //配置
                    config: {
                        //ajax的配置
                        type: 'post', //请求类型(默认post)
                        url: '', //url
                        dataType: 'json', //数据类型(默认json)
                        async: true, //默认异步
                        timeout: 5000, //超时时间(默认3秒)
                        mark: '?', //当请求类型为get时,url后面的数据用什么符号开头url:'index.php',1.?ctl=seller&act=setting,2.#ctl=seller&act=setting
                        isShowLoading: true, //是否显示loading
                        isShowDialog: true, //是否显示弹窗
                        //loading的配置
                        loading: {
                            moduleDomStatus: 'loading',
                            moduleDomPosition: 'fixed'
                        },
                        //dialog的配置
                        dialog: {}
                    },
                    //数据
                    data: {}
                },
                inherits: json
            });
            this.loading = new Loading(this.opts.config.loading);
            this.dialog = new Dialog(this.opts.config.dialog);
            this.xhr = new XMLHttpRequest(); //xhr
            this.xhr.timeout = this.opts.config.timeout; //超时设置
            this.init();
        }
        Ajax.prototype.init = function () {
            this.events();
            this.open();
            this.send();
        };
        Ajax.prototype.open = function () {
            var opts = this.opts;
            if (opts.config.type.toLowerCase() == 'get') {
                //get
                var search = "";
                var num = 0;
                var data = opts.data;
                if (data) {
                    for (var attr in data) {
                        if (data.hasOwnProperty(attr)) {
                            if (num == 0) {
                                search += attr + "=" + data[attr];
                            } else {
                                search += "&" + attr + "=" + data[attr];
                            }
                            num++;
                        }
                    }
                }
                var url = opts.config.url + opts.config.mark + search;
                this.xhr.open(opts.config.type, url);
            } else if (opts.config.type.toLowerCase() == 'post') {
                //post
                this.xhr.open(opts.config.type, opts.config.url);
            } else {
                console.log('仅支持get和post请求');
                return false;
            }
        };
        Ajax.prototype.send = function () {
            var opts = this.opts;
            var data = opts.data;
            if (opts.config.type.toLowerCase() == 'get') {
                //get
                this.xhr.send(null);
            } else if (opts.config.type.toLowerCase() == 'post') {
                //post
                if (data) {
                    if (Object.prototype.toString.call(data).slice(8, -1).toLocaleLowerCase() == 'formdata') {
                        this.xhr.send(data);
                    } else {
                        var formData = new FormData();
                        for (var attr in data) {
                            if (data.hasOwnProperty(attr)) {
                                formData.append(attr, data[attr]);
                            }
                        }
                        this.xhr.send(formData);
                    }
                } else {
                    this.xhr.send(null);
                }
            } else {
                console.log('仅支持get和post请求');
                return false;
            }
        };
        Ajax.prototype.events = function () {
            var self = this;
            //上传期间持续不断地触发
            this.xhr.upload.addEventListener('progress', function (ProgressEvent) {
                self.uploadProgress();
                console.log(ProgressEvent, 'uploadProgress');
            });
            //上传完成时触发
            this.xhr.upload.addEventListener('load', function (ProgressEvent) {
                self.uploadLoad();
                console.log(ProgressEvent, 'uploadLoad');
            });
            //在接收到响应数据的第一个字节时触发
            this.xhr.addEventListener('loadstart', function (ProgressEvent) {
                self.loadStart();
                console.log(ProgressEvent, 'loadStart');
            });
            //在接收响应期间持续不断地触发
            this.xhr.addEventListener('progress', function (ProgressEvent) {
                self.progress();
                console.log(ProgressEvent, 'progress');
            });
            //在请求发生错误时触发
            this.xhr.addEventListener('error', function (ProgressEvent) {
                self.error();
                console.log(ProgressEvent, 'error');
            });
            //在因为调用abort()方法而终止请求时触发
            this.xhr.addEventListener('abort', function (ProgressEvent) {
                self.abort();
                console.log(ProgressEvent, 'abort');
            });
            //在接收到完整的响应数据时触发
            this.xhr.addEventListener('load', function (ProgressEvent) {
                self.load(ProgressEvent);
                console.log(ProgressEvent, 'load', 999);
            });
            //在通信完成或者触发error、abort或load事件后触发
            this.xhr.addEventListener('loadend', function (ProgressEvent) {
                self.loadEnd();
                console.log(ProgressEvent, 'loadend');
            });
            //请求超时
            this.xhr.addEventListener('timeout', function (ProgressEvent) {
                self.timeout();
                console.log(ProgressEvent, 'timeout');
            });
        };
        //上传期间持续不断地触发
        Ajax.prototype.uploadProgress = function () {
            this.opts.callback.uploadProgress();
        };
        //上传完成时触发
        Ajax.prototype.uploadLoad = function () {
            this.opts.callback.uploadLoad();
        };
        //在接收到响应数据的第一个字节时触发
        Ajax.prototype.loadStart = function () {
            this.opts.callback.loadStart();
        };
        //在接收响应期间持续不断地触发
        Ajax.prototype.progress = function () {
            this.opts.callback.progress();
        };
        //在请求发生错误时触发
        Ajax.prototype.error = function () {
            this.opts.callback.error();
        };
        //在因为调用abort()方法而终止请求时触发
        Ajax.prototype.abort = function () {
            this.opts.callback.abort();
        };
        //在接收到完整的响应数据时触发
        Ajax.prototype.load = function () {
            this.opts.callback.load();
        };
        //接收到完整的响应且响应状态为200
        Ajax.prototype.success = function () {
            this.opts.callback.success();
        };
        //接收到完整的响应且响应状态不为200
        Ajax.prototype.fail = function () {
            this.opts.callback.fail();
        };
        //在通信完成或者触发error、abort或load事件后触发
        Ajax.prototype.loadEnd = function () {
            this.opts.callback.loadEnd();
            this.complete();
        };
        //等同于loadEnd
        Ajax.prototype.complete = function () {
            this.opts.callback.complete();
        };
        //请求超时
        Ajax.prototype.timeout = function () {
            this.opts.callback.timeout();
        };
        //手动触发取消请求
        Ajax.prototype.triggerAbort = function () {
            if (this.xhr.abort) {
                this.xhr.abort();
            } else {
                console.log('浏览器不支持xhr2的abort');
            }
        };

        module.exports = Ajax;
    }, { "../modules/m-dialog": 13, "../modules/m-loading": 17, "../tools/extend": 31 }], 5: [function (require, module, exports) {
        var extend = require('../tools/extend'); //对象的扩展方法
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
    }, { "../function/obj-remove-quote": 8, "../tools/extend": 31 }], 6: [function (require, module, exports) {
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
    }, {}], 7: [function (require, module, exports) {
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
    }, {}], 8: [function (require, module, exports) {
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
    }, {}], 9: [function (require, module, exports) {
        var extend = require('../tools/extend'); //对象的扩展
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
    }, { "../function/get-dom-array": 7, "../tools/extend": 31 }], 10: [function (require, module, exports) {
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
        var extend = require('../tools/extend');

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
    }, { "../tools/extend": 31 }], 12: [function (require, module, exports) {
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
                callback: {},
                //配置
                config: {},
                //数据
                data: {}
            }
        });

        //内部模块的创建(覆盖超类型)
        SubType.prototype.moduleDomCreate = function () {
            this.moduleDom = base.createElement({
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
    }, { "../base/base": 1, "../modules/m-super-type": 28 }], 13: [function (require, module, exports) {
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
    }, { "../base/base": 1, "../modules/m-mask": 18, "../modules/m-super-type": 28 }], 14: [function (require, module, exports) {
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
                callback: {},
                //配置
                config: {},
                //数据
                data: {
                    items: [{
                        link: '/',
                        icon: 'icon-shouye',
                        txt: '首页',
                        isHighlight: false,
                        isShowMark: false
                    }, {
                        link: '/dev-global',
                        icon: 'icon-kaifa',
                        txt: 'g-global',
                        isHighlight: false,
                        isShowMark: false
                    }, {
                        link: '/dev-module',
                        icon: 'icon-kaifa',
                        txt: 'm-module',
                        isHighlight: true,
                        isShowMark: true
                    }, {
                        link: '/dev-word',
                        icon: 'icon-kaifa',
                        txt: '标准词汇',
                        isHighlight: false,
                        isShowMark: false
                    }, {
                        link: '/mine',
                        icon: 'icon-wode',
                        txt: '我的',
                        isHighlight: false,
                        isShowMark: false
                    }]
                }
            }
        });

        SubType.prototype.moduleDomCreate = function () {
            this.moduleDomClass = "m-footer-nav";
            var moduleDomHtml = "";
            this.opts.data.items.forEach(function (v) {
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
            this.moduleDom = base.createElement({
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
    }, { "../base/base": 1, "../modules/m-super-type": 28 }], 15: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base');
        var scrollTo = require('../function/scroll-to');

        //超类型(子类型继承的对象)
        var SuperType = require('../modules/m-super-type');

        //子类型
        var SubType = base.constructorInherit({
            superType: SuperType,
            //默认参数(继承超类型)
            parameter: {
                //回调
                callback: {},
                //配置
                config: {
                    showHeight: 200
                },
                //数据
                data: {}
            }
        });

        //内部模块的创建(覆盖超类型)
        SubType.prototype.moduleDomCreate = function () {
            this.moduleDom = base.createElement({
                style: this.opts.config.moduleDomStyle,
                custom: this.opts.config.moduleDomCustomAttr,
                attribute: {
                    className: "m-go-top",
                    innerHTML: "<div class=\"m-go-top-icon iconfont icon-shangjiantou\"></div>"
                }
            });
        };

        //功能(覆盖超类型)
        SubType.prototype.power = function () {
            var self = this;
            this.moduleDom.addEventListener('click', function () {
                scrollTo({ to: '0' });
            });
            window.addEventListener('scroll', function () {
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                if (scrollTop >= self.opts.config.showHeight) {
                    self.moduleDom.classList.add('m-go-top-active');
                } else {
                    self.moduleDom.classList.remove('m-go-top-active');
                }
            });
        };

        module.exports = SubType;
    }, { "../base/base": 1, "../function/scroll-to": 10, "../modules/m-super-type": 28 }], 16: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base');
        var offset = require('../function/offset');
        var getDomArray = require('../function/get-dom-array');

        //延迟加载
        function LazyLoad(json) {
            this.opts = base.extend({
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
    }, { "../base/base": 1, "../function/get-dom-array": 7, "../function/offset": 9 }], 17: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base');

        //超类型(子类型继承的对象)
        var SuperType = require('../modules/m-super-type');
        //var Mask = require('../modules/m-mask');

        //子类型
        var SubType = base.constructorInherit({
            superType: SuperType,
            //默认参数(继承超类型)
            parameter: {
                //回调
                callback: {
                    moduleDomRenderBefore: function moduleDomRenderBefore(self) {
                        // if (self.opts.config.isShowMask) {
                        //     new Mask({
                        //         wrap: self.moduleDom.querySelector('.m-loading-wrap'),
                        //         config: {
                        //             moduleDomIsShow: true,
                        //             moduleDomRenderMethod: {method: 'insertBefore'}
                        //         }
                        //     });
                        // }
                        if (self.wrapDom && getComputedStyle(self.wrapDom).position == 'static') {
                            self.wrapDom.style.position = 'relative';
                        }
                    }
                },
                //配置
                config: {
                    //isShowMask: false,  //是否显示遮罩(默认不显示)
                    status: 'loading', //加载状态 loading(加载中) over(加载完毕)
                    positionMethod: '', //模块的定位方式 'fixed'(相对于整个文档) 'absolute'(相对于外部容器)
                    positionLocation: 'center', //模块的定位位置
                    moduleDomIsShow: false //内部模块是否显示(默认不显示)
                },
                //数据
                data: {}
            }
        });

        //内部模块的创建(覆盖超类型)
        SubType.prototype.moduleDomCreate = function () {
            var config = this.opts.config;
            var moduleDomHtml = "";
            var moduleDomClass = "";
            var status = config.status;
            var positionMethod = config.positionMethod;
            var positionLocation = config.positionLocation;
            //加载中
            if (status == 'loading') {
                moduleDomClass = "m-loading-loading ";
                //相对文档居中
                if (positionMethod == 'fixed') {
                    moduleDomClass += "m-loading-fixed m-loading-" + positionLocation;
                }
                //相对容器居中
                if (positionMethod == 'absolute') {
                    moduleDomClass += "m-loading-absolute m-loading-" + positionLocation;
                }
                moduleDomHtml = "\n            <div class=\"m-loading-wrap\">\n                <div class=\"m-loading-loading-icon iconfont icon-jiazaizhong\"></div>\n            </div>\n        ";
            }
            //加载完毕
            if (status == 'over') {
                moduleDomClass = "m-loading-over ";
                //相对文档居中
                if (positionMethod == 'fixed') {
                    moduleDomClass += "m-loading-fixed m-loading-" + positionLocation;
                }
                //相对容器居中
                if (positionMethod == 'absolute') {
                    moduleDomClass += "m-loading-absolute m-loading-" + positionLocation;
                }
                moduleDomHtml = "\n            <div class=\"m-loading-wrap\">\n                <div class=\"m-loading-over-icon iconfont icon-meiyoushuju\"></div>\n                <div class=\"m-loading-over-txt\">\u6CA1\u6709\u6570\u636E\u4E86</div>\n            </div>\n        ";
            }
            //模块创建
            this.moduleDom = base.createElement({
                style: this.opts.config.moduleDomStyle,
                custom: this.opts.config.moduleDomCustomAttr,
                attribute: {
                    className: "m-loading " + moduleDomClass,
                    innerHTML: moduleDomHtml
                }
            });
        };

        //功能(覆盖超类型)
        SubType.prototype.power = function () {
            //功能重写待续...
        };

        module.exports = SubType;
    }, { "../base/base": 1, "../modules/m-super-type": 28 }], 18: [function (require, module, exports) {
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
    }, { "../base/base": 1, "../modules/m-super-type": 28 }], 19: [function (require, module, exports) {
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
                callback: {},
                //配置
                config: {},
                //数据
                data: {
                    items: [{
                        link: '/',
                        icon: 'icon-shouye',
                        txt: '首页',
                        isShowMark: false
                    }, {
                        link: '/dev-global',
                        icon: 'icon-kaifa',
                        txt: 'g-global',
                        isShowMark: false
                    }, {
                        link: '/dev-module',
                        icon: 'icon-kaifa',
                        txt: 'm-module',
                        isShowMark: true
                    }, {
                        link: '/dev-word',
                        icon: 'icon-kaifa',
                        txt: '标准词汇',
                        isShowMark: false
                    }, {
                        link: '/mine',
                        icon: 'icon-wode',
                        txt: '我的',
                        isShowMark: false
                    }]
                }
            }
        });

        //内部模块的创建(覆盖超类型)
        SubType.prototype.moduleDomCreate = function () {
            var data = this.opts.data;
            var items = data.items;
            var html = "";
            items.forEach(function (v) {
                var markHtml = "";
                if (v.isShowMark) {
                    markHtml = "<div class=\"m-navigation-mark\"></div>";
                }
                html += "\n            <a href=\"" + v.link + "\" class=\"m-navigation-wrap\">\n                <div class=\"m-navigation-icon iconfont " + v.icon + "\"></div>\n                <div class=\"m-navigation-txt\">" + v.txt + "</div>\n                " + markHtml + "\n            </a>\n        ";
            });
            this.moduleDom = base.createElement({
                style: this.opts.config.moduleDomStyle,
                custom: this.opts.config.moduleDomCustomAttr,
                attribute: {
                    className: "m-navigation",
                    innerHTML: html
                }
            });
        };

        //功能(覆盖超类型)
        SubType.prototype.power = function () {
            //功能重写待续...
        };

        module.exports = SubType;
    }, { "../base/base": 1, "../modules/m-super-type": 28 }], 20: [function (require, module, exports) {
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
                callback: {},
                //配置
                config: {
                    btn: {
                        isShowIcon: false
                    }
                },
                //数据
                data: {
                    icon: 'icon-meiyoushuju',
                    txt: '没有数据',
                    btn: {
                        icon: 'icon-shouye',
                        txt: '回首页',
                        link: '/'
                    }
                }
            }
        });

        //内部模块的创建(覆盖超类型)
        SubType.prototype.moduleDomCreate = function () {
            var data = this.opts.data;
            var btnIconHtml = "";
            if (this.opts.config.btn.isShowIcon) {
                btnIconHtml = "<div class=\"g-btn-icon iconfont " + data.btn.icon + "\"></div>";
            }
            this.moduleDom = base.createElement({
                style: this.opts.config.moduleStyle,
                custom: this.opts.config.moduleDomCustomAttr,
                attribute: {
                    className: "m-no-data",
                    innerHTML: "\n                <div class=\"m-no-data-icon iconfont " + data.icon + "\"></div>\n                <div class=\"m-no-data-txt\">" + data.txt + "</div>\n                <a class=\"m-no-data-btn g-btn g-btn-confirm\" href=\"" + data.btn.link + "\">\n                    " + btnIconHtml + "\n                    <div class=\"g-btn-txt\">" + data.btn.txt + "</div>\n                </a>\n            "
                }
            });
        };

        //功能(覆盖超类型)
        SubType.prototype.power = function () {
            //功能重写待续...
        };

        module.exports = SubType;
    }, { "../base/base": 1, "../modules/m-super-type": 28 }], 21: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base');

        //超类型(子类型继承的对象)
        var SuperType = require('../modules/m-super-type');

        //默认数据
        var defaultData = {
            nowCount: 10, //当前页的数据条数
            allCount: 100, //数据总条数
            nowPage: 1, //当前页
            allPage: null //总页数
        };
        defaultData.allPage = Math.ceil(defaultData.allCount / defaultData.nowCount);

        //子类型
        var SubType = base.constructorInherit({
            superType: SuperType,
            //默认参数(继承超类型)
            parameter: {
                //回调
                callback: {
                    //上一页的回调
                    prevPage: function prevPage() {},
                    //下一页的回调
                    nextPage: function nextPage() {},
                    //选择某一页的回调
                    selectPage: function selectPage() {}
                },
                //配置
                config: {},
                //数据
                data: defaultData
            }
        });

        //内部模块的创建(覆盖超类型)
        SubType.prototype.moduleDomCreate = function () {
            this.moduleDom = base.createElement({
                style: this.opts.config.moduleDomStyle,
                custom: this.opts.config.moduleDomCustomAttr,
                attribute: {
                    className: "m-pagination",
                    innerHTML: "\n                <div class=\"m-pagination-txt\">\u7B2C</div>\n                <div class=\"m-pagination-now-page\">\n                    <label class=\"g-select\">\n                        <span class=\"g-select-wrap\">\n                            <select class=\"g-select-select\">\n                                " + this.renderOption() + "\n                            </select>\n                            <span class=\"g-select-mark iconfont icon-select\"></span>\n                        </span>\n                    </label>\n                </div>\n                <div class=\"m-pagination-txt\">\u9875</div>\n                <a href=\"javascript:;\" class=\"m-pagination-btn m-pagination-btn-inactive iconfont icon-shangyiye\"></a>\n                <a href=\"javascript:;\" class=\"m-pagination-btn iconfont icon-xiayiye\"></a>\n            "
                }
            });
            this.prevDom = this.moduleDom.querySelectorAll('.m-pagination-btn')[0]; //上一页的按钮
            this.nextDom = this.moduleDom.querySelectorAll('.m-pagination-btn')[1]; //下一页的按钮
            this.btnInactiveClass = 'm-pagination-btn-inactive'; //上一页和下一页的禁用状态
            this.selectDom = this.moduleDom.querySelector('.m-pagination-now-page .g-select-select'); //选择某一页的按钮
        };

        //渲染第几页里面的页码
        SubType.prototype.renderOption = function () {
            var html = "";
            for (var i = 0; i < this.opts.data.allPage; i++) {
                html += "<option value=\"" + (i + 1) + "\">" + (i + 1) + "</option>";
            }
            return html;
        };

        //功能(覆盖超类型)
        SubType.prototype.power = function () {
            var self = this;
            var data = this.opts.data;
            if (data.nowPage == 1) {
                this.prevPageDisable();
            }
            if (data.nowPage == data.allPage) {
                this.nextPageDisable();
            }

            this.prevDom.addEventListener('click', function () {
                if (!this.classList.contains(self.btnInactiveClass)) {
                    self.prevPage();
                }
            });

            this.nextDom.addEventListener('click', function () {
                if (!this.classList.contains(self.btnInactiveClass)) {
                    self.nextPage();
                }
            });

            this.selectDom.addEventListener('change', function () {
                self.selectPage();
            });
        };

        //上一页
        SubType.prototype.prevPage = function () {
            var data = this.opts.data;
            if (data.nowPage > 1) {
                data.nowPage--;
                var oldChecked = this.selectDom.querySelector('option:checked');
                if (oldChecked.previousElementSibling) {
                    oldChecked.selected = false;
                    oldChecked.previousElementSibling.selected = true;
                }
                this.nextPageEnable();
                this.opts.callback.prevPage(this);
            }
            if (data.nowPage == 1) {
                this.prevPageDisable();
            }
            console.log(data);
        };

        //下一页
        SubType.prototype.nextPage = function () {
            var data = this.opts.data;
            if (data.nowPage < data.allPage) {
                data.nowPage++;
                var oldChecked = this.selectDom.querySelector('option:checked');
                if (oldChecked.nextElementSibling) {
                    oldChecked.selected = false;
                    oldChecked.nextElementSibling.selected = true;
                }
                this.prevPageEnable();
                this.opts.callback.nextPage(this);
            }
            if (data.nowPage == data.allPage) {
                this.nextPageDisable();
            }
            console.log(data);
        };

        //选择第几页
        SubType.prototype.selectPage = function () {
            var data = this.opts.data;
            data.nowPage = this.selectDom.value;
            this.nextPageEnable();
            this.prevPageEnable();
            if (data.nowPage == 1) {
                this.prevPageDisable();
            }
            if (data.nowPage == data.allPage) {
                this.nextPageDisable();
            }
            this.opts.callback.selectPage(this);
            console.log(data);
        };

        //上一页禁用
        SubType.prototype.prevPageDisable = function () {
            this.prevDom.classList.add(this.btnInactiveClass);
        };

        //上一页启用
        SubType.prototype.prevPageEnable = function () {
            this.prevDom.classList.remove(this.btnInactiveClass);
        };

        //下一页禁用
        SubType.prototype.nextPageDisable = function () {
            this.nextDom.classList.add(this.btnInactiveClass);
        };

        //下一页启用
        SubType.prototype.nextPageEnable = function () {
            this.nextDom.classList.remove(this.btnInactiveClass);
        };

        module.exports = SubType;
    }, { "../base/base": 1, "../modules/m-super-type": 28 }], 22: [function (require, module, exports) {
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
                    click: function click() {}
                },
                //配置
                config: {
                    isHand: false, //是否手动控制
                    status: 'on', //状态
                    txt: {
                        on: '已开启',
                        off: '已关闭'
                    }
                },
                //数据
                data: {}
            }
        });

        //内部模块的创建(覆盖超类型)
        SubType.prototype.moduleDomCreate = function () {
            var config = this.opts.config;
            this.moduleDomActiveClass = "m-radio-switch-active";
            var isOn = "";
            if (config.status == 'on') {
                isOn = this.moduleDomActiveClass;
            }
            this.moduleDom = base.createElement({
                style: config.moduleStyle,
                custom: config.moduleDomCustomAttr,
                attribute: {
                    className: "m-radio-switch " + isOn,
                    innerHTML: "\n                <div class=\"m-radio-switch-wrap\">\n                    <div class=\"m-radio-switch-round\"></div>\n                </div>\n                <div class=\"m-radio-switch-txt\">" + config.txt[config.status] + "</div>\n            "
                }
            });
        };

        //功能(覆盖超类型)
        SubType.prototype.power = function () {
            var self = this;
            var config = this.opts.config;
            this.moduleDom.addEventListener('click', function () {
                if (!config.isHand) {
                    if (!self.isOn()) {
                        self.on();
                    } else {
                        self.off();
                    }
                }
                self.opts.callback.click({ status: config.status });
            });
        };

        //是否处于开启状态
        SubType.prototype.isOn = function () {
            return this.moduleDom.classList.contains(this.moduleDomActiveClass);
        };

        //开启
        SubType.prototype.on = function () {
            var config = this.opts.config;
            if (!this.isOn()) {
                this.moduleDom.classList.add(this.moduleDomActiveClass);
                config.status = 'on';
                this.moduleDom.querySelector('.m-radio-switch-txt').innerHTML = "" + config.txt[config.status];
            }
        };

        //关闭
        SubType.prototype.off = function () {
            var config = this.opts.config;
            if (this.isOn()) {
                this.moduleDom.classList.remove(this.moduleDomActiveClass);
                config.status = 'off';
                this.moduleDom.querySelector('.m-radio-switch-txt').innerHTML = "" + config.txt[config.status];
            }
        };

        module.exports = SubType;
    }, { "../base/base": 1, "../modules/m-super-type": 28 }], 23: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base');
        var TouchSlide = require('../plugs/touch-slide');

        //超类型(子类型继承的对象)
        var SuperType = require('../modules/m-super-type');

        //子类型
        var SubType = base.constructorInherit({
            superType: SuperType,
            //默认参数(继承超类型)
            parameter: {
                //回调
                callback: {
                    startFun: function startFun() {},
                    endFun: function endFun() {}
                },
                //配置
                config: {
                    isShowHref: true, //是否有跳转
                    //TouchSlide插件的配置
                    touchSlide: {
                        slideCell: '', //外部容器,这个值会在底部进行覆盖,因为在这里没办法获取this
                        mainCell: '.m-slide-body', //切换元素的包裹层对象
                        titCell: '.m-slide-header .m-slide-items', //导航元素对象
                        effect: "leftLoop", //效果'left' 'leftLoop'
                        autoPlay: true, //自动播放
                        delayTime: 200, //切换一次的持续时间
                        interTime: 3000, //多久切换一次
                        startFun: function startFun() {
                            console.log('此处的函数会被覆盖,请在callback里执行回调');
                        },
                        endFun: function endFun() {
                            console.log('此处的函数会被覆盖,请在callback里执行回调');
                        },
                        defaultIndex: 0, //默认的当前位置索引
                        switchLoadClass: '.pre-load', //预加载的class
                        switchLoad: 'data-src' //预加载的属性
                    }
                },
                //数据
                data: {
                    items: [{
                        img: {
                            width: 0,
                            height: 0,
                            url: 'http://img1.imgtn.bdimg.com/it/u=1056872014,4038868309&fm=23&gp=0.jpg'
                        },
                        link: ''
                    }]
                }
            }
        });

        //内部模块的创建(覆盖超类型)
        SubType.prototype.moduleDomCreate = function () {
            this.moduleDom = base.createElement({
                style: this.opts.config.moduleDomStyle,
                custom: this.opts.config.moduleDomCustomAttr,
                attribute: {
                    className: "m-slide",
                    innerHTML: "\n                " + this.renderHeader() + "\n                " + this.renderBody() + "\n            "
                }
            });
        };

        SubType.prototype.renderHeader = function () {
            var self = this;
            var html = "";
            var data = self.opts.data;
            var className = "";
            data.items.forEach(function (v, i) {
                if (i == self.opts.config.touchSlide.defaultIndex) {
                    className = "on";
                }
                html += "<div class=\"m-slide-items " + className + "\"></div>";
            });
            return "<div class=\"m-slide-header\">" + html + "</div>";
        };

        SubType.prototype.renderBody = function () {
            var self = this;
            var html = "";
            var data = self.opts.data;
            data.items.forEach(function (v) {
                if (self.opts.config.isShowHref) {
                    html += "<a href=\"" + (v.link || 'javascript:;') + "\" class=\"m-slide-items pre-load\" data-src=\"" + v.img.url + "\"></a>";
                } else {
                    html += "<a class=\"m-slide-items pre-load\" data-src=\"" + v.img.url + "\"></a>";
                }
            });
            return "<div class=\"m-slide-body\">" + html + "</div>";
        };

        //功能(覆盖超类型)
        SubType.prototype.power = function () {
            var self = this;
            var callback = self.opts.callback;
            var config = self.opts.config;
            var touchSlide = config.touchSlide;
            touchSlide.slideCell = self.opts.wrap; //外部容器,必须是id
            touchSlide.startFun = function (i) {
                // 因为以下功能在插件本身进行了实现(本人对touch-slide插件进行了小修改),所以这里就注释了
                // var allImg = self.moduleDom.querySelectorAll('.m-slide-body .m-slide-items');
                // var nowIndex = ( i + 1);
                // if (touchSlide.effect == 'left') {
                //     nowIndex = i;
                // }
                // var nowImg = allImg[nowIndex];
                // var prevImg = allImg[nowIndex - 1];
                // var nextImg = allImg[nowIndex + 1];
                // nowImg.style.backgroundImage = `url(${nowImg.dataset.src})`;
                // prevImg && (prevImg.style.backgroundImage = `url(${prevImg.dataset.src})`);
                // nextImg && (nextImg.style.backgroundImage = `url(${nextImg.dataset.src})`);
                callback.startFun({ self: self, index: i });
            };
            touchSlide.endFun = function (i) {
                callback.endFun({ self: self, index: i });
            };
            TouchSlide(self.opts.config.touchSlide);
        };

        module.exports = SubType;
    }, { "../base/base": 1, "../modules/m-super-type": 28, "../plugs/touch-slide": 30 }], 24: [function (require, module, exports) {
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
                    click: function click(obj) {}
                },
                //配置
                config: {
                    isHaveEvent: true, //是否具备事件(默认具备)
                    allStarNum: 5, //所有的星星数
                    nowStarNum: 4 //当前被选择的星星数
                },
                //数据
                data: {}
            }
        });

        //内部模块的创建(覆盖超类型)
        SubType.prototype.moduleDomCreate = function () {
            var html = "";
            for (var i = 0; i < this.opts.config.allStarNum; i++) {
                var className = '';
                if (i < this.opts.config.nowStarNum) {
                    className = 'm-star-items-active';
                }
                html += "<div data-index=\"" + i + "\" class=\"iconfont icon-xingping m-star-items " + className + "\"></div>";
            }
            this.moduleDom = base.createElement({
                style: this.opts.config.moduleDomStyle,
                custom: this.opts.config.moduleDomCustomAttr,
                attribute: {
                    className: "m-star",
                    innerHTML: html
                }
            });
            this.opts.star = this.moduleDom.children;
        };

        //功能(覆盖超类型)
        SubType.prototype.power = function () {
            var self = this;
            if (this.opts.config.isHaveEvent) {
                this.moduleDom.addEventListener('click', function (ev) {
                    var target = ev.target;
                    if (target.classList.contains('m-star-items')) {
                        var index = target.dataset.index;
                        for (var j = 0; j < self.opts.config.allStarNum; j++) {
                            if (j <= index) {
                                self.opts.star[j].classList.add('m-star-items-active');
                            } else {
                                self.opts.star[j].classList.remove('m-star-items-active');
                            }
                        }
                        self.opts.callback.click({ element: this, index: index });
                    }
                });
            }
        };

        module.exports = SubType;
    }, { "../base/base": 1, "../modules/m-super-type": 28 }], 25: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base');

        //超类型(子类型继承的对象)
        var SuperType = require('../modules/m-super-type-es6');

        //子类型

        var SubType = function (_SuperType) {
            _inherits(SubType, _SuperType);

            function SubType(json) {
                _classCallCheck(this, SubType);

                //制定内部的默认值
                var _this = _possibleConstructorReturn(this, (SubType.__proto__ || Object.getPrototypeOf(SubType)).call(this, json));
                /*
                 * 继承超类型的属性和方法
                 * 就算使用Super.call继承属性,也会先执行内部的init函数,这个和es6的比较
                 * 我封装的es5继承函数constructor-inherit是先处理的参数this.opts,再进行的继承
                 * 这里的es6继承,是先进行的继承,再处理的参数,因为继承之前,子类无this属性
                 * 不管是es5的继承,还是es6的继承,都会执行函数内部的一切,例如
                 * 我封装的constructor-inherit继承属性时Super.call(this,this.opts),函数内部的init方法被执行了
                 * 执行前我处理了参数this.opts,所有一切还算稳定,我喜欢这个写法
                 * es6继承属性和方法用super(json),继承时函数内部的init方法也被执行了,执行后才处理的参数this.opts
                 * 后处理参数的话,即使我更新了默认的参数配置,覆盖了超类的方法,也获取不到最新参数上的数据,导致默认参数无效
                 * 因为函数执行super(json)的时候,init已经被调用了,数据是后更新的,所以不能获取到,因此
                 * 我需要清除内部模块,并进行重新调用,这点我很不喜欢,所以我现在的场景还是更适合es5的面向对象
                 * 注:init方法是我封装的超类型里的初始化方法,this.opts是超类型里的参数,参数我喜欢用对象的形式
                 * */


                _this.opts = base.extend({
                    defaults: _this.opts,
                    //inherits里放默认参数(继承超类型)
                    inherits: {
                        //回调
                        callback: {},
                        //配置
                        config: {},
                        //数据
                        data: {}
                    }
                });
                //接收外部的参数
                _this.opts = base.extend({
                    defaults: _this.opts,
                    inherits: json
                });
                /*
                 * 因为es6的继承是:子类型继承超类之后,才拥有this属性的原因,我要先移除一次,再重新生成
                 * 否则的话,上面的默认值不会生效
                 * */
                _this.moduleDomRemove();
                _this.init();
                return _this;
            }

            //内部模块的创建(覆盖超类型)


            _createClass(SubType, [{
                key: "moduleDomCreate",
                value: function moduleDomCreate() {
                    this.moduleDom = base.createElement({
                        style: this.opts.config.moduleDomStyle,
                        custom: this.opts.config.moduleDomCustomAttr,
                        attribute: {
                            className: "m-sub-type-es6",
                            innerHTML: "\n                    <div class=\"m-sub-type-es6-txt\">\u5468\u534E\u98DE\u7231\u4FAF\u4E3D\u6770,\u4FAF\u4E3D\u6770\u7231\u5468\u534E\u98DE</div>\n                "
                        }
                    });
                }

                //功能重写(覆盖超类型)

            }, {
                key: "power",
                value: function power() {
                    //功能重写待续...
                }
            }]);

            return SubType;
        }(SuperType);

        module.exports = SubType;
    }, { "../base/base": 1, "../modules/m-super-type-es6": 27 }], 26: [function (require, module, exports) {
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
                callback: {},
                //配置
                config: {},
                //数据
                data: {}
            }
        });

        //内部模块的创建(覆盖超类型)
        SubType.prototype.moduleDomCreate = function () {
            this.moduleDom = base.createElement({
                style: this.opts.config.moduleDomStyle,
                custom: this.opts.config.moduleDomCustomAttr,
                attribute: {
                    className: "m-sub-type",
                    innerHTML: "\n                <div class=\"m-sub-type-txt\">\u5468\u534E\u98DE\u7231\u4FAF\u4E3D\u6770,\u4FAF\u4E3D\u6770\u7231\u5468\u534E\u98DE</div>\n            "
                }
            });
        };

        //功能(覆盖超类型)
        SubType.prototype.power = function () {
            //功能重写待续...
        };

        module.exports = SubType;
    }, { "../base/base": 1, "../modules/m-super-type": 28 }], 27: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base');
        var getDomArray = require('../function/get-dom-array');

        //底层构造函数

        var SuperType = function () {
            function SuperType(json) {
                _classCallCheck(this, SuperType);

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


            _createClass(SuperType, [{
                key: "init",
                value: function init() {
                    this.render();
                    this.power();
                }

                //渲染

            }, {
                key: "render",
                value: function render() {
                    this.moduleDomRender();
                    this.wrapDomRender();
                }

                //功能(这个方法在其他模块的内部需要被重写)

            }, {
                key: "power",
                value: function power() {}
                //功能待续...


                //内部模块的创建(这个方法在其他模块的内部需要被重写)

            }, {
                key: "moduleDomCreate",
                value: function moduleDomCreate() {
                    this.moduleDom = base.createElement({
                        style: this.opts.config.moduleDomStyle,
                        custom: this.opts.config.moduleDomCustomAttr,
                        attribute: {
                            className: "m-super-type-es6",
                            innerHTML: "\n                    <div class=\"m-super-type-es6-txt\">\u5468\u534E\u98DE\u7231\u4FAF\u4E3D\u6770,\u4FAF\u4E3D\u6770\u7231\u5468\u534E\u98DE</div>\n                "
                        }
                    });
                }

                //内部模块的渲染

            }, {
                key: "moduleDomRender",
                value: function moduleDomRender() {
                    this.moduleDomRemove();
                    var callback = this.opts.callback;
                    callback.moduleDomCreateBefore(this);
                    this.moduleDomCreate();
                    callback.moduleDomCreateAfter(this);
                }

                //内部模块的移除

            }, {
                key: "moduleDomRemove",
                value: function moduleDomRemove() {
                    var callback = this.opts.callback;
                    callback.moduleDomRemoveBefore(this);
                    if (this.moduleDom && this.moduleDom.parentNode) {
                        this.moduleDom.parentNode.removeChild(this.moduleDom);
                    }
                    this.moduleDomClearTimer();
                    callback.moduleDomRemoveAfter(this);
                }

                //内部模块的定时器清除(假设内部模块有定时器)

            }, {
                key: "moduleDomClearTimer",
                value: function moduleDomClearTimer() {
                    if (this.opts.config.moduleDomIsClearTimer) {
                        for (var attr in this.moduleDomTimer) {
                            if (this.moduleDomTimer.hasOwnProperty(attr)) {
                                clearInterval(this.moduleDomTimer[attr]);
                                clearTimeout(this.moduleDomTimer[attr]);
                            }
                        }
                    }
                }

                //内部模块的显示(显示隐藏和是否清除定时器无关)

            }, {
                key: "moduleDomShow",
                value: function moduleDomShow() {
                    var callback = this.opts.callback;
                    callback.moduleDomShowBefore(this);
                    if (this.wrapDom) {
                        this.opts.config.moduleDomIsShow = true;
                        this.wrapDomRenderMethod();
                    }
                    callback.moduleDomShowAfter(this);
                }

                //内部模块的隐藏(显示隐藏和是否清除定时器无关)

            }, {
                key: "moduleDomHide",
                value: function moduleDomHide() {
                    var callback = this.opts.callback;
                    callback.moduleDomHideBefore(this);
                    if (this.moduleDom.parentNode) {
                        this.moduleDom.parentNode.removeChild(this.moduleDom);
                        this.opts.config.moduleDomIsShow = false;
                    }
                    callback.moduleDomHideAfter(this);
                }

                //外部容器的创建

            }, {
                key: "wrapDomCreate",
                value: function wrapDomCreate() {
                    this.wrapDom = getDomArray({ element: this.opts.wrap })[0];
                }

                //外部容器的渲染

            }, {
                key: "wrapDomRender",
                value: function wrapDomRender() {
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
                }

                //外部容器的渲染方式

            }, {
                key: "wrapDomRenderMethod",
                value: function wrapDomRenderMethod() {
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
                }

                //外部容器的移除

            }, {
                key: "wrapDomRemove",
                value: function wrapDomRemove() {
                    var callback = this.opts.callback;
                    callback.wrapDomRemoveBefore(this);
                    //先移除内部的模块
                    this.moduleDomRemove();
                    //再移除外部的容器
                    if (this.wrapDom) {
                        this.wrapDom.parentNode.removeChild(this.wrapDom);
                    }
                    callback.wrapDomRemoveAfter(this);
                }

                //获取内部模块的整体html结构

            }, {
                key: "getModuleDomHtml",
                value: function getModuleDomHtml() {
                    return this.moduleDom.outerHTML;
                }
            }]);

            return SuperType;
        }();

        module.exports = SuperType;
    }, { "../base/base": 1, "../function/get-dom-array": 7 }], 28: [function (require, module, exports) {
        //底层方法
        var base = require('../base/base');
        var getDomArray = require('../function/get-dom-array');

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
    }, { "../base/base": 1, "../function/get-dom-array": 7 }], 29: [function (require, module, exports) {
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
                callback: {},
                //配置
                config: {},
                //数据
                data: {
                    header: [{ content: 'undefined-header0' }, { content: 'undefined-header1' }, { content: 'undefined-header2' }],
                    body: [[{ content: 'undefined-body0-0' }, { content: 'undefined-body0-1' }, { content: 'undefined-body0-2' }]],
                    footer: ''
                }
            }
        });

        //内部模块的创建(覆盖超类型)
        SubType.prototype.moduleDomCreate = function () {
            this.moduleDom = base.createElement({
                style: this.opts.config.moduleDomStyle,
                custom: this.opts.config.moduleDomCustomAttr,
                attribute: {
                    className: "m-table",
                    innerHTML: "\n                <div class=\"m-table-header\">\n                    <div class=\"m-table-row\">\n                        " + this.moduleDomCreateHeader() + "\n                    </div>\n                </div>\n                <div class=\"m-table-body\">\n                    " + this.moduleDomCreateBody() + "\n                </div>\n                <div class=\"m-table-footer\">\n                    " + this.moduleDomCreateFooter() + "\n                </div>\n            "
                }
            });
        };

        SubType.prototype.moduleDomCreateHeader = function () {
            var html = "";
            this.opts.data.header.forEach(function (v) {
                html += "\n            <div class=\"m-table-col\">\n                <div class=\"m-table-col-wrap\">\n                    " + v.content + "\n                </div>\n            </div>\n        ";
            });
            return html;
        };

        SubType.prototype.moduleDomCreateBody = function () {
            var html = "";
            this.opts.data.body.forEach(function (v0) {
                var row = "";
                v0.forEach(function (v1) {
                    row += "\n                <div class=\"m-table-col\">\n                    <div class=\"m-table-col-wrap\">\n                        " + v1.content + "\n                    </div>\n                </div>\n            ";
                });
                html += "<div class=\"m-table-row\">" + row + "</div>";
            });
            return html;
        };

        SubType.prototype.moduleDomCreateFooter = function () {
            return this.opts.data.footer;
        };

        //功能(覆盖超类型)
        SubType.prototype.power = function () {
            //功能重写待续...
        };

        module.exports = SubType;
    }, { "../base/base": 1, "../modules/m-super-type": 28 }], 30: [function (require, module, exports) {
        /*!
         * TouchSlide v1.1
         * javascript触屏滑动特效插件，移动端滑动特效，触屏焦点图，触屏Tab切换，触屏多图切换等
         * 详尽信息请看官网：http://www.SuperSlide2.com/TouchSlide/
         *
         * Copyright 2013 大话主席
         *
         * 请尊重原创，保留头部版权
         * 在保留版权的前提下可应用于个人或商业用途
        
         * 1.1 宽度自适应（修复安卓横屏时滑动范围不变的bug）
         */

        /*
         * 本人对此文件进行了稍微改动,还请见谅
         * 1.支持传入class和dom节点
         * 2.样式修改成flex布局
         * 3.把一些不规范的语法警告提示修正
         * 4.添加预加载功能pre-load,去掉插件自带的懒加载功能
         * 5.给主体区域的切换每一项加上className
         * */

        var TouchSlide = function TouchSlide(a) {
            a = a || {};
            var opts = {
                slideCell: a.slideCell || "#touchSlide", //运行效果主对象，必须用id！，例如 slideCell:"#touchSlide"
                titCell: a.titCell || ".hd li", // 导航对象，当自动分页设为true时为“导航对象包裹层”
                mainCell: a.mainCell || ".bd", // 切换对象包裹层
                effect: a.effect || "left", // 效果，支持 left、leftLoop
                autoPlay: a.autoPlay || false, // 自动播放
                delayTime: a.delayTime || 200, // 效果持续时间
                interTime: a.interTime || 2500, // 自动运行间隔
                defaultIndex: a.defaultIndex || 0, // 默认的当前位置索引。0是第一个； defaultIndex:1 时，相当于从第2个开始执行
                titOnClassName: a.titOnClassName || "on", // 当前导航对象添加的className
                autoPage: a.autoPage || false, // 自动分页，当为true时titCell为“导航对象包裹层”
                prevCell: a.prevCell || ".prev", // 前一页按钮
                nextCell: a.nextCell || ".next", // 后一页按钮
                pageStateCell: a.pageStateCell || ".pageState", // 分页状态对象，用于显示分页状态，例如：2/3
                pnLoop: a.pnLoop == 'undefined ' ? true : a.pnLoop, // 前后按钮点击是否继续执行效果，当为最前/后页是会自动添加“prevStop”/“nextStop”控制样色
                startFun: a.startFun || null, // 每次切换效果开始时执行函数，用于处理特殊情况或创建更多效果。用法 satrtFun:function(i,c){ }； 其中i为当前分页，c为总页数
                endFun: a.endFun || null, // 每次切换效果结束时执行函数，用于处理特殊情况或创建更多效果。用法 endFun:function(i,c){ }； 其中i为当前分页，c为总页数
                switchLoadClass: a.switchLoadClass || '.pre-load', //预加载的class
                switchLoad: a.switchLoad || 'data-src' //预加载的属性
            };
            var slideCell = null;
            //如果是字符串
            if (Object.prototype.toString.call(opts.slideCell).slice(8, -1).toLowerCase() == 'string') {
                slideCell = document.querySelector(opts.slideCell);
            }
            //如果是dom节点(一个元素)    原生的
            if (opts.slideCell.nodeType == 1) {
                slideCell = opts.slideCell;
            }
            /*
             * 如果是dom集合(一组元素)    HtmlCollection(通过getElementsBy系列获取到的)
             * 如果是dom集合(一组元素)    NodeList(通过querySelectorAll获取到的)
             * */
            if (Object.prototype.toString.call(opts.slideCell).slice(8, -1).toLowerCase() == 'htmlcollection' || Object.prototype.toString.call(opts.slideCell).slice(8, -1).toLowerCase() == 'nodelist') {
                slideCell = opts.slideCell[0];
            }
            if (!slideCell) {
                return;
            }
            //简单模拟jquery选择器
            var obj = function obj(str, parEle) {
                str = str.split(" ");
                var par = [];
                parEle = parEle || document;
                var retn = [parEle];
                for (var attr in str) {
                    if (str.hasOwnProperty(attr)) {
                        if (str[attr].length != 0) {
                            par.push(str[attr]);
                        }
                    }
                }
                //去掉重复空格
                for (var i in par) {
                    if (par.hasOwnProperty(i)) {
                        if (retn.length == 0) {
                            return false;
                        }
                        var _retn = [];
                        for (var r in retn) {
                            if (retn.hasOwnProperty(r)) {
                                if (par[i][0] == "#") {
                                    _retn.push(document.getElementById(par[i].replace("#", "")));
                                } else if (par[i][0] == ".") {
                                    var tag = retn[r].getElementsByTagName('*');
                                    for (var j = 0; j < tag.length; j++) {
                                        var cln = tag[j].className;
                                        if (cln && cln.search(new RegExp("\\b" + par[i].replace(".", "") + "\\b")) != -1) {
                                            _retn.push(tag[j]);
                                        }
                                    }
                                } else {
                                    var tag2 = retn[r].getElementsByTagName(par[i]);
                                    for (var k = 0; k < tag2.length; k++) {
                                        _retn.push(tag2[k]);
                                    }
                                }
                            }
                        }
                        retn = _retn;
                    }
                }
                return retn.length == 0 || retn[0] == parEle ? false : retn;
            };
            // 创建包裹层
            var wrap = function wrap(el, v) {
                var tmp = document.createElement('div');
                tmp.innerHTML = v;
                tmp = tmp.children[0];
                var _el = el.cloneNode(true);
                tmp.appendChild(_el);
                el.parentNode.replaceChild(tmp, el);
                conBox = _el; // 重置conBox
                return tmp;
            };
            // class处理
            var addClass = function addClass(ele, className) {
                if (!ele || !className || ele.className && ele.className.search(new RegExp("\\b" + className + "\\b")) != -1) {
                    return;
                }
                ele.className += (ele.className ? " " : "") + className;
            };
            var removeClass = function removeClass(ele, className) {
                if (!ele || !className || ele.className && ele.className.search(new RegExp("\\b" + className + "\\b")) == -1) {
                    return;
                }
                ele.className = ele.className.replace(new RegExp("\\s*\\b" + className + "\\b", "g"), "");
            };
            //全局对象
            var effect = opts.effect;
            var prevBtn = obj(opts.prevCell, slideCell)[0];
            var nextBtn = obj(opts.nextCell, slideCell)[0];
            var pageState = obj(opts.pageStateCell)[0];
            var conBox = obj(opts.mainCell, slideCell)[0]; //内容元素父层对象
            if (!conBox) {
                return;
            }
            var conBoxSize = conBox.children.length;
            var navObj = obj(opts.titCell, slideCell); //导航子元素结合
            var navObjSize = navObj ? navObj.length : conBoxSize;
            /*字符串转换*/
            var index = parseInt(opts.defaultIndex);
            var delayTime = parseInt(opts.delayTime);
            var interTime = parseInt(opts.interTime);
            var autoPlay = !(opts.autoPlay == "false" || opts.autoPlay == false);
            var autoPage = !(opts.autoPage == "false" || opts.autoPage == false);
            var loop = !(opts.pnLoop == "false" || opts.pnLoop == false);
            var oldIndex = index;
            var inter = null; // autoPlay的setInterval
            var timeout = null; // leftLoop的setTimeout
            var endTimeout = null; //translate的setTimeout
            var startX = 0;
            var startY = 0;
            var distX = 0;
            var distY = 0;
            //var dist = 0; //手指滑动距离
            var isTouchPad = /hp-tablet/gi.test(navigator.appVersion);
            var hasTouch = 'ontouchstart' in window && !isTouchPad;
            var touchStart = hasTouch ? 'touchstart' : 'mousedown';
            var touchMove = hasTouch ? 'touchmove' : '';
            var touchEnd = hasTouch ? 'touchend' : 'mouseup';
            var slideW = conBox.parentNode.clientWidth; // mainCell滑动距离
            var twCell;
            var scrollY;
            var tempSize = conBoxSize;
            //处理分页
            if (navObjSize == 0) {
                navObjSize = conBoxSize;
            }
            if (autoPage) {
                navObjSize = conBoxSize;
                navObj = navObj[0];
                navObj.innerHTML = "";
                var str = "";

                if (opts.autoPage == true || opts.autoPage == "true") {
                    for (var i = 0; i < navObjSize; i++) {
                        str += "<li>" + (i + 1) + "</li>";
                    }
                } else {
                    for (var x = 0; x < navObjSize; x++) {
                        str += opts.autoPage.replace("$", x + 1);
                    }
                }
                navObj.innerHTML = str;
                navObj = navObj.children; //重置navObj
            }
            if (effect == "leftLoop") {
                tempSize += 2;
                conBox.appendChild(conBox.children[0].cloneNode(true));
                conBox.insertBefore(conBox.children[conBoxSize - 1].cloneNode(true), conBox.children[0]);
            }
            twCell = wrap(conBox, '<div class="tempWrap" style="height:inherit;overflow:hidden; position:relative;"></div>');
            conBox.style.cssText = "display:flex;width:" + tempSize * slideW + "px;" + "position:relative;overflow:hidden;padding:0;margin:0;";
            for (var y = 0; y < tempSize; y++) {
                conBox.children[y].style.cssText = "height:inherit;display:flex;align-items: center;justify-content: center;width:" + slideW + "px";
            }
            var doStartFun = function doStartFun() {
                if (typeof opts.startFun == 'function') {
                    opts.startFun(index, navObjSize);
                }
            };
            var doEndFun = function doEndFun() {
                if (typeof opts.endFun == 'function') {
                    opts.endFun(index, navObjSize);
                }
            };
            //动态设置滑动宽度
            var orientationChange = function orientationChange() {
                slideW = twCell.clientWidth;
                conBox.style.width = tempSize * slideW + "px";
                for (var i = 0; i < tempSize; i++) {
                    conBox.children[i].style.width = slideW + "px";
                }
                var ind = effect == "leftLoop" ? index + 1 : index;
                translate(-ind * slideW, 0);
            };
            window.addEventListener("resize", orientationChange, false);
            //滑动效果
            var translate = function translate(dist, speed, ele) {
                if (!!ele) {
                    ele = ele.style;
                } else {
                    ele = conBox.style;
                }
                ele.webkitTransitionDuration = ele.MozTransitionDuration = ele.msTransitionDuration = ele.OTransitionDuration = ele.transitionDuration = speed + 'ms';
                ele.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
                ele.msTransform = ele.MozTransform = ele.OTransform = 'translateX(' + dist + 'px)';
            };
            //效果函数
            var doPlay = function doPlay(isTouch) {
                switch (effect) {
                    case "left":
                        if (index >= navObjSize) {
                            index = isTouch ? index - 1 : 0;
                        } else if (index < 0) {
                            index = isTouch ? 0 : navObjSize - 1;
                        }
                        translate(-index * slideW, delayTime);
                        oldIndex = index;
                        break;
                    case "leftLoop":
                        translate(-(index + 1) * slideW, delayTime);
                        if (index == -1) {
                            timeout = setTimeout(function () {
                                translate(-navObjSize * slideW, 0);
                            }, delayTime);
                            index = navObjSize - 1;
                        } else if (index == navObjSize) {
                            timeout = setTimeout(function () {
                                translate(-slideW, 0);
                            }, delayTime);
                            index = 0;
                        }
                        oldIndex = index;
                        break;

                }
                //预加载
                (function () {
                    var nowIndex = effect == "leftLoop" ? index + 1 : index;
                    var allImage = conBox.querySelectorAll(opts.switchLoadClass);
                    var changeImagesSrc = function changeImagesSrc(img) {
                        if (img) {
                            var imgSwitchSrc = img.getAttribute(opts.switchLoad);
                            if (!imgSwitchSrc) {
                                return false;
                            }
                            if (img.tagName.toLowerCase() == 'img') {
                                img.src = imgSwitchSrc;
                            } else {
                                img.style.backgroundImage = "url(" + imgSwitchSrc + ")";
                            }
                        }
                    };
                    if (allImage.length > 0) {
                        changeImagesSrc(allImage[nowIndex]);
                        changeImagesSrc(allImage[nowIndex - 1]);
                        changeImagesSrc(allImage[nowIndex + 1]);
                    }
                })();
                doStartFun();
                endTimeout = setTimeout(function () {
                    doEndFun();
                }, delayTime);
                //给按钮区域的切换每一项加上className
                for (var i = 0; i < navObjSize; i++) {
                    removeClass(navObj[i], opts.titOnClassName);
                    if (i == index) {
                        addClass(navObj[i], opts.titOnClassName);
                    }
                }
                /*
                 * 给主体区域的切换每一项加上className
                 * 注:如果想配合className写css3小效果,建议使用effect属性的left值
                 * 否则切换到尾帧和切换到首帧时,视觉上的体验不好
                 * */
                // (function () {
                //     var nowJ = effect == "leftLoop" ? index + 1 : index;
                //     for (var j = 0; j < conBox.children.length; j++) {
                //         removeClass(conBox.children[j], opts.titOnClassName);
                //         if (j == nowJ) {
                //             addClass(conBox.children[j], opts.titOnClassName);
                //         }
                //     }
                // })();
                //loop控制是否继续循环
                if (loop == false) {
                    removeClass(nextBtn, "nextStop");
                    removeClass(prevBtn, "prevStop");
                    if (index == 0) {
                        addClass(prevBtn, "prevStop");
                    } else if (index == navObjSize - 1) {
                        addClass(nextBtn, "nextStop");
                    }
                }
                if (pageState) {
                    pageState.innerHTML = "<span>" + (index + 1) + "</span>/" + navObjSize;
                }
            };
            //初始化执行
            doPlay();
            //自动播放
            if (autoPlay) {
                inter = setInterval(function () {
                    index++;
                    doPlay();
                }, interTime);
            }
            //点击事件
            if (navObj) {
                for (var z = 0; z < navObjSize; z++) {
                    (function () {
                        var j = z;
                        navObj[j].addEventListener('click', function () {
                            clearTimeout(timeout);
                            clearTimeout(endTimeout);
                            index = j;
                            doPlay();
                        });
                    })();
                }
            }
            if (nextBtn) {
                nextBtn.addEventListener('click', function () {
                    if (loop == true || index != navObjSize - 1) {
                        clearTimeout(timeout);
                        clearTimeout(endTimeout);
                        index++;
                        doPlay();
                    }
                });
            }
            if (prevBtn) {
                prevBtn.addEventListener('click', function () {
                    if (loop == true || index != 0) {
                        clearTimeout(timeout);
                        clearTimeout(endTimeout);
                        index--;
                        doPlay();
                    }
                });
            }
            //触摸开始函数
            var tStart = function tStart(e) {
                clearTimeout(timeout);
                clearTimeout(endTimeout);
                scrollY = undefined;
                distX = 0;
                var point = hasTouch ? e.touches[0] : e;
                startX = point.pageX;
                startY = point.pageY;
                //添加“触摸移动”事件监听
                conBox.addEventListener(touchMove, tMove, false);
                //添加“触摸结束”事件监听
                conBox.addEventListener(touchEnd, tEnd, false);
            };
            //触摸移动函数
            var tMove = function tMove(e) {
                if (hasTouch) {
                    if (e.touches.length > 1 || e.scale && e.scale !== 1) {
                        return;
                    }
                }
                //多点或缩放
                var point = hasTouch ? e.touches[0] : e;
                distX = point.pageX - startX;
                distY = point.pageY - startY;
                if (typeof scrollY == 'undefined') {
                    scrollY = !!(scrollY || Math.abs(distX) < Math.abs(distY));
                }
                if (!scrollY) {
                    e.preventDefault();
                    if (autoPlay) {
                        clearInterval(inter);
                    }
                    switch (effect) {
                        case "left":
                            if (index == 0 && distX > 0 || index >= navObjSize - 1 && distX < 0) {
                                distX = distX * 0.4;
                            }
                            translate(-index * slideW + distX, 0);
                            break;
                        case "leftLoop":
                            translate(-(index + 1) * slideW + distX, 0);
                            break;
                    }
                }
            };
            //触摸结束函数
            var tEnd = function tEnd(e) {
                if (distX == 0) {
                    return;
                }
                e.preventDefault();
                if (!scrollY) {
                    if (Math.abs(distX) > slideW / 10) {
                        distX > 0 ? index-- : index++;
                    }
                    doPlay(true);
                    if (autoPlay) {
                        inter = setInterval(function () {
                            index++;
                            doPlay();
                        }, interTime);
                    }
                }

                conBox.removeEventListener(touchMove, tMove, false);
                conBox.removeEventListener(touchEnd, tEnd, false);
            };
            //添加“触摸开始”事件监听
            conBox.addEventListener(touchStart, tStart, false);
        };

        module.exports = TouchSlide;
    }, {}], 31: [function (require, module, exports) {
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
    }, {}] }, {}, [2]);