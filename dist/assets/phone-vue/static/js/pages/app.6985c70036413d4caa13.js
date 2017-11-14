webpackJsonp([3],{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

const tools = __webpack_require__(2); // 工具方法集合
const applications = __webpack_require__(5); // 应用方法集合
const Super = __webpack_require__(29); // 超类型(子类型继承的对象)
const Mask = __webpack_require__(75); // 遮罩

// 子类型
const Sub = tools.constructorInherit(Super, {
    // 回调
    callback: {
        moduleDomRenderBefore: function (self) {
            if (self.opts.config.type === 'confirm') {
                if (self.opts.config.confirm.isShowMask && !self.mask) {
                    self.mask = new Mask(self.opts.config.mask);
                }
                if (self.wrapDom && getComputedStyle(self.wrapDom).position === 'static') {
                    self.wrapDom.style.position = 'relative';
                }
            }
        },
        moduleDomHideAfter: function (self) {
            if (self.mask) {
                self.mask.moduleDomHide();
            }
        },
        // 确认
        confirm: function () {},
        // 取消
        cancel: function () {},
        // 关闭
        close: function () {}
    },
    // 配置
    config: {
        /*
         * 弹窗类型
         * `alert`  提示信息类型
         * `confirm`    确认框类型
         * */
        type: 'alert', // 默认是提示框
        /*
         * 弹窗位置
         * `center` 居中
         * `bottom` 居下
         * `top` 居上
         * */
        positionLocation: 'center', // 弹窗的定位位置    positionMethod定位方式强制fixed
        // 提示框
        alert: {
            timer: null, // 定时器装载
            time: 3000, // 展示的时间
            isShowIcon: false, // 是否显示icon
            isShowClose: true, // 是否显示关闭按钮
            icon: 'icon-chenggong', // icon的class
            content: '成功' // 内容信息
        },
        // 确认框
        confirm: {
            // 点击确认是否关闭弹窗
            isShowHeader: true, // 是否显示头部
            headerContent: '提示:', // 头部内容
            isShowBody: true, // 是否显示主体
            content: '<div>确定要执行这个操作?</div>', // 主体内容
            isShowFooter: true, // 是否显示尾部
            footerContent: '', // 尾部内容
            isShowClose: true, // 是否显示关闭按钮
            closeContent: '<div class="iconfont icon-guanbi"></div>', // 关闭按钮的内容
            isShowConfirm: true, // 是否显示确认按钮
            confirmContent: '确认', // 确认按钮的内容
            isShowCancel: true, // 是否显示取消按钮
            cancelContent: '取消', // 取消按钮的内容
            isCustom: false, // 是否自定义
            isShowIcon: false, // 是否显示icon
            icon: 'icon-jinggao', // icon的类型
            isShowMask: true, // 是否显示遮罩
            isHandHide: false // 是否手动隐藏(一般只用于点击确认时)
        },
        // 遮罩
        mask: {
            config: {}
        }
    },
    // 数据
    data: {}
});

// 内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    const config = this.opts.config;
    const type = `g-dialog-${config.type}`; // 弹窗类型
    const positionLocation = `g-dialog-${config.positionLocation}`; // 弹窗的定位位置
    // 弹窗结构
    const html = `
        ${this.renderAlert()}
        ${this.renderConfirm()}
    `;
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: `g-dialog ${type} ${positionLocation}`,
            innerHTML: html
        }
    });
};

// 提示框
Sub.prototype.renderAlert = function () {
    const config = this.opts.config;
    if (config.type !== 'alert') {
        return '';
    }
    const alert = config.alert;
    let htmlIcon = '';
    if (alert.isShowIcon) {
        htmlIcon = `<div class="g-dialog-alert-icon iconfont ${alert.icon}"></div>`;
    }
    let closeHtml = '';
    if (alert.isShowClose) {
        closeHtml = '<div class="g-dialog-alert-close iconfont icon-guanbi" ></div>';
    }
    return `
        ${closeHtml}
        ${htmlIcon}
        <div class="g-dialog-alert-text">${alert.content}</div>
    `;
};

// 确认框
Sub.prototype.renderConfirm = function () {
    const config = this.opts.config;
    if (config.type !== 'confirm') {
        return '';
    }
    const confirm = config.confirm;
    let htmlHeader = '';
    if (confirm.isShowHeader) {
        htmlHeader = `<div class="g-dialog-confirm-header">${confirm.headerContent}</div>`;
    }
    let htmlBody = '';
    if (confirm.isShowBody) {
        let htmlIcon = '';
        if (confirm.isShowIcon) {
            htmlIcon = `<div class="g-dialog-confirm-body-system-icon iconfont ${confirm.icon}"></div>`;
        }
        let bodyClass = 'g-dialog-confirm-body-system';
        let bodyContent = `
            ${htmlIcon}
            <div class="g-dialog-confirm-body-system-text">${confirm.content}</div>
        `;
        if (confirm.isCustom) {
            bodyClass = 'g-dialog-confirm-body-custom';
            bodyContent = confirm.content;
        }
        htmlBody = `
            <div class="g-dialog-confirm-body">
                <div class="${bodyClass}">
                    ${bodyContent}
                </div>
            </div>
        `;
    }
    let htmlFooter = '';
    if (confirm.isShowFooter) {
        let htmlCancel = '';
        if (confirm.isShowCancel) {
            htmlCancel = `<div class="g-button g-button-cancel g-dialog-confirm-footer-cancel">${confirm.cancelContent}</div>`;
        }
        let htmlConfirm = '';
        if (confirm.isShowConfirm) {
            htmlConfirm = `<div class="g-button g-dialog-confirm-footer-confirm">${confirm.confirmContent}</div>`;
        }
        htmlFooter = `<div class="g-dialog-confirm-footer">${htmlCancel}${htmlConfirm}</div>`;
    }
    let htmlClose = '';
    if (confirm.isShowClose) {
        htmlClose = `<div class="g-dialog-confirm-close">${confirm.closeContent}</div>`;
    }
    return `
        ${htmlHeader}
        ${htmlBody}
        ${htmlFooter}
        ${htmlClose} 
    `;
};

// 功能(覆盖超类型)
Sub.prototype.power = function () {
    const self = this;
    const config = this.opts.config;
    // 提示框
    if (config.type === 'alert') {
        const close = this.moduleDom.querySelector('.g-dialog-alert-close');
        config.alert.timer = setTimeout(function () {
            self.moduleDomHide();
        }, config.alert.time);
        close.addEventListener('click', function () {
            clearTimeout(config.alert.timer);
            self.moduleDomHide();
        });
    }
    // 确认框
    if (config.type === 'confirm') {
        const close = this.moduleDom.querySelector('.g-dialog-confirm-close');
        if (close) {
            close.addEventListener('click', function () {
                self.moduleDomHide();
                self.opts.callback.close();
            });
        }
        const cancel = this.moduleDom.querySelector('.g-dialog-confirm-footer-cancel');
        if (cancel) {
            cancel.addEventListener('click', function () {
                self.moduleDomHide();
                self.opts.callback.cancel();
            });
        }
        const confirm = this.moduleDom.querySelector('.g-dialog-confirm-footer-confirm');
        if (confirm) {
            confirm.addEventListener('click', function () {
                if (!self.opts.config.confirm.isHandHide) {
                    self.moduleDomHide();
                }
                self.opts.callback.confirm();
            });
        }
    }
};

module.exports = Sub;

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

const tools = __webpack_require__(2); // 工具方法集合
const applications = __webpack_require__(5); // 应用方法集合

// 底层构造函数
function Super(json) {
    // 函数外部传来的参数
    this.opts = tools.extend({
        // 内部默认参数
        defaults: {
            // 父级
            wrap: '.g-body', // 这个仅支持传入选择器和原生dom节点
            // 回调
            callback: {
                // 内部模块创建之前
                moduleDomCreateBefore: function (self) {
                    // 内部模块创建之前的回调待续...
                },
                // 内部模块创建之后
                moduleDomCreateAfter: function (self) {
                    // 内部模块创建之后的回调待续...
                },
                // 内部模块渲染之前
                moduleDomRenderBefore: function (self) {
                    // 内部模块渲染之前的回调待续...
                },
                // 内部模块渲染之后
                moduleDomRenderAfter: function (self) {
                    // 内部模块渲染之后的回调待续...
                },
                // 内部模块移除之前
                moduleDomRemoveBefore: function (self) {
                    // 内部模块移除之前的回调待续...
                },
                // 内部模块移除之后
                moduleDomRemoveAfter: function (self) {
                    // 内部模块移除之后的回调待续...
                },
                // 内部模块显示之前
                moduleDomShowBefore: function (self) {
                    // 内部模块显示之前的回调待续...
                },
                // 内部模块显示之后
                moduleDomShowAfter: function (self) {
                    // 内部模块显示之后的回调待续...
                },
                // 内部模块隐藏之前
                moduleDomHideBefore: function (self) {
                    // 内部模块隐藏之前的回调待续...
                },
                // 内部模块隐藏之后
                moduleDomHideAfter: function (self) {
                    // 内部模块隐藏之后的回调待续...
                },
                // 外部容器获取之前
                wrapDomGetBefore: function (self) {
                    // 外部容器获取之前的回调待续...
                },
                // 外部容器获取之后
                wrapDomGetAfter: function (self) {
                    // 外部容器获取之后的回调待续...
                },
                // 外部容器移除之前
                wrapDomRemoveBefore: function (self) {
                    // 外部容器移除之前的回调待续...
                },
                // 外部容器移除之后
                wrapDomRemoveAfter: function (self) {
                    // 外部容器移除之后的回调待续...
                }
            },
            // 配置
            config: {
                // 内部模块的自定义属性
                moduleDomCustomAttribute: {},
                // 内部模块插入到外部容器的方式
                moduleDomRenderMethod: {
                    method: 'appendChild', // 'appendChild','insertBefore'
                    child: null
                },
                moduleDomStyle: {}, // 内部模块的样式
                moduleDomIsRender: true, // 内部模块是否渲染
                moduleDomIsClearTimer: true // 内部模块是否清除所有定时器(默认清除)
            },
            // 数据
            data: {}
        },
        // 外部传入参数
        inherits: json
    });
    // 函数内部自带的属性
    this.moduleDom = null; // 内部的模块
    this.wrapDom = null; // 内部模块的外部承载容器,如果没有也没关系,不过不往里面append罢了
    this.moduleDomTimer = {}; // 内部模块的定时器存储(假设内部模块有定时器)
    this.init(); // 初始化
}

// 初始化
Super.prototype.init = function () {
    this.render();
    this.power();
};

// 渲染
Super.prototype.render = function () {
    this.moduleDomRemove(); // 内部模块的移除(重新初始化的时候要移除掉以前有的内部模块)

    const callback = this.opts.callback;
    callback.moduleDomCreateBefore(this);
    this.moduleDomCreate(); // 内部模块的创建
    callback.moduleDomCreateAfter(this);

    this.wrapDomGet(); // 外部容器的获取
    this.moduleDomRender(); // 内部模块的渲染(如果外部容器存在,就把内部模块填充到外部容器里)
};

// 功能(这个方法需要在子类型里被覆盖掉)
Super.prototype.power = function () {
    // 功能待续...
};

// 内部模块的创建(这个方法需要在子类型里被覆盖掉)
Super.prototype.moduleDomCreate = function () {
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-super-type',
            innerHTML: `
                <div class="g-super-type-text" style="text-align: center;">周华飞爱侯丽杰,侯丽杰爱周华飞sup-es5</div>
            `
        }
    });
};

// 内部模块的渲染
Super.prototype.moduleDomRender = function () {
    const callback = this.opts.callback;
    const config = this.opts.config;
    if (config.moduleDomIsRender && this.wrapDom) {
        callback.moduleDomRenderBefore(this);
        const renderMethod = config.moduleDomRenderMethod;
        if (renderMethod.method === 'insertBefore') {
            const dom = applications.getDomArray(renderMethod.child)[0];
            if (dom) {
                this.wrapDom.insertBefore(this.moduleDom, dom);
            } else {
                this.wrapDom.insertBefore(this.moduleDom, this.wrapDom.children[0]);
            }
        }
        if (renderMethod.method === 'appendChild') {
            this.wrapDom.appendChild(this.moduleDom);
        }
        callback.moduleDomRenderAfter(this);
    }
};

// 内部模块的移除
Super.prototype.moduleDomRemove = function () {
    const callback = this.opts.callback;
    if (this.moduleDom && this.moduleDom.parentNode) {
        callback.moduleDomRemoveBefore(this);
        this.moduleDom.parentNode.removeChild(this.moduleDom);
        callback.moduleDomRemoveAfter(this);
    }
    this.moduleDomClearTimer();
};

// 内部模块的定时器清除(假设内部模块有定时器)
Super.prototype.moduleDomClearTimer = function () {
    const self = this;
    if (self.opts.config.moduleDomIsClearTimer) {
        Object.keys(self.moduleDomTimer).forEach(function (attr) {
            clearInterval(self.moduleDomTimer[attr]);
            clearTimeout(self.moduleDomTimer[attr]);
        });
    }
};

// 内部模块的隐藏(显示隐藏和是否清除定时器无关)
Super.prototype.moduleDomHide = function () {
    const callback = this.opts.callback;
    if (this.moduleDom.parentNode) {
        this.opts.config.moduleDomIsRender = false;
        callback.moduleDomHideBefore(this);
        this.moduleDom.parentNode.removeChild(this.moduleDom);
        callback.moduleDomHideAfter(this);
    }
};

// 内部模块的显示(显示隐藏和是否清除定时器无关)
Super.prototype.moduleDomShow = function () {
    const callback = this.opts.callback;
    callback.moduleDomShowBefore(this);
    if (this.wrapDom) {
        this.opts.config.moduleDomIsRender = true;
        this.moduleDomRender();
    }
    callback.moduleDomShowAfter(this);
};

// 外部容器的获取
Super.prototype.wrapDomGet = function () {
    const callback = this.opts.callback;
    callback.wrapDomGetBefore(this);
    this.wrapDom = applications.getDomArray(this.opts.wrap)[0];
    callback.wrapDomGetAfter(this);
};

// 外部容器的移除
Super.prototype.wrapDomRemove = function () {
    const callback = this.opts.callback;
    // 先移除内部的模块
    this.moduleDomRemove();
    // 再移除外部的容器
    if (this.wrapDom) {
        callback.wrapDomRemoveBefore(this);
        this.wrapDom.parentNode.removeChild(this.wrapDom);
        callback.wrapDomRemoveAfter(this);
    }
};

// 获取内部模块的整体html结构
Super.prototype.getModuleDomHtml = function () {
    return this.moduleDom.outerHTML;
};

module.exports = Super;

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 33:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(40)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_vue__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__app_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes_route__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vuex_store__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_tools__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__utils_tools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_applications__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_applications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__utils_applications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_axios__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__api_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_jsonp__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_jsonp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__api_jsonp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dom_g_lazy_load__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dom_g_lazy_load___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_dom_g_lazy_load__);










// 公共的样式
__webpack_require__(80);

// 工具方法
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$tools = __WEBPACK_IMPORTED_MODULE_4__utils_tools___default.a;
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$applications = __WEBPACK_IMPORTED_MODULE_5__utils_applications___default.a;
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$axios = __WEBPACK_IMPORTED_MODULE_6__api_axios___default.a;
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$jsonp = __WEBPACK_IMPORTED_MODULE_7__api_jsonp___default.a;
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$lazyload = new __WEBPACK_IMPORTED_MODULE_8__components_dom_g_lazy_load___default.a({ isInitRender: false });

// 关闭vue的提示
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;

// 路由处理
__WEBPACK_IMPORTED_MODULE_2__routes_route__["a" /* default */].beforeEach(function (to, from, next) {
    // 标题
    const titleDom = document.querySelector('title');
    if (titleDom) {
        titleDom.innerHTML = to.meta.title;
    }

    // 验证是否登录
    const isLogin = true;
    if (to.meta.isValidateLogin && !isLogin) {
        next({ path: '/' });
    } else {
        next();
    }
});
__WEBPACK_IMPORTED_MODULE_2__routes_route__["a" /* default */].afterEach(function (to, from) {
    // 二维码
    const qrDom = document.querySelector('.g-qr-code-svg');
    if (qrDom) {
        qrDom.innerHTML = __WEBPACK_IMPORTED_MODULE_5__utils_applications___default.a.qrCode(window.location.href);
    }
});

setTimeout(function () {
    new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
        el: '#app',
        router: __WEBPACK_IMPORTED_MODULE_2__routes_route__["a" /* default */],
        store: __WEBPACK_IMPORTED_MODULE_3__vuex_store__["a" /* default */],
        template: '<app></app>',
        components: { app: __WEBPACK_IMPORTED_MODULE_1__app_vue___default.a }
    });
}, 0);

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(38)
}
var Component = __webpack_require__(32)(
  /* script */
  __webpack_require__(41),
  /* template */
  __webpack_require__(42),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1d0e219a",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhouhuafei/Desktop/suibianxiexie/vue/phone/src/app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d0e219a", Component.options)
  } else {
    hotAPI.reload("data-v-1d0e219a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(34)("15c78d7d", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1d0e219a\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1d0e219a\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"app.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 40:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            config: {
                isShowCopyright: true,
                isShowFooterNav: true
            },
            data: {}
        };
    },
    mounted() {
        const wrap = document.querySelector('.g-wrap');
        [].slice.call(wrap.querySelectorAll('script')).forEach(function (v) {
            wrap.removeChild(v);
        });
    }
});

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "width": "inherit"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "g-body"
  }, [_c('router-view')], 1), _vm._v(" "), _c('div', {
    staticClass: "g-footer"
  }, [(_vm.$store.state.isShowCopyright) ? _c('div', {
    staticClass: "g-copyright"
  }, [_c('div', {
    staticClass: "g-copyright-icon iconfont icon-logo"
  }), _vm._v(" "), _c('div', {
    staticClass: "g-copyright-text"
  }, [_vm._v("版权信息哟")])]) : _vm._e(), _vm._v(" "), (_vm.$store.state.footerNav) ? _c('div', {
    staticClass: "g-footer-nav"
  }, [_c('div', {
    staticClass: "g-footer-nav-body"
  }, [_vm._l((_vm.$store.state.footerNav.data), function(value) {
    return [_c('router-link', {
      staticClass: "g-footer-nav-item",
      class: {
        'g-footer-nav-item-active': value.href === _vm.$route.path
      },
      attrs: {
        "to": value.href
      }
    }, [_c('div', {
      staticClass: "g-footer-nav-item-icon iconfont",
      class: [value.icon]
    }), _vm._v(" "), _c('div', {
      staticClass: "g-footer-nav-item-text",
      domProps: {
        "textContent": _vm._s(value.text)
      }
    })])]
  })], 2)]) : _vm._e()])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-header"
  }, [_c('div', {
    staticClass: "g-qr-code"
  }, [_c('div', {
    staticClass: "g-qr-code-text"
  }, [_vm._v("有码可依 有码必依")]), _vm._v(" "), _c('div', {
    staticClass: "g-qr-code-svg"
  }), _vm._v(" "), _c('div', {
    staticClass: "g-qr-code-text"
  }, [_vm._v("执码必严 违码必究")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1d0e219a", module.exports)
  }
}

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a);

const routes = [
// 我的页面
{
    path: '/mine/',
    name: 'mine',
    meta: {
        title: '我的',
        isValidateLogin: false
    },
    component: function (resolve) {
        __webpack_require__.e/* require.ensure */(0).then((function () {
            resolve(__webpack_require__(83));
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
},
// 首页
{
    path: '/',
    name: 'home',
    meta: {
        title: '首页',
        isValidateLogin: false
    },
    component: function (resolve) {
        __webpack_require__.e/* require.ensure */(1).then((function () {
            resolve(__webpack_require__(84));
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
}];

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
    routes: routes
}));

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

const tools = __webpack_require__(2); // 工具方法集合
const applications = __webpack_require__(5); // 应用方法集合
const Super = __webpack_require__(29); // 超类型(子类型继承的对象)

// 子类型
const Sub = tools.constructorInherit(Super, {
    // 回调
    callback: {
        click: function () {},
        moduleDomRenderBefore: function (self) {
            if (self.wrapDom && getComputedStyle(self.wrapDom).position === 'static') {
                self.wrapDom.style.position = 'relative';
            }
        }
    },
    // 配置
    config: {
        isTransparent: false, // 是不是透明的(默认不透明)
        positionMethod: 'fixed' // 模块的定位方式 'fixed'(相对于整个文档) 'absolute'(相对于外部容器)
    },
    // 数据
    data: {}
});

// 内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    const config = this.opts.config;
    let className = '';
    if (config.isTransparent) {
        className = 'g-mask-transparent';
    }
    if (config.positionMethod === 'fixed') {
        className = 'g-mask-fixed';
    }
    this.moduleDom = applications.createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: `g-mask ${className}`,
            innerHTML: ''
        }
    });
};

// 功能(覆盖超类型)
Sub.prototype.power = function () {
    const self = this;
    this.moduleDom.addEventListener('click', function (ev) {
        self.opts.callback.click();
        ev.stopPropagation();
    });
};

module.exports = Sub;

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex___default.a);

// 这里定义初始值
const state = {
    count: 10
};

const mutations = {
    add(context) {
        context.count++;
    },
    decrease(context) {
        context.count--;
    }
};

// 事件触发后的逻辑操作
// 参数为事件函数
const actions = {
    add(add) {
        add.commit('add');
    },
    decrease(decrease) {
        decrease.commit('decrease');
    },
    oddAdd({ commit, state }) {
        if (state.count % 2 === 0) {
            commit('add');
        }
    }
};

// 返回改变后的数值
const getters = {
    count(context) {
        return context.count;
    },
    getOdd(context) {
        return context.count % 2 === 0 ? '偶数' : '奇数';
    }
};

/*
* state: 单一状态树
* getters: 有时候我们需要从 store 中的 state 中派生出一些状态（可以认为是 store 的计算属性）
* mutations: 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
* Action: 类似于 mutation，不同在于：
*   ＊提交的是 mutation，而不是直接变更状态。
*   ＊可以包含任意异步操作。
* */
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex___default.a.Store({
    state: {
        isShowCopyright: true,
        footerNav: {
            config: {
                isShow: true
            },
            data: [{
                href: '/',
                text: '首页',
                icon: 'icon-shouye',
                isHighlight: true,
                isShowMark: false
            }, {
                href: '/mine/',
                text: '我的',
                icon: 'icon-wode',
                isHighlight: false,
                isShowMark: false
            }]
        }
    },
    getters: {},
    mutations: {},
    actions: {}
}));

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

const axios = __webpack_require__(31);
const tools = __webpack_require__(2);
const Dialog = __webpack_require__(15);

module.exports = function (json) {
    const opts = tools.extend({
        defaults: {
            method: 'get', // 请求方式默认get
            isHandleError: true, // 是否处理错误
            isHandleFailure: true, // 是否处理失败
            timeout: 5000 // 超时
        },
        inherits: json
    });
    /*
    * javascript axios get params
    * javascript axios post/put/delete data
    * 把上述四种数据的传参方式进行统一化,统一使用data
    * nodejs express get req.query
    * nodejs express post/put/delete body-parser req.body
    * 把上述四种数据的传参方式进行统一化,统一使用req.data
    * */
    if (opts.method.toLowerCase() === 'get') {
        opts.params = opts.data || opts.params;
    }
    return axios(opts).catch(function (error) {
        const response = {
            data: {
                status: 'error',
                message: '接口出错',
                error: error // 这里的error其实是一个Error类型的数据
            }
        };
        if (opts.isHandleError) {
            new Dialog({
                config: {
                    alert: {
                        content: error
                    }
                }
            });
        }
        return response;
    }).then(function (response) {
        const dataInfo = response.data;
        if (dataInfo.status === 'failure' && opts.isHandleFailure) {
            new Dialog({
                config: {
                    alert: {
                        content: `失败: ${dataInfo.message}`
                    }
                }
            });
        }
        return dataInfo;
    });
};

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

const tools = __webpack_require__(2);
const Dialog = __webpack_require__(15);
module.exports = function (json) {
    const opts = tools.extend({
        defaults: {
            url: '',
            data: {},
            isHandleError: true, // 是否处理错误
            isHandleFailure: true, // 是否处理失败
            callback: function () {}
        },
        inherits: json
    });
    const url = opts.url;
    const data = opts.data;
    const callback = opts.callback;

    function fnError() {
        const dataInfo = {
            status: 'error',
            message: '接口出错',
            error: 'Request failed with status code 404'
        };
        callback(dataInfo);
        if (opts.isHandleError) {
            new Dialog({
                config: {
                    alert: {
                        content: `Error: ${dataInfo.error}`
                    }
                }
            });
        }
    }

    if (url) {
        const fnName = `jsonpCallback${new Date().getTime()}`;
        window[fnName] = function (dataInfo) {
            callback(dataInfo);
            if (dataInfo.status === 'failure' && opts.isHandleFailure) {
                new Dialog({
                    config: {
                        alert: {
                            content: `失败: ${dataInfo.message}`
                        }
                    }
                });
            }
        };
        const script = document.createElement('script');
        script.addEventListener('error', function () {
            document.body.removeChild(script);
            fnError();
        });
        script.addEventListener('load', function () {
            document.body.removeChild(script);
        });
        const parameter = tools.queryStringify(data);
        // jsonp - jsonp只支持get请求,其他一概不支持
        if (parameter) {
            script.src = `${url}?${parameter}&callback=${fnName}`;
        } else {
            script.src = `${url}?callback=${fnName}`;
        }
        document.body.appendChild(script);
    } else {
        fnError();
    }
};

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

const tools = __webpack_require__(2); // 工具方法集合
const applications = __webpack_require__(5); // 应用方法集合

// 延迟加载
function LazyLoad(json) {
    this.opts = tools.extend({
        defaults: {
            element: '.g-lazy-load', // 哪些元素进行懒加载
            srcAttr: 'data-src', // 默认获取哪里的属性值当做src
            moreHeight: 0, // 多加载一部分高度的图片
            interval: 80, // 函数节流时间(延迟时间)
            isInitRender: true // 是否初始化的时候就进行render
        },
        inherits: json
    });
    this.clientHeight = document.documentElement.clientHeight;
    this.init();
}

LazyLoad.prototype.init = function () {
    if (this.opts.isInitRender) {
        this.render();
    }
    this.power();
};
LazyLoad.prototype.render = function () {
    const self = this;
    const moreHeight = this.opts.moreHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const minTop = scrollTop - moreHeight;
    const maxTop = this.clientHeight + minTop + moreHeight;
    const src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUCB1jYAACAAAFAAGNu5vzAAAAAElFTkSuQmCC';
    const aDom = applications.getDomArray(this.opts.element);
    aDom.forEach(function (v) {
        if (v.tagName.toLowerCase() === 'img') {
            if (!v.getAttribute('src')) {
                v.src = src;
            }
            v.setAttribute('height', '100%');
            v.setAttribute('width', '100%');
        }
    });
    aDom.forEach(function (v) {
        // 排除那些被none掉的元素(被none掉的元素,通过offsetWidth和offsetHeight获取到的值是0)
        if (v.offsetWidth) {
            const elementTop = applications.offset(v).top;
            const elementBottom = elementTop + v.offsetHeight;
            // 出现在可视区才进行处理
            if (elementBottom >= minTop && elementTop <= maxTop) {
                if (v.tagName.toLowerCase() === 'img') {
                    if (v.getAttribute(self.opts.srcAttr)) {
                        v.src = v.getAttribute(self.opts.srcAttr);
                    }
                    v.removeAttribute('height');
                    v.removeAttribute('width');
                } else if (v.getAttribute(self.opts.srcAttr)) {
                    v.style.backgroundImage = `url(${v.getAttribute(self.opts.srcAttr)})`;
                }
                v.classList.remove('g-lazy-load');
                v.classList.add('g-lazy-load-active');
            }
        }
    });
};
LazyLoad.prototype.power = function () {
    const self = this;
    let timer = null;
    window.addEventListener('scroll', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            self.render();
        }, self.opts.interval);
    });
};
module.exports = LazyLoad;

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[35]);
//# sourceMappingURL=app.6985c70036413d4caa13.js.map