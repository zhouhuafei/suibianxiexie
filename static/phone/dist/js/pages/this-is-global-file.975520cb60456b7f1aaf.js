/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		12: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "js/chunk/" + ({"0":"m-dialog","1":"dev-module","2":"home","3":"dev-global","4":"500","5":"404","6":"sample","7":"register","8":"mine","9":"login","10":"dev-word","11":"dev-list"}[chunkId]||chunkId) + "." + chunkId + ".chunk." + {"0":"e336f1d90c1546f18662","1":"b2888e1cffa163687b45","2":"f2a0004bd1b2c40faac2","3":"8ea4a053bda7bb8746f9","4":"67b11b8589f8fa5f2223","5":"979d057dbe43fb2294de","6":"4be621d18079c6a4a678","7":"30f8fad3da4ea4b68f66","8":"96218ffb6d6d2e1d89e4","9":"995ef4501f63719c9904","10":"978a4e307a1c83960305","11":"1ccdb0a6cebcb8d67d8c"}[chunkId] + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
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
/******/ 	__webpack_require__.p = "/phone/dist/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
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
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(5); //对象的扩展方法
var createElement = __webpack_require__(0); //创建元素节点
var getDomArray = __webpack_require__(6); //获取原生的dom节点并转换成数组

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(5); //对象的扩展方法
var objRemoveQuote = __webpack_require__(17); //对象移除引用

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
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

//版权
(function () {
    if (pageInfo && pageInfo.config && pageInfo.config.isShowCopyright) {
        var Copyright = __webpack_require__(18);
        new Copyright();
    }
})();

//底部导航
(function () {
    if (pageInfo && pageInfo.config && pageInfo.config.isShowFooterNav) {
        var Footer = __webpack_require__(19);
        new Footer(pageInfo.data.footerNav);
    }
})();

//延迟加载
(function () {
    var LazyLoad = __webpack_require__(21);
    new LazyLoad();
})();

/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var createElement = __webpack_require__(0); //创建元素节点
var constructorInherit = __webpack_require__(2); //构造函数的继承(拷贝继承)
var SuperType = __webpack_require__(1); //超类型(子类型继承的对象)

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var createElement = __webpack_require__(0); //创建元素节点
var constructorInherit = __webpack_require__(2); //构造函数的继承(拷贝继承)
var SuperType = __webpack_require__(1); //超类型(子类型继承的对象)
var jsonToArray = __webpack_require__(20);

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
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(5); //对象的扩展方法
var offset = __webpack_require__(22); //获取元素距离文档的left和top
var getDomArray = __webpack_require__(6); //获取原生的dom节点并转换成数组

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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(5); //对象的扩展方法
var getDomArray = __webpack_require__(6); //获取原生的dom节点并转换成数组

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

/***/ })
/******/ ]);