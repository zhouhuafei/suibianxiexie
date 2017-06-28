/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

//创建元素节点
function createElement(json) {
    var opts = json || {};
    opts.elementName = opts.elementName || 'div'; //标签名称
    opts.style = opts.style || ``; //style样式
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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(1); //对象的扩展方法
var createElement = __webpack_require__(0); //创建元素节点
var getDomArray = __webpack_require__(4); //获取原生的dom节点并转换成数组

//底层构造函数
function SuperType(json) {
    //函数外部传来的参数(这个属性在其他模块的内部需要被重写)
    this.opts = extend({
        //内部默认参数
        defaults: {
            //父级
            wrap: `.g-body`, //这个仅支持传入选择器和原生dom节点
            //回调
            callback: {
                //内部模块创建之前
                moduleDomCreateBefore: function (self) {
                    //内部模块创建之前的回调待续...
                },
                //内部模块创建之后
                moduleDomCreateAfter: function (self) {
                    //内部模块创建之后的回调待续...
                },
                //内部模块渲染之前
                moduleDomRenderBefore: function (self) {
                    //内部模块渲染之前的回调待续...
                },
                //内部模块渲染之后
                moduleDomRenderAfter: function (self) {
                    //内部模块渲染之后的回调待续...
                },
                //内部模块移除之前
                moduleDomRemoveBefore: function (self) {
                    //内部模块移除之前的回调待续...
                },
                //内部模块移除之后
                moduleDomRemoveAfter: function (self) {
                    //内部模块移除之后的回调待续...
                },
                //内部模块显示之前
                moduleDomShowBefore: function (self) {
                    //内部模块显示之前的回调待续...
                },
                //内部模块显示之后
                moduleDomShowAfter: function (self) {
                    //内部模块显示之后的回调待续...
                },
                //内部模块隐藏之前
                moduleDomHideBefore: function (self) {
                    //内部模块隐藏之前的回调待续...
                },
                //内部模块隐藏之后
                moduleDomHideAfter: function (self) {
                    //内部模块隐藏之后的回调待续...
                },
                //外部容器获取之前
                wrapDomGetBefore: function (self) {
                    //外部容器获取之前的回调待续...
                },
                //外部容器获取之后
                wrapDomGetAfter: function (self) {
                    //外部容器获取之后的回调待续...
                },
                //外部容器移除之前
                wrapDomRemoveBefore: function (self) {
                    //外部容器移除之前的回调待续...
                },
                //外部容器移除之后
                wrapDomRemoveAfter: function (self) {
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
                moduleDomStyle: ``, //内部模块的样式(写法和css相同)
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
    this.moduleDomRemove(); //内部模块的移除(重新初始化的时候要移除掉以前有的内部模块)

    var callback = this.opts.callback;
    callback.moduleDomCreateBefore(this);
    this.moduleDomCreate(); //内部模块的创建
    callback.moduleDomCreateAfter(this);

    this.wrapDomGet(); //外部容器的获取
    this.moduleDomRender(); //内部模块的渲染(如果外部容器存在,就把内部模块填充到外部容器里)
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
            className: `m-super-type`,
            innerHTML: `
                <div class="m-super-type-txt">周华飞爱侯丽杰,侯丽杰爱周华飞</div>
            `
        }
    });
};

//内部模块的渲染
SuperType.prototype.moduleDomRender = function () {
    var callback = this.opts.callback;
    var config = this.opts.config;
    if (config.moduleDomIsShow && this.wrapDom) {
        callback.moduleDomRenderBefore(this);
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
        callback.moduleDomRenderAfter(this);
    }
};

//内部模块的移除
SuperType.prototype.moduleDomRemove = function () {
    var callback = this.opts.callback;
    if (this.moduleDom && this.moduleDom.parentNode) {
        callback.moduleDomRemoveBefore(this);
        this.moduleDom.parentNode.removeChild(this.moduleDom);
        callback.moduleDomRemoveAfter(this);
    }
    this.moduleDomClearTimer();
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
        this.moduleDomRender();
    }
    callback.moduleDomShowAfter(this);
};

//内部模块的隐藏(显示隐藏和是否清除定时器无关)
SuperType.prototype.moduleDomHide = function () {
    var callback = this.opts.callback;
    if (this.moduleDom.parentNode) {
        this.opts.config.moduleDomIsShow = false;
        callback.moduleDomHideBefore(this);
        this.moduleDom.parentNode.removeChild(this.moduleDom);
        callback.moduleDomHideAfter(this);
    }
};

//外部容器的获取
SuperType.prototype.wrapDomGet = function () {
    var callback = this.opts.callback;
    callback.wrapDomGetBefore(this);
    this.wrapDom = getDomArray({ element: this.opts.wrap })[0];
    callback.wrapDomGetAfter(this);
};

//外部容器的移除
SuperType.prototype.wrapDomRemove = function () {
    var callback = this.opts.callback;
    //先移除内部的模块
    this.moduleDomRemove();
    //再移除外部的容器
    if (this.wrapDom) {
        callback.wrapDomRemoveBefore(this);
        this.wrapDom.parentNode.removeChild(this.wrapDom);
        callback.wrapDomRemoveAfter(this);
    }
};

//获取内部模块的整体html结构
SuperType.prototype.getModuleDomHtml = function () {
    return this.moduleDom.outerHTML;
};

module.exports = SuperType;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(1); //对象的扩展方法
var objRemoveQuote = __webpack_require__(5); //对象移除引用

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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

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

/***/ }),
/* 5 */
/***/ (function(module, exports) {

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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

//版权
(function () {
    if (pageInfo && pageInfo.config && pageInfo.config.isShowCopyright) {
        var Copyright = __webpack_require__(7);
        new Copyright();
    }
})();

//底部导航
(function () {
    if (pageInfo && pageInfo.config && pageInfo.config.isShowFooterNav) {
        var Footer = __webpack_require__(8);
        new Footer(pageInfo.data.footerNav);
    }
})();

//延迟加载
(function () {
    var LazyLoad = __webpack_require__(10);
    new LazyLoad();
})();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var createElement = __webpack_require__(0); //创建元素节点
var constructorInherit = __webpack_require__(3); //构造函数的继承(拷贝继承)
var SuperType = __webpack_require__(2); //超类型(子类型继承的对象)

//子类型
var SubType = constructorInherit({
    superType: SuperType,
    //默认参数(继承超类型)
    parameter: {
        //容器
        wrap: '.g-footer',
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
            className: `m-copyright`,
            innerHTML: `
                <div class="m-copyright-icon iconfont icon-banquan"></div>
                <div class="m-copyright-txt">版权信息哟</div>
            `
        }
    });
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    //功能重写待续...
};

module.exports = SubType;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var createElement = __webpack_require__(0); //创建元素节点
var constructorInherit = __webpack_require__(3); //构造函数的继承(拷贝继承)
var SuperType = __webpack_require__(2); //超类型(子类型继承的对象)
var jsonToArray = __webpack_require__(9);

//子类型
var SubType = constructorInherit({
    superType: SuperType,
    //默认参数(继承超类型)
    parameter: {
        //容器
        wrap: '.g-footer',
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
    this.moduleDomClass = `m-footer-nav`;
    var moduleDomHtml = ``;
    var data = jsonToArray({ json: this.opts.data });
    data.forEach(function (value) {
        var v = value.value;
        var highlightClass = ``;
        if (v.isHighlight) {
            highlightClass = `m-footer-nav-body-active`;
        }
        var markHtml = ``;
        if (v.isShowMark) {
            markHtml = `<div class="m-footer-nav-body-mark"></div>`;
        }
        moduleDomHtml += `
            <a class="m-footer-nav-body ${highlightClass}" href="${v.link}">
                <div class="m-footer-nav-body-icon iconfont ${v.icon}"></div>
                <div class="m-footer-nav-body-txt">${v.txt}</div>
                ${markHtml}
            </a>
        `;
    });
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        custom: this.opts.config.moduleDomCustomAttr,
        attribute: {
            className: this.moduleDomClass,
            innerHTML: `<div class="m-footer-nav-wrap">${moduleDomHtml}</div>`
        }
    });
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    //功能重写待续...
};

module.exports = SubType;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

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

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(1); //对象的扩展方法
var offset = __webpack_require__(11); //获取元素距离文档的left和top
var getDomArray = __webpack_require__(4); //获取原生的dom节点并转换成数组

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

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(1); //对象的扩展方法
var getDomArray = __webpack_require__(4); //获取原生的dom节点并转换成数组

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

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var createElement = __webpack_require__(0); //创建元素节点
var constructorInherit = __webpack_require__(3); //构造函数的继承(拷贝继承)
var SuperType = __webpack_require__(2); //超类型(子类型继承的对象)

//子类型
var SubType = constructorInherit({
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
                link: '/phone/'
            }
        }
    }
});

//内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    var data = this.opts.data;
    var btnIconHtml = ``;
    if (this.opts.config.btn.isShowIcon) {
        btnIconHtml = `<div class="g-btn-icon iconfont ${data.btn.icon}"></div>`;
    }
    this.moduleDom = createElement({
        style: this.opts.config.moduleStyle,
        custom: this.opts.config.moduleDomCustomAttr,
        attribute: {
            className: `m-no-data`,
            innerHTML: `
                <div class="m-no-data-icon iconfont ${data.icon}"></div>
                <div class="m-no-data-txt">${data.txt}</div>
                <a class="m-no-data-btn g-btn g-btn-confirm" href="${data.btn.link}">
                    ${btnIconHtml}
                    <div class="g-btn-txt">${data.btn.txt}</div>
                </a>
            `
        }
    });
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    //功能重写待续...
};

module.exports = SubType;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var createElement = __webpack_require__(0); //创建元素节点
var constructorInherit = __webpack_require__(3); //构造函数的继承(拷贝继承)
var TouchSlide = __webpack_require__(14); //轮播图插件
var SuperType = __webpack_require__(2); //超类型(子类型继承的对象)

//子类型
var SubType = constructorInherit({
    superType: SuperType,
    //默认参数(继承超类型)
    parameter: {
        //回调
        callback: {
            startFun: function () {},
            endFun: function () {}
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
                startFun: function () {
                    console.log('此处的函数会被覆盖,请在callback里执行回调');
                },
                endFun: function () {
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
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        custom: this.opts.config.moduleDomCustomAttr,
        attribute: {
            className: `m-slide`,
            innerHTML: `
                ${this.renderHeader()}
                ${this.renderBody()}
            `
        }
    });
};

SubType.prototype.renderHeader = function () {
    var self = this;
    var html = ``;
    var data = self.opts.data;
    var className = ``;
    data.items.forEach(function (v, i) {
        if (i == self.opts.config.touchSlide.defaultIndex) {
            className = `on`;
        }
        html += `<div class="m-slide-items ${className}"></div>`;
    });
    return `<div class="m-slide-header">${html}</div>`;
};

SubType.prototype.renderBody = function () {
    var self = this;
    var html = ``;
    var data = self.opts.data;
    data.items.forEach(function (v) {
        if (self.opts.config.isShowHref) {
            html += `<a href="${v.link || 'javascript:;'}" class="m-slide-items pre-load" data-src="${v.img.url}"></a>`;
        } else {
            html += `<a class="m-slide-items pre-load" data-src="${v.img.url}"></a>`;
        }
    });
    return `<div class="m-slide-body">${html}</div>`;
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

/***/ }),
/* 14 */
/***/ (function(module, exports) {

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

var TouchSlide = function (a) {
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
    var obj = function (str, parEle) {
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
    var wrap = function (el, v) {
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
    var addClass = function (ele, className) {
        if (!ele || !className || ele.className && ele.className.search(new RegExp("\\b" + className + "\\b")) != -1) {
            return;
        }
        ele.className += (ele.className ? " " : "") + className;
    };
    var removeClass = function (ele, className) {
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
    var doStartFun = function () {
        if (typeof opts.startFun == 'function') {
            opts.startFun(index, navObjSize);
        }
    };
    var doEndFun = function () {
        if (typeof opts.endFun == 'function') {
            opts.endFun(index, navObjSize);
        }
    };
    //动态设置滑动宽度
    var orientationChange = function () {
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
    var translate = function (dist, speed, ele) {
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
    var doPlay = function (isTouch) {
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
            var changeImagesSrc = function (img) {
                if (img) {
                    var imgSwitchSrc = img.getAttribute(opts.switchLoad);
                    if (!imgSwitchSrc) {
                        return false;
                    }
                    if (img.tagName.toLowerCase() == 'img') {
                        img.src = imgSwitchSrc;
                    } else {
                        img.style.backgroundImage = `url(${imgSwitchSrc})`;
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
    var tStart = function (e) {
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
    var tMove = function (e) {
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
    var tEnd = function (e) {
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

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var createElement = __webpack_require__(0); //创建元素节点
var constructorInherit = __webpack_require__(3); //构造函数的继承(拷贝继承)
var SuperType = __webpack_require__(2); //超类型(子类型继承的对象)

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
                isShowMark: false
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
    var html = ``;
    items.forEach(function (v) {
        var markHtml = ``;
        if (v.isShowMark) {
            markHtml = `<div class="m-navigation-mark"></div>`;
        }
        html += `
            <a href="${v.link}" class="m-navigation-wrap">
                <div class="m-navigation-icon iconfont ${v.icon}"></div>
                <div class="m-navigation-txt">${v.txt}</div>
                ${markHtml}
            </a>
        `;
    });
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        custom: this.opts.config.moduleDomCustomAttr,
        attribute: {
            className: `m-navigation`,
            innerHTML: html
        }
    });
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    //功能重写待续...
};

module.exports = SubType;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var createElement = __webpack_require__(0); //创建元素节点
var constructorInherit = __webpack_require__(3); //构造函数的继承(拷贝继承)
var SuperType = __webpack_require__(2); //超类型(子类型继承的对象)
//var Mask = require('../modules/m-mask');//遮罩

//子类型
var SubType = constructorInherit({
    superType: SuperType,
    //默认参数(继承超类型)
    parameter: {
        //回调
        callback: {
            moduleDomRenderBefore: function (self) {
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
    var moduleDomHtml = ``;
    var moduleDomClass = ``;
    var status = config.status;
    var positionMethod = config.positionMethod;
    var positionLocation = config.positionLocation;
    //加载中
    if (status == 'loading') {
        moduleDomClass = `m-loading-loading `;
        //相对文档居中
        if (positionMethod == 'fixed') {
            moduleDomClass += `m-loading-fixed m-loading-${positionLocation}`;
        }
        //相对容器居中
        if (positionMethod == 'absolute') {
            moduleDomClass += `m-loading-absolute m-loading-${positionLocation}`;
        }
        moduleDomHtml = `
            <div class="m-loading-wrap">
                <div class="m-loading-loading-icon iconfont icon-jiazaizhong"></div>
            </div>
        `;
    }
    //加载完毕
    if (status == 'over') {
        moduleDomClass = `m-loading-over `;
        //相对文档居中
        if (positionMethod == 'fixed') {
            moduleDomClass += `m-loading-fixed m-loading-${positionLocation}`;
        }
        //相对容器居中
        if (positionMethod == 'absolute') {
            moduleDomClass += `m-loading-absolute m-loading-${positionLocation}`;
        }
        moduleDomHtml = `
            <div class="m-loading-wrap">
                <div class="m-loading-over-icon iconfont icon-meiyoushuju"></div>
                <div class="m-loading-over-txt">没有数据了</div>
            </div>
        `;
    }
    //模块创建
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        custom: this.opts.config.moduleDomCustomAttr,
        attribute: {
            className: `m-loading ${moduleDomClass}`,
            innerHTML: moduleDomHtml
        }
    });
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    //功能重写待续...
};

module.exports = SubType;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var createElement = __webpack_require__(0); //创建元素节点
var constructorInherit = __webpack_require__(3); //构造函数的继承(拷贝继承)
var SuperType = __webpack_require__(2); //超类型(子类型继承的对象)

//子类型
var SubType = constructorInherit({
    superType: SuperType,
    //默认参数(继承超类型)
    parameter: {
        //回调
        callback: {
            click: function () {},
            moduleDomRenderBefore: function (self) {
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
    this.moduleDom = createElement({
        style: this.opts.config.moduleStyle,
        custom: this.opts.config.moduleDomCustomAttr,
        attribute: {
            className: `m-mask ${isTransparent}`,
            innerHTML: ``
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

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(1); //对象的扩展方法
var createElement = __webpack_require__(0); //创建元素节点
var getDomArray = __webpack_require__(4); //获取原生的dom节点并转换成数组

//底层构造函数
class SuperType {
    constructor(json) {
        //函数外部传来的参数(这个属性在其他模块的内部需要被重写)
        this.opts = extend({
            //内部默认参数
            defaults: {
                //父级
                wrap: `.g-body`, //这个仅支持传入选择器和原生dom节点
                //回调
                callback: {
                    //内部模块创建之前
                    moduleDomCreateBefore: function (self) {
                        //内部模块创建之前的回调待续...
                    },
                    //内部模块创建之后
                    moduleDomCreateAfter: function (self) {
                        //内部模块创建之后的回调待续...
                    },
                    //内部模块渲染之前
                    moduleDomRenderBefore: function (self) {
                        //内部模块渲染之前的回调待续...
                    },
                    //内部模块渲染之后
                    moduleDomRenderAfter: function (self) {
                        //内部模块渲染之后的回调待续...
                    },
                    //内部模块移除之前
                    moduleDomRemoveBefore: function (self) {
                        //内部模块移除之前的回调待续...
                    },
                    //内部模块移除之后
                    moduleDomRemoveAfter: function (self) {
                        //内部模块移除之后的回调待续...
                    },
                    //内部模块显示之前
                    moduleDomShowBefore: function (self) {
                        //内部模块显示之前的回调待续...
                    },
                    //内部模块显示之后
                    moduleDomShowAfter: function (self) {
                        //内部模块显示之后的回调待续...
                    },
                    //内部模块隐藏之前
                    moduleDomHideBefore: function (self) {
                        //内部模块隐藏之前的回调待续...
                    },
                    //内部模块隐藏之后
                    moduleDomHideAfter: function (self) {
                        //内部模块隐藏之后的回调待续...
                    },
                    //外部容器获取之前
                    wrapDomGetBefore: function (self) {
                        //外部容器获取之前的回调待续...
                    },
                    //外部容器获取之后
                    wrapDomGetAfter: function (self) {
                        //外部容器获取之后的回调待续...
                    },
                    //外部容器移除之前
                    wrapDomRemoveBefore: function (self) {
                        //外部容器移除之前的回调待续...
                    },
                    //外部容器移除之后
                    wrapDomRemoveAfter: function (self) {
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
                    moduleDomStyle: ``, //内部模块的样式(写法和css相同)
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
        //this.init();//初始化(用es6继承的话,在超类里调初始化没有意义,因为子类的参数还没有被赋予新值,建议不要在超类里初始化,在子类里初始化)
    }

    //初始化
    init() {
        this.render();
        this.power();
    }

    //渲染
    render() {
        this.moduleDomRemove(); //内部模块的移除(重新初始化的时候要移除掉以前有的内部模块)

        var callback = this.opts.callback;
        callback.moduleDomCreateBefore(this);
        this.moduleDomCreate(); //内部模块的创建
        callback.moduleDomCreateAfter(this);

        this.wrapDomGet(); //外部容器的获取
        this.moduleDomRender(); //内部模块的渲染(如果外部容器存在,就把内部模块填充到外部容器里)
    }

    //功能(这个方法在其他模块的内部需要被重写)
    power() {}
    //功能待续...


    //内部模块的创建(这个方法在其他模块的内部需要被重写)
    moduleDomCreate() {
        this.moduleDom = createElement({
            style: this.opts.config.moduleDomStyle,
            custom: this.opts.config.moduleDomCustomAttr,
            attribute: {
                className: `m-super-type-es6`,
                innerHTML: `
                    <div class="m-super-type-es6-txt">周华飞爱侯丽杰,侯丽杰爱周华飞</div>
                `
            }
        });
    }

    //内部模块的渲染
    moduleDomRender() {
        var callback = this.opts.callback;
        var config = this.opts.config;
        if (config.moduleDomIsShow && this.wrapDom) {
            callback.moduleDomRenderBefore(this);
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
            callback.moduleDomRenderAfter(this);
        }
    }

    //内部模块的移除
    moduleDomRemove() {
        var callback = this.opts.callback;
        if (this.moduleDom && this.moduleDom.parentNode) {
            callback.moduleDomRemoveBefore(this);
            this.moduleDom.parentNode.removeChild(this.moduleDom);
            callback.moduleDomRemoveAfter(this);
        }
        this.moduleDomClearTimer();
    }

    //内部模块的定时器清除(假设内部模块有定时器)
    moduleDomClearTimer() {
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
    moduleDomShow() {
        var callback = this.opts.callback;
        callback.moduleDomShowBefore(this);
        if (this.wrapDom) {
            this.opts.config.moduleDomIsShow = true;
            this.moduleDomRender();
        }
        callback.moduleDomShowAfter(this);
    }

    //内部模块的隐藏(显示隐藏和是否清除定时器无关)
    moduleDomHide() {
        var callback = this.opts.callback;
        if (this.moduleDom.parentNode) {
            this.opts.config.moduleDomIsShow = false;
            callback.moduleDomHideBefore(this);
            this.moduleDom.parentNode.removeChild(this.moduleDom);
            callback.moduleDomHideAfter(this);
        }
    }

    //外部容器的获取
    wrapDomGet() {
        var callback = this.opts.callback;
        callback.wrapDomGetBefore(this);
        this.wrapDom = getDomArray({ element: this.opts.wrap })[0];
        callback.wrapDomGetAfter(this);
    }

    //外部容器的移除
    wrapDomRemove() {
        var callback = this.opts.callback;
        //先移除内部的模块
        this.moduleDomRemove();
        //再移除外部的容器
        if (this.wrapDom) {
            callback.wrapDomRemoveBefore(this);
            this.wrapDom.parentNode.removeChild(this.wrapDom);
            callback.wrapDomRemoveAfter(this);
        }
    }

    //获取内部模块的整体html结构
    getModuleDomHtml() {
        return this.moduleDom.outerHTML;
    }
}

module.exports = SuperType;

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31);
window.addEventListener('load', function () {
    setTimeout(function () {
        //ajax测试
        (function () {
            var Ajax = __webpack_require__(32);
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
            var WhenScrollBottom = __webpack_require__(33);
            //测试滚动到底部loading
            new WhenScrollBottom({
                callback: {
                    success: function (self) {
                        var Loading = __webpack_require__(16);
                        var loading = new Loading({
                            wrap: '.g-body',
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
            var Slide = __webpack_require__(13);
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
            var Navigation = __webpack_require__(15);
            new Navigation({ wrap: '.page-navigation' });
        })();

        //弹窗测试
        (function () {
            var Dialog = __webpack_require__(34);
            // new Dialog({
            //     callback: {
            //         confirm: function () {
            //             new Dialog({config: {alert: {icon: 'icon-chenggong', content: '已确认'}}});
            //         },
            //         cancel: function () {
            //             new Dialog({config: {alert: {icon: 'icon-chenggong', content: '已取消'}}});
            //         },
            //         close: function () {
            //             new Dialog({config: {alert: {icon: 'icon-chenggong', content: '已关闭'}}});
            //         }
            //     },
            //     config: {
            //         type: 'confirm'
            //     }
            // });
        })();

        //分页测试
        (function () {
            var Pagination = __webpack_require__(35);
            new Pagination({ wrap: '.page-pagination' });
        })();

        //没有数据
        (function () {
            var NoData = __webpack_require__(12);
            new NoData({ wrap: '.page-no-data' });
        })();

        //加载中
        (function () {
            var Loading = __webpack_require__(16);
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
            var SuperType = __webpack_require__(2);
            new SuperType({ wrap: `.page-super-type` });
            var SubType = __webpack_require__(36);
            new SubType({ wrap: `.page-super-type` });
            var SuperTypeEs6 = __webpack_require__(18);
            new SuperTypeEs6({ wrap: `.page-super-type` }).init(); //es6继承,不建立在超类型内部直接调init方法
            var SubTypeEs6 = __webpack_require__(37);
            new SubTypeEs6({ wrap: `.page-super-type` });
        })();

        //返回顶部
        (function () {
            var GoTop = __webpack_require__(38);
            new GoTop();
        })();

        //遮罩
        (function () {
            var Mask = __webpack_require__(17);
            var mask = new Mask({
                callback: {
                    click: function () {
                        mask.moduleDomHide();
                    }
                }
            });
            //mask.moduleDomShow();
        })();

        //单选开关
        (function () {
            const Radio = __webpack_require__(40);
            new Radio({
                wrap: '.page-radio-switch',
                callback: {
                    click: function (json) {
                        console.log(json);
                    }
                }
            });
        })();

        //表格
        (function () {
            const Table = __webpack_require__(41);
            const table = new Table({
                wrap: `.page-table`,
                data: {
                    header: [{
                        content: `<div>header0</div>`
                    }, {
                        content: `<div>header1</div>`
                    }, {
                        content: `<div>header2</div>`
                    }],
                    body: [[{
                        content: `<div>body0-0</div>`
                    }, {
                        content: `<div>body1-0</div>`
                    }, {
                        content: `<div>body2-0</div>`
                    }], [{
                        content: `<div>body0-1</div>`
                    }, {
                        content: `<div>body1-1</div>`
                    }, {
                        content: `<div>body2-1</div>`
                    }], [{
                        content: `<div>body0-2</div>`
                    }, {
                        content: `<div>body1-2</div>`
                    }, {
                        content: `<div>body2-2</div>`
                    }]],
                    footer: ``
                }
            });
        })();

        //星评
        (function () {
            const Star = __webpack_require__(42);
            const star = new Star({
                wrap: `.page-star`,
                callback: {
                    click: function (json) {
                        console.log(json);
                    }
                }
            });
        })();

        __webpack_require__(6); //每个页面都要用到的js(一定要放到最底部)
    }, 0);
});

/***/ }),
/* 31 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \r\n@import \"../config/config\";\r\n^\r\n      File to import not found or unreadable: ../config/config\nParent style sheet: E:/www/suibianxiexie/static/phone/dev/scss/modules/m-dialog.scss\r\n      in E:\\www\\suibianxiexie\\static\\phone\\dev\\scss\\modules\\m-dialog.scss (line 1, column 1)\n    at runLoaders (E:\\www\\suibianxiexie\\node_modules\\_webpack@3.0.0@webpack\\lib\\NormalModule.js:193:19)\n    at E:\\www\\suibianxiexie\\node_modules\\_loader-runner@2.3.0@loader-runner\\lib\\LoaderRunner.js:364:11\n    at E:\\www\\suibianxiexie\\node_modules\\_loader-runner@2.3.0@loader-runner\\lib\\LoaderRunner.js:230:18\n    at context.callback (E:\\www\\suibianxiexie\\node_modules\\_loader-runner@2.3.0@loader-runner\\lib\\LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (E:\\www\\suibianxiexie\\node_modules\\_sass-loader@6.0.6@sass-loader\\lib\\loader.js:55:13)\n    at Object.<anonymous> (E:\\www\\suibianxiexie\\node_modules\\_async@2.5.0@async\\dist\\async.js:2244:31)\n    at Object.callback (E:\\www\\suibianxiexie\\node_modules\\_async@2.5.0@async\\dist\\async.js:906:16)\n    at options.error (E:\\www\\suibianxiexie\\node_modules\\_node-sass@3.13.1@node-sass\\lib\\index.js:289:32)");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(1); //对象的扩展方法

//ajax封装
function Ajax(json) {
    this.opts = extend({
        defaults: {
            //回调
            callback: {
                //上传期间持续不断地触发
                uploadProgress: function () {},
                //上传完成时触发
                uploadLoad: function () {},
                //在接收到响应数据的第一个字节时触发
                loadStart: function () {},
                //在接收响应期间持续不断地触发
                progress: function () {},
                //在请求发生错误时触发
                error: function () {},
                //在因为调用abort()方法而终止请求时触发
                abort: function () {},
                //在接收到完整的响应数据时触发
                load: function () {},
                //接收到完整的响应且响应状态为200
                success: function () {},
                //接收到完整的响应且响应状态不为200
                fail: function () {},
                //在通信完成或者触发error、abort或load事件后触发
                loadEnd: function () {},
                //等同于loadEnd
                complete: function () {},
                //请求超时
                timeout: function () {}
            },
            //配置
            config: {
                //ajax的配置
                type: 'post', //请求类型(默认post)
                url: '', //url
                dataType: 'json', //数据类型(默认json)
                async: true, //默认异步
                timeout: 5000, //超时时间(默认3秒)
                mark: '#' //当请求类型为get时,url后面的数据用什么符号开头url:'index.php',1.?ctl=seller&act=setting,2.#ctl=seller&act=setting
            },
            //数据
            data: {}
        },
        inherits: json
    });
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
        var search = ``;
        var num = 0;
        var data = opts.data;
        if (data) {
            for (var attr in data) {
                if (data.hasOwnProperty(attr)) {
                    if (num == 0) {
                        search += `${attr}=${data[attr]}`;
                    } else {
                        search += `&${attr}=${data[attr]}`;
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

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(1); //对象的扩展方法

//当滚动到了浏览器的底部
function WhenScrollBottom(json) {
    this.opts = extend({
        defaults: {
            callback: {
                success: function () {},
                fail: function () {}
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

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var createElement = __webpack_require__(0); //创建元素节点
var constructorInherit = __webpack_require__(3); //构造函数的继承(拷贝继承)
var SuperType = __webpack_require__(2); //超类型(子类型继承的对象)
var Mask = __webpack_require__(17); //遮罩

//子类型
var SubType = constructorInherit({
    superType: SuperType,
    //默认参数(继承超类型)
    parameter: {
        //回调
        callback: {
            moduleDomRenderBefore: function (self) {
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
            confirm: function () {},
            //取消
            cancel: function () {},
            //关闭
            close: function () {}
        },
        //配置
        config: {
            /*
             * 弹窗类型
             * `alert`  提示信息类型
             * `confirm`    确认框类型
             * */
            type: `alert`, //默认是提示框
            /*
             * 弹窗位置
             * `center` 居中
             * `bottom` 居下
             * `top` 居上
             * */
            positionLocation: `center`, //弹窗的定位位置    positionMethod定位方式强制fixed
            //提示框
            alert: {
                time: 2000, //展示的时间
                isShowIcon: true, //是否显示icon
                icon: `icon-chenggong`, //icon的class
                content: `成功` //内容信息
            },
            //确认框
            confirm: {
                //点击确认是否关闭弹窗
                isShowHeader: true, //是否显示头部
                headerContent: `提示:`, //头部内容
                isShowBody: true, //是否显示主体
                bodyContent: `<div>确定要执行这个操作?</div>`, //主体内容
                isShowFooter: true, //是否显示尾部
                footerContent: ``, //尾部内容
                isShowClose: true, //是否显示关闭按钮
                closeContent: `<div class="iconfont icon-guanbi"></div>`, //关闭按钮的内容
                isShowConfirm: true, //是否显示确认按钮
                confirmContent: `确认`, //确认按钮的内容
                isShowCancel: true, //是否显示取消按钮
                cancelContent: `取消`, //取消按钮的内容
                isCustom: false, //是否自定义
                customContent: ``, //自定义的内容
                isShowIcon: true, //是否显示icon
                icon: `icon-jinggao`, //icon的类型
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
    var type = `m-dialog-${config.type}`; //弹窗类型
    var positionLocation = `m-dialog-${config.positionLocation}`; //弹窗的定位位置
    //弹窗结构
    var html = `
        ${this.renderAlert()}
        ${this.renderConfirm()}
    `;
    this.moduleDom = createElement({
        style: this.opts.config.moduleStyle,
        custom: this.opts.config.moduleDomCustomAttr,
        attribute: {
            className: `m-dialog ${type} ${positionLocation}`,
            innerHTML: html
        }
    });
};

//提示框
SubType.prototype.renderAlert = function () {
    var config = this.opts.config;
    if (config.type != `alert`) {
        return ``;
    }
    var alert = config.alert;
    var htmlIcon = ``;
    if (alert.isShowIcon) {
        htmlIcon = `<div class="m-dialog-alert-icon iconfont ${alert.icon}"></div>`;
    }
    return `
        ${htmlIcon}
        <div class="m-dialog-alert-txt">${alert.content}</div>
    `;
};

//确认框
SubType.prototype.renderConfirm = function () {
    var config = this.opts.config;
    if (config.type != `confirm`) {
        return ``;
    }
    var confirm = config.confirm;
    var htmlHeader = ``;
    if (confirm.isShowHeader) {
        htmlHeader = `<div class="m-dialog-header">${confirm.headerContent}</div>`;
    }
    var htmlBody = ``;
    if (confirm.isShowBody) {
        var htmlIcon = ``;
        if (confirm.isShowIcon) {
            htmlIcon = `<div class="m-dialog-icon iconfont ${confirm.icon}"></div>`;
        }
        var bodyClass = `m-dialog-body-system`;
        var bodyContent = `
            ${htmlIcon}
            <div class="m-dialog-txt">${confirm.bodyContent}</div>
        `;
        if (confirm.isCustom) {
            bodyClass = `m-dialog-body-custom`;
            bodyContent = confirm.bodyContent;
        }
        htmlBody = `
            <div class="m-dialog-body">
                <div class="${bodyClass}">
                    ${bodyContent}
                </div>
            </div>
        `;
    }
    var htmlFooter = ``;
    if (confirm.isShowFooter) {
        var htmlCancel = ``;
        if (confirm.isShowCancel) {
            htmlCancel = `<div class="g-btn g-btn-cancel m-dialog-cancel">${confirm.cancelContent}</div>`;
        }
        var htmlConfirm = ``;
        if (confirm.isShowConfirm) {
            htmlConfirm = `<div class="g-btn g-btn-confirm m-dialog-confirm">${confirm.confirmContent}</div>`;
        }
        htmlFooter = `<div class="m-dialog-footer">${htmlCancel}${htmlConfirm}</div>`;
    }
    var htmlClose = ``;
    if (confirm.isShowClose) {
        htmlClose = `<div class="m-dialog-close">${confirm.closeContent}</div>`;
    }
    return `
        ${htmlHeader}
        ${htmlBody}
        ${htmlFooter}
        ${htmlClose} 
    `;
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    var self = this;
    var config = this.opts.config;
    //提示框
    if (config.type == `alert`) {
        setTimeout(function () {
            self.hide();
        }, config.alert.time);
    }
    //确认框
    if (config.type == `confirm`) {
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

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var createElement = __webpack_require__(0); //创建元素节点
var constructorInherit = __webpack_require__(3); //构造函数的继承(拷贝继承)
var SuperType = __webpack_require__(2); //超类型(子类型继承的对象)

//默认数据
var defaultData = {
    nowCount: 10, //当前页的数据条数
    allCount: 100, //数据总条数
    nowPage: 1, //当前页
    allPage: null //总页数
};
defaultData.allPage = Math.ceil(defaultData.allCount / defaultData.nowCount);

//子类型
var SubType = constructorInherit({
    superType: SuperType,
    //默认参数(继承超类型)
    parameter: {
        //回调
        callback: {
            //上一页的回调
            prevPage: function () {},
            //下一页的回调
            nextPage: function () {},
            //选择某一页的回调
            selectPage: function () {}
        },
        //配置
        config: {},
        //数据
        data: defaultData
    }
});

//内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        custom: this.opts.config.moduleDomCustomAttr,
        attribute: {
            className: `m-pagination`,
            innerHTML: `
                <div class="m-pagination-txt">第</div>
                <div class="m-pagination-now-page">
                    <label class="g-select">
                        <span class="g-select-wrap">
                            <select class="g-select-select">
                                ${this.renderOption()}
                            </select>
                            <span class="g-select-mark iconfont icon-select"></span>
                        </span>
                    </label>
                </div>
                <div class="m-pagination-txt">页</div>
                <a href="javascript:;" class="m-pagination-btn m-pagination-btn-inactive iconfont icon-shangyiye"></a>
                <a href="javascript:;" class="m-pagination-btn iconfont icon-xiayiye"></a>
            `
        }
    });
    this.prevDom = this.moduleDom.querySelectorAll('.m-pagination-btn')[0]; //上一页的按钮
    this.nextDom = this.moduleDom.querySelectorAll('.m-pagination-btn')[1]; //下一页的按钮
    this.btnInactiveClass = 'm-pagination-btn-inactive'; //上一页和下一页的禁用状态
    this.selectDom = this.moduleDom.querySelector('.m-pagination-now-page .g-select-select'); //选择某一页的按钮
};

//渲染第几页里面的页码
SubType.prototype.renderOption = function () {
    var html = ``;
    for (var i = 0; i < this.opts.data.allPage; i++) {
        html += `<option value="${i + 1}">${i + 1}</option>`;
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

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var createElement = __webpack_require__(0); //创建元素节点
var constructorInherit = __webpack_require__(3); //构造函数的继承(拷贝继承)
var SuperType = __webpack_require__(2); //超类型(子类型继承的对象)

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
            className: `m-sub-type`,
            innerHTML: `
                <div class="m-sub-type-txt">周华飞爱侯丽杰,侯丽杰爱周华飞</div>
            `
        }
    });
};

//功能(覆盖超类型)
SubType.prototype.power = function () {
    //功能重写待续...
};

module.exports = SubType;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(1); //对象的扩展方法
var createElement = __webpack_require__(0); //创建元素节点
var SuperType = __webpack_require__(18); //超类型(子类型继承的对象)

//子类型
class SubType extends SuperType {
    constructor(json) {
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
        super(json); //这里会执行一次超类里的init
        //制定内部的默认值
        this.opts = extend({
            defaults: this.opts,
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
        this.opts = extend({
            defaults: this.opts,
            inherits: json
        });
        this.init(); //用es6继承的话,在子类里调初始化才有意义,因为子类的参数已经被赋予新值,建议不要在超类里初始化,在子类里初始化
    }

    //内部模块的创建(覆盖超类型)
    moduleDomCreate() {
        this.moduleDom = createElement({
            style: this.opts.config.moduleDomStyle,
            custom: this.opts.config.moduleDomCustomAttr,
            attribute: {
                className: `m-sub-type-es6`,
                innerHTML: `
                    <div class="m-sub-type-es6-txt">周华飞爱侯丽杰,侯丽杰爱周华飞</div>
                `
            }
        });
    }

    //功能重写(覆盖超类型)
    power() {
        //功能重写待续...
    }
}

module.exports = SubType;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var createElement = __webpack_require__(0); //创建元素节点
var constructorInherit = __webpack_require__(3); //构造函数的继承(拷贝继承)
var scrollTo = __webpack_require__(39); //滚动到指定位置
var SuperType = __webpack_require__(2); //超类型(子类型继承的对象)

//子类型
var SubType = constructorInherit({
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
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        custom: this.opts.config.moduleDomCustomAttr,
        attribute: {
            className: `m-go-top`,
            innerHTML: `<div class="m-go-top-icon iconfont icon-shangjiantou"></div>`
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

/***/ }),
/* 39 */
/***/ (function(module, exports) {

//滚动到指定位置
function scrollTo(json) {
    var opts = json || {};
    var to = opts.to || '0';
    var scale = 6;
    var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
    var speed = 0;
    var timer = null;
    var fn = function () {
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

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var createElement = __webpack_require__(0); //创建元素节点
var constructorInherit = __webpack_require__(3); //构造函数的继承(拷贝继承)
var SuperType = __webpack_require__(2); //超类型(子类型继承的对象)

//子类型
var SubType = constructorInherit({
    superType: SuperType,
    //默认参数(继承超类型)
    parameter: {
        //回调
        callback: {
            click: function () {}
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
    this.moduleDomActiveClass = `m-radio-switch-active`;
    var isOn = ``;
    if (config.status == 'on') {
        isOn = this.moduleDomActiveClass;
    }
    this.moduleDom = createElement({
        style: config.moduleStyle,
        custom: config.moduleDomCustomAttr,
        attribute: {
            className: `m-radio-switch ${isOn}`,
            innerHTML: `
                <div class="m-radio-switch-wrap">
                    <div class="m-radio-switch-round"></div>
                </div>
                <div class="m-radio-switch-txt">${config.txt[config.status]}</div>
            `
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
        this.moduleDom.querySelector('.m-radio-switch-txt').innerHTML = `${config.txt[config.status]}`;
    }
};

//关闭
SubType.prototype.off = function () {
    var config = this.opts.config;
    if (this.isOn()) {
        this.moduleDom.classList.remove(this.moduleDomActiveClass);
        config.status = 'off';
        this.moduleDom.querySelector('.m-radio-switch-txt').innerHTML = `${config.txt[config.status]}`;
    }
};

module.exports = SubType;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var createElement = __webpack_require__(0); //创建元素节点
var constructorInherit = __webpack_require__(3); //构造函数的继承(拷贝继承)
var SuperType = __webpack_require__(2); //超类型(子类型继承的对象)

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
            header: [{ content: 'undefined-header0' }, { content: 'undefined-header1' }, { content: 'undefined-header2' }],
            body: [[{ content: 'undefined-body0-0' }, { content: 'undefined-body0-1' }, { content: 'undefined-body0-2' }]],
            footer: ''
        }
    }
});

//内部模块的创建(覆盖超类型)
SubType.prototype.moduleDomCreate = function () {
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        custom: this.opts.config.moduleDomCustomAttr,
        attribute: {
            className: `m-table`,
            innerHTML: `
                <div class="m-table-header">
                    <div class="m-table-row">
                        ${this.moduleDomCreateHeader()}
                    </div>
                </div>
                <div class="m-table-body">
                    ${this.moduleDomCreateBody()}
                </div>
                <div class="m-table-footer">
                    ${this.moduleDomCreateFooter()}
                </div>
            `
        }
    });
};

SubType.prototype.moduleDomCreateHeader = function () {
    var html = ``;
    this.opts.data.header.forEach(function (v) {
        html += `
            <div class="m-table-col">
                <div class="m-table-col-wrap">
                    ${v.content}
                </div>
            </div>
        `;
    });
    return html;
};

SubType.prototype.moduleDomCreateBody = function () {
    var html = ``;
    this.opts.data.body.forEach(function (v0) {
        var row = ``;
        v0.forEach(function (v1) {
            row += `
                <div class="m-table-col">
                    <div class="m-table-col-wrap">
                        ${v1.content}
                    </div>
                </div>
            `;
        });
        html += `<div class="m-table-row">${row}</div>`;
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

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var createElement = __webpack_require__(0); //创建元素节点
var constructorInherit = __webpack_require__(3); //构造函数的继承(拷贝继承)
var SuperType = __webpack_require__(2); //超类型(子类型继承的对象)

//子类型
var SubType = constructorInherit({
    superType: SuperType,
    //默认参数(继承超类型)
    parameter: {
        //回调
        callback: {
            click: function (obj) {}
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
    var html = ``;
    for (var i = 0; i < this.opts.config.allStarNum; i++) {
        var className = '';
        if (i < this.opts.config.nowStarNum) {
            className = 'm-star-items-active';
        }
        html += `<div data-index="${i}" class="iconfont icon-xingping m-star-items ${className}"></div>`;
    }
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        custom: this.opts.config.moduleDomCustomAttr,
        attribute: {
            className: `m-star`,
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

/***/ })
/******/ ]);