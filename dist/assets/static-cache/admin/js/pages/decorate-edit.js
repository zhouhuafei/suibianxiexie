webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t){"object"===( false?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=t(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):("object"!==Object.prototype.toString.call(window.zhf).slice(8,-1).toLowerCase()&&(window.zhf={}),window.zhf.getDomArray=t())}(0,function(){function e(e,t){for(var o=t;o!==e&&null!==o;)o=o.parentNode;return o===e}return function(t,o){var n=[],l=document;if(o&&(l="string"===Object.prototype.toString.call(o).slice(8,-1).toLowerCase()?document.querySelector(o):1===o.nodeType?o:o===document?o:"htmlcollection"===Object.prototype.toString.call(o).slice(8,-1).toLowerCase()||"nodelist"===Object.prototype.toString.call(o).slice(8,-1).toLowerCase()?[].slice.call(o)[0]:null),!l)return[];if(t)if("string"===Object.prototype.toString.call(t).slice(8,-1).toLowerCase())n=[].slice.call(l.querySelectorAll(t));else if(1===t.nodeType)n=[t],o&&(e(l,t)||(n=[]));else if(t===document)n=[t],o&&(n=[]);else if(("htmlcollection"===Object.prototype.toString.call(t).slice(8,-1).toLowerCase()||"nodelist"===Object.prototype.toString.call(t).slice(8,-1).toLowerCase())&&(n=[].slice.call(t),o)){var r=[];n.forEach(function(t){e(l,t)&&r.push(t)}),n=r}return n}});

/***/ }),
/* 18 */,
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
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
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

var listToStyles = __webpack_require__(86)

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
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

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
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

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
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
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
/* 34 */
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
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
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
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _super = __webpack_require__(1);

var _super2 = _interopRequireDefault(_super);

var _vue = __webpack_require__(16);

var _vue2 = _interopRequireDefault(_vue);

var _app = __webpack_require__(83);

var _app2 = _interopRequireDefault(_app);

var _vueDraggableResizable = __webpack_require__(106);

var _vueDraggableResizable2 = _interopRequireDefault(_vueDraggableResizable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(107);
__webpack_require__(108);

_vue2.default.component('vue-draggable-resizable', _vueDraggableResizable2.default);

new _vue2.default({
    el: '#app',
    components: { app: _app2.default },
    template: '<app></app>'
});

// class Sub extends Super {
//     power() {
//     }
// }
//
// new Sub();

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(84)
}
var Component = __webpack_require__(34)(
  /* script */
  __webpack_require__(87),
  /* template */
  __webpack_require__(105),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-232fccf7",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\www\\github-zhouhuafei\\suibianxiexie\\app\\admin\\assets\\js\\pages\\decorate-edit\\app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-232fccf7", Component.options)
  } else {
    hotAPI.reload("data-v-232fccf7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(33)("2c06cf11", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-232fccf7\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-232fccf7\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n/*\r\n// px转rem(h5) 这个是给手机端用的。\r\n@function px2rem($px, $psd:320) {\r\n    @return $px / $psd * 10rem;\r\n}\r\n*/\nhtml[data-v-232fccf7], body[data-v-232fccf7], .g-wrap[data-v-232fccf7], .g-body[data-v-232fccf7], #app[data-v-232fccf7] {\n  height: 100%;\n}\n.g-wrap .g-body[data-v-232fccf7] {\n  padding: 0;\n}\n#app[data-v-232fccf7] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.components-collection[data-v-232fccf7] {\n  width: 300px;\n  min-width: 300px;\n  height: 100%;\n  background: #666666;\n  overflow: hidden;\n}\n.components[data-v-232fccf7] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.components-item[data-v-232fccf7] {\n  width: 50px;\n  height: 50px;\n  background: #ffffff;\n  margin: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  cursor: move;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.components-item.components-item_highlight[data-v-232fccf7] {\n    background: #fe313c;\n    color: #ffffff;\n}\n.components-item.components-item_selected[data-v-232fccf7] {\n    background: #fe313c;\n    color: #ffffff;\n    border: 2px dashed rgba(255, 0, 0, 0.5);\n}\n.components-item-drag[data-v-232fccf7] {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.components-simulator[data-v-232fccf7] {\n  width: 392px;\n  min-width: 375px;\n  height: 100%;\n  background: #777777;\n}\n.simulator[data-v-232fccf7] {\n  background: #888888;\n  height: 667px;\n  overflow: auto;\n}\n.simulator-item[data-v-232fccf7] {\n  position: relative;\n  height: 80px;\n  background: #f8f8f8;\n  cursor: move;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: 5;\n}\n.simulator-item.simulator-item_active .simulator-item-mask[data-v-232fccf7] {\n    display: block;\n    border: 2px dashed rgba(255, 0, 0, 0.5);\n}\n.simulator-item-hint[data-v-232fccf7] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  z-index: 2;\n}\n.simulator-item-mask[data-v-232fccf7] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(231, 91, 69, 0.5);\n  display: none;\n  z-index: 3;\n}\n.simulator-item-edit[data-v-232fccf7] {\n  height: 40px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 50%;\n  border-radius: 1000px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  display: none;\n  background: #ffffff;\n  z-index: 4;\n}\n.components-editor[data-v-232fccf7] {\n  background: #999999;\n  height: 100%;\n  width: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.editor-item[data-v-232fccf7] {\n  display: none;\n}\n.editor-item.editor-item_active[data-v-232fccf7] {\n    display: block;\n}\n.vue-draggable-resizable[data-v-232fccf7] {\n  cursor: move;\n  background: rgba(36, 186, 171, 0.4);\n  /*border: 1px solid #24baab;*/\n}\n.vue-draggable-resizable.active[data-v-232fccf7] {\n    background: rgba(255, 0, 0, 0.4);\n    border-color: #e75c45;\n}\n.vue-draggable-resizable[data-v-232fccf7] .handle {\n  /*border-radius: 50%;*/\n  border-color: #e75c45;\n}\n", ""]);

// exports


/***/ }),
/* 86 */
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
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dragula = __webpack_require__(88);

var _dragula2 = _interopRequireDefault(_dragula);

var _vueSlicksort = __webpack_require__(97);

var _index = __webpack_require__(98);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SortableList = {
    mixins: [_vueSlicksort.ContainerMixin],
    template: '<div class="simulator">\n        <slot></slot>\n    </div>'
}; //
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

var SortableItem = {
    mixins: [_vueSlicksort.ElementMixin],
    props: ['item'],
    template: '<div class="simulator-item"\n        :class="[item.isHighlight ? \'simulator-item_active\' : \'\', item.isSelected ? \'simulator-item_selected\' : \'\']"\n    >\n        <div class="simulator-item-hint">\u8BF7\u7F16\u8F91{{item.text}}\u7EC4\u4EF6\u5185\u5BB9</div>\n        <div class="simulator-item-edit">\u7F16\u8F91</div>\n        <div class="simulator-item-mask"></div>\n    </div>'
};

exports.default = {
    name: 'decorate-edit',
    data: function data() {
        return {
            width: 0,
            height: 0,
            x: 0,
            y: 0,
            // 所有的组件集合
            components: {
                swiper: {
                    isHighlight: false,
                    isSelected: false,
                    name: 'swiper',
                    text: '轮播'
                },
                cut: {
                    isHighlight: false,
                    isSelected: false,
                    name: 'cut',
                    text: '切图'
                },
                gap: {
                    isHighlight: false,
                    isSelected: true,
                    name: 'gap',
                    text: '间隔'
                },
                goods: {
                    isHighlight: false,
                    isSelected: false,
                    name: 'goods',
                    text: '商品'
                },
                nav: {
                    isHighlight: false,
                    isSelected: false,
                    name: 'nav',
                    text: '导航'
                }
            },
            // 页面中选择了哪些组件
            pageSelectedComponents: [{
                isHighlight: true,
                name: 'gap',
                text: '间隔'
            }, {
                isHighlight: false,
                name: 'nav',
                text: '导航'
            }, {
                isHighlight: false,
                name: 'nav',
                text: '导航'
            }, {
                isHighlight: false,
                name: 'nav',
                text: '导航'
            }, {
                isHighlight: false,
                name: 'nav',
                text: '导航'
            }, {
                isHighlight: false,
                name: 'nav',
                text: '导航'
            }, {
                isHighlight: false,
                name: 'nav',
                text: '导航'
            }, {
                isHighlight: false,
                name: 'nav',
                text: '导航'
            }, {
                isHighlight: false,
                name: 'nav',
                text: '导航'
            }, {
                isHighlight: false,
                name: 'nav',
                text: '导航'
            }],
            // 当前选中的是哪一个组件
            nowSelectedComponents: {}
        };
    },

    components: {
        gHotArea: _index2.default,
        SortableList: SortableList,
        SortableItem: SortableItem
    },
    methods: {
        onResize: function onResize(x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        },
        onDrag: function onDrag(x, y) {
            this.x = x;
            this.y = y;
        }
    },
    mounted: function mounted() {
        var components = document.querySelector('.components');
        var simulator = document.querySelector('.simulator');
        var drake = (0, _dragula2.default)([components, simulator], {
            copy: function copy(el, source) {
                // 只允许components容器中的每一项可复制
                return source === components;
            },
            moves: function moves(el, source) {
                // 只允许components容器中的每一项可移动
                return source === components;
            }
        });
        drake.on('drag', function (el, source) {
            // 这里的el是指components里的块
            console.log('drag');
            el.style.background = '#0f0';
        });
        drake.on('shadow', function (el, container, source) {
            // 这里的el是指simulator内的块
            console.log('shadow');
            el.scrollIntoViewIfNeeded(); // 处理滚动条
            el.style.background = '#f00';
        });
        drake.on('drop', function (el, target, source, sibling) {
            // 这里的el是指simulator内的块
            console.log('drop');
            el.style.background = '#00f';
            // 业务逻辑待续...
            // simulator.removeChild(el);
        });
    }
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var emitter = __webpack_require__(89);
var crossvent = __webpack_require__(93);
var classes = __webpack_require__(96);
var doc = document;
var documentElement = doc.documentElement;

function dragula (initialContainers, options) {
  var len = arguments.length;
  if (len === 1 && Array.isArray(initialContainers) === false) {
    options = initialContainers;
    initialContainers = [];
  }
  var _mirror; // mirror image
  var _source; // source container
  var _item; // item being dragged
  var _offsetX; // reference x
  var _offsetY; // reference y
  var _moveX; // reference move x
  var _moveY; // reference move y
  var _initialSibling; // reference sibling when grabbed
  var _currentSibling; // reference sibling now
  var _copy; // item used for copying
  var _renderTimer; // timer for setTimeout renderMirrorImage
  var _lastDropTarget = null; // last container item was over
  var _grabbed; // holds mousedown context until first mousemove

  var o = options || {};
  if (o.moves === void 0) { o.moves = always; }
  if (o.accepts === void 0) { o.accepts = always; }
  if (o.invalid === void 0) { o.invalid = invalidTarget; }
  if (o.containers === void 0) { o.containers = initialContainers || []; }
  if (o.isContainer === void 0) { o.isContainer = never; }
  if (o.copy === void 0) { o.copy = false; }
  if (o.copySortSource === void 0) { o.copySortSource = false; }
  if (o.revertOnSpill === void 0) { o.revertOnSpill = false; }
  if (o.removeOnSpill === void 0) { o.removeOnSpill = false; }
  if (o.direction === void 0) { o.direction = 'vertical'; }
  if (o.ignoreInputTextSelection === void 0) { o.ignoreInputTextSelection = true; }
  if (o.mirrorContainer === void 0) { o.mirrorContainer = doc.body; }

  var drake = emitter({
    containers: o.containers,
    start: manualStart,
    end: end,
    cancel: cancel,
    remove: remove,
    destroy: destroy,
    canMove: canMove,
    dragging: false
  });

  if (o.removeOnSpill === true) {
    drake.on('over', spillOver).on('out', spillOut);
  }

  events();

  return drake;

  function isContainer (el) {
    return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
  }

  function events (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousedown', grab);
    touchy(documentElement, op, 'mouseup', release);
  }

  function eventualMovements (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
  }

  function movements (remove) {
    var op = remove ? 'remove' : 'add';
    crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8
    crossvent[op](documentElement, 'click', preventGrabbed);
  }

  function destroy () {
    events(true);
    release({});
  }

  function preventGrabbed (e) {
    if (_grabbed) {
      e.preventDefault();
    }
  }

  function grab (e) {
    _moveX = e.clientX;
    _moveY = e.clientY;

    var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;
    if (ignore) {
      return; // we only care about honest-to-god left clicks and touch events
    }
    var item = e.target;
    var context = canStart(item);
    if (!context) {
      return;
    }
    _grabbed = context;
    eventualMovements();
    if (e.type === 'mousedown') {
      if (isInput(item)) { // see also: https://github.com/bevacqua/dragula/issues/208
        item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
      } else {
        e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
      }
    }
  }

  function startBecauseMouseMoved (e) {
    if (!_grabbed) {
      return;
    }
    if (whichMouseButton(e) === 0) {
      release({});
      return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
    }
    // truthy check fixes #239, equality fixes #207
    if (e.clientX !== void 0 && e.clientX === _moveX && e.clientY !== void 0 && e.clientY === _moveY) {
      return;
    }
    if (o.ignoreInputTextSelection) {
      var clientX = getCoord('clientX', e);
      var clientY = getCoord('clientY', e);
      var elementBehindCursor = doc.elementFromPoint(clientX, clientY);
      if (isInput(elementBehindCursor)) {
        return;
      }
    }

    var grabbed = _grabbed; // call to end() unsets _grabbed
    eventualMovements(true);
    movements();
    end();
    start(grabbed);

    var offset = getOffset(_item);
    _offsetX = getCoord('pageX', e) - offset.left;
    _offsetY = getCoord('pageY', e) - offset.top;

    classes.add(_copy || _item, 'gu-transit');
    renderMirrorImage();
    drag(e);
  }

  function canStart (item) {
    if (drake.dragging && _mirror) {
      return;
    }
    if (isContainer(item)) {
      return; // don't drag container itself
    }
    var handle = item;
    while (getParent(item) && isContainer(getParent(item)) === false) {
      if (o.invalid(item, handle)) {
        return;
      }
      item = getParent(item); // drag target should be a top element
      if (!item) {
        return;
      }
    }
    var source = getParent(item);
    if (!source) {
      return;
    }
    if (o.invalid(item, handle)) {
      return;
    }

    var movable = o.moves(item, source, handle, nextEl(item));
    if (!movable) {
      return;
    }

    return {
      item: item,
      source: source
    };
  }

  function canMove (item) {
    return !!canStart(item);
  }

  function manualStart (item) {
    var context = canStart(item);
    if (context) {
      start(context);
    }
  }

  function start (context) {
    if (isCopy(context.item, context.source)) {
      _copy = context.item.cloneNode(true);
      drake.emit('cloned', _copy, context.item, 'copy');
    }

    _source = context.source;
    _item = context.item;
    _initialSibling = _currentSibling = nextEl(context.item);

    drake.dragging = true;
    drake.emit('drag', _item, _source);
  }

  function invalidTarget () {
    return false;
  }

  function end () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    drop(item, getParent(item));
  }

  function ungrab () {
    _grabbed = false;
    eventualMovements(true);
    movements(true);
  }

  function release (e) {
    ungrab();

    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var clientX = getCoord('clientX', e);
    var clientY = getCoord('clientY', e);
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    if (dropTarget && ((_copy && o.copySortSource) || (!_copy || dropTarget !== _source))) {
      drop(item, dropTarget);
    } else if (o.removeOnSpill) {
      remove();
    } else {
      cancel();
    }
  }

  function drop (item, target) {
    var parent = getParent(item);
    if (_copy && o.copySortSource && target === _source) {
      parent.removeChild(_item);
    }
    if (isInitialPlacement(target)) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, target, _source, _currentSibling);
    }
    cleanup();
  }

  function remove () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var parent = getParent(item);
    if (parent) {
      parent.removeChild(item);
    }
    drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
    cleanup();
  }

  function cancel (revert) {
    if (!drake.dragging) {
      return;
    }
    var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
    var item = _copy || _item;
    var parent = getParent(item);
    var initial = isInitialPlacement(parent);
    if (initial === false && reverts) {
      if (_copy) {
        if (parent) {
          parent.removeChild(_copy);
        }
      } else {
        _source.insertBefore(item, _initialSibling);
      }
    }
    if (initial || reverts) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, parent, _source, _currentSibling);
    }
    cleanup();
  }

  function cleanup () {
    var item = _copy || _item;
    ungrab();
    removeMirrorImage();
    if (item) {
      classes.rm(item, 'gu-transit');
    }
    if (_renderTimer) {
      clearTimeout(_renderTimer);
    }
    drake.dragging = false;
    if (_lastDropTarget) {
      drake.emit('out', item, _lastDropTarget, _source);
    }
    drake.emit('dragend', item);
    _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
  }

  function isInitialPlacement (target, s) {
    var sibling;
    if (s !== void 0) {
      sibling = s;
    } else if (_mirror) {
      sibling = _currentSibling;
    } else {
      sibling = nextEl(_copy || _item);
    }
    return target === _source && sibling === _initialSibling;
  }

  function findDropTarget (elementBehindCursor, clientX, clientY) {
    var target = elementBehindCursor;
    while (target && !accepted()) {
      target = getParent(target);
    }
    return target;

    function accepted () {
      var droppable = isContainer(target);
      if (droppable === false) {
        return false;
      }

      var immediate = getImmediateChild(target, elementBehindCursor);
      var reference = getReference(target, immediate, clientX, clientY);
      var initial = isInitialPlacement(target, reference);
      if (initial) {
        return true; // should always be able to drop it right back where it was
      }
      return o.accepts(_item, target, _source, reference);
    }
  }

  function drag (e) {
    if (!_mirror) {
      return;
    }
    e.preventDefault();

    var clientX = getCoord('clientX', e);
    var clientY = getCoord('clientY', e);
    var x = clientX - _offsetX;
    var y = clientY - _offsetY;

    _mirror.style.left = x + 'px';
    _mirror.style.top = y + 'px';

    var item = _copy || _item;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    var changed = dropTarget !== null && dropTarget !== _lastDropTarget;
    if (changed || dropTarget === null) {
      out();
      _lastDropTarget = dropTarget;
      over();
    }
    var parent = getParent(item);
    if (dropTarget === _source && _copy && !o.copySortSource) {
      if (parent) {
        parent.removeChild(item);
      }
      return;
    }
    var reference;
    var immediate = getImmediateChild(dropTarget, elementBehindCursor);
    if (immediate !== null) {
      reference = getReference(dropTarget, immediate, clientX, clientY);
    } else if (o.revertOnSpill === true && !_copy) {
      reference = _initialSibling;
      dropTarget = _source;
    } else {
      if (_copy && parent) {
        parent.removeChild(item);
      }
      return;
    }
    if (
      (reference === null && changed) ||
      reference !== item &&
      reference !== nextEl(item)
    ) {
      _currentSibling = reference;
      dropTarget.insertBefore(item, reference);
      drake.emit('shadow', item, dropTarget, _source);
    }
    function moved (type) { drake.emit(type, item, _lastDropTarget, _source); }
    function over () { if (changed) { moved('over'); } }
    function out () { if (_lastDropTarget) { moved('out'); } }
  }

  function spillOver (el) {
    classes.rm(el, 'gu-hide');
  }

  function spillOut (el) {
    if (drake.dragging) { classes.add(el, 'gu-hide'); }
  }

  function renderMirrorImage () {
    if (_mirror) {
      return;
    }
    var rect = _item.getBoundingClientRect();
    _mirror = _item.cloneNode(true);
    _mirror.style.width = getRectWidth(rect) + 'px';
    _mirror.style.height = getRectHeight(rect) + 'px';
    classes.rm(_mirror, 'gu-transit');
    classes.add(_mirror, 'gu-mirror');
    o.mirrorContainer.appendChild(_mirror);
    touchy(documentElement, 'add', 'mousemove', drag);
    classes.add(o.mirrorContainer, 'gu-unselectable');
    drake.emit('cloned', _mirror, _item, 'mirror');
  }

  function removeMirrorImage () {
    if (_mirror) {
      classes.rm(o.mirrorContainer, 'gu-unselectable');
      touchy(documentElement, 'remove', 'mousemove', drag);
      getParent(_mirror).removeChild(_mirror);
      _mirror = null;
    }
  }

  function getImmediateChild (dropTarget, target) {
    var immediate = target;
    while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
      immediate = getParent(immediate);
    }
    if (immediate === documentElement) {
      return null;
    }
    return immediate;
  }

  function getReference (dropTarget, target, x, y) {
    var horizontal = o.direction === 'horizontal';
    var reference = target !== dropTarget ? inside() : outside();
    return reference;

    function outside () { // slower, but able to figure out any position
      var len = dropTarget.children.length;
      var i;
      var el;
      var rect;
      for (i = 0; i < len; i++) {
        el = dropTarget.children[i];
        rect = el.getBoundingClientRect();
        if (horizontal && (rect.left + rect.width / 2) > x) { return el; }
        if (!horizontal && (rect.top + rect.height / 2) > y) { return el; }
      }
      return null;
    }

    function inside () { // faster, but only available if dropped inside a child element
      var rect = target.getBoundingClientRect();
      if (horizontal) {
        return resolve(x > rect.left + getRectWidth(rect) / 2);
      }
      return resolve(y > rect.top + getRectHeight(rect) / 2);
    }

    function resolve (after) {
      return after ? nextEl(target) : target;
    }
  }

  function isCopy (item, container) {
    return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
  }
}

function touchy (el, op, type, fn) {
  var touch = {
    mouseup: 'touchend',
    mousedown: 'touchstart',
    mousemove: 'touchmove'
  };
  var pointers = {
    mouseup: 'pointerup',
    mousedown: 'pointerdown',
    mousemove: 'pointermove'
  };
  var microsoft = {
    mouseup: 'MSPointerUp',
    mousedown: 'MSPointerDown',
    mousemove: 'MSPointerMove'
  };
  if (global.navigator.pointerEnabled) {
    crossvent[op](el, pointers[type], fn);
  } else if (global.navigator.msPointerEnabled) {
    crossvent[op](el, microsoft[type], fn);
  } else {
    crossvent[op](el, touch[type], fn);
    crossvent[op](el, type, fn);
  }
}

function whichMouseButton (e) {
  if (e.touches !== void 0) { return e.touches.length; }
  if (e.which !== void 0 && e.which !== 0) { return e.which; } // see https://github.com/bevacqua/dragula/issues/261
  if (e.buttons !== void 0) { return e.buttons; }
  var button = e.button;
  if (button !== void 0) { // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
    return button & 1 ? 1 : button & 2 ? 3 : (button & 4 ? 2 : 0);
  }
}

function getOffset (el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
    top: rect.top + getScroll('scrollTop', 'pageYOffset')
  };
}

function getScroll (scrollProp, offsetProp) {
  if (typeof global[offsetProp] !== 'undefined') {
    return global[offsetProp];
  }
  if (documentElement.clientHeight) {
    return documentElement[scrollProp];
  }
  return doc.body[scrollProp];
}

function getElementBehindPoint (point, x, y) {
  var p = point || {};
  var state = p.className;
  var el;
  p.className += ' gu-hide';
  el = doc.elementFromPoint(x, y);
  p.className = state;
  return el;
}

function never () { return false; }
function always () { return true; }
function getRectWidth (rect) { return rect.width || (rect.right - rect.left); }
function getRectHeight (rect) { return rect.height || (rect.bottom - rect.top); }
function getParent (el) { return el.parentNode === doc ? null : el.parentNode; }
function isInput (el) { return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el); }
function isEditable (el) {
  if (!el) { return false; } // no parents were editable
  if (el.contentEditable === 'false') { return false; } // stop the lookup
  if (el.contentEditable === 'true') { return true; } // found a contentEditable element in the chain
  return isEditable(getParent(el)); // contentEditable is set to 'inherit'
}

function nextEl (el) {
  return el.nextElementSibling || manually();
  function manually () {
    var sibling = el;
    do {
      sibling = sibling.nextSibling;
    } while (sibling && sibling.nodeType !== 1);
    return sibling;
  }
}

function getEventHost (e) {
  // on touchend event, we have to use `e.changedTouches`
  // see http://stackoverflow.com/questions/7192563/touchend-event-properties
  // see https://github.com/bevacqua/dragula/issues/34
  if (e.targetTouches && e.targetTouches.length) {
    return e.targetTouches[0];
  }
  if (e.changedTouches && e.changedTouches.length) {
    return e.changedTouches[0];
  }
  return e;
}

function getCoord (coord, e) {
  var host = getEventHost(e);
  var missMap = {
    pageX: 'clientX', // IE8
    pageY: 'clientY' // IE8
  };
  if (coord in missMap && !(coord in host) && missMap[coord] in host) {
    coord = missMap[coord];
  }
  return host[coord];
}

module.exports = dragula;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var atoa = __webpack_require__(90);
var debounce = __webpack_require__(91);

module.exports = function emitter (thing, options) {
  var opts = options || {};
  var evt = {};
  if (thing === undefined) { thing = {}; }
  thing.on = function (type, fn) {
    if (!evt[type]) {
      evt[type] = [fn];
    } else {
      evt[type].push(fn);
    }
    return thing;
  };
  thing.once = function (type, fn) {
    fn._once = true; // thing.off(fn) still works!
    thing.on(type, fn);
    return thing;
  };
  thing.off = function (type, fn) {
    var c = arguments.length;
    if (c === 1) {
      delete evt[type];
    } else if (c === 0) {
      evt = {};
    } else {
      var et = evt[type];
      if (!et) { return thing; }
      et.splice(et.indexOf(fn), 1);
    }
    return thing;
  };
  thing.emit = function () {
    var args = atoa(arguments);
    return thing.emitterSnapshot(args.shift()).apply(this, args);
  };
  thing.emitterSnapshot = function (type) {
    var et = (evt[type] || []).slice(0);
    return function () {
      var args = atoa(arguments);
      var ctx = this || thing;
      if (type === 'error' && opts.throws !== false && !et.length) { throw args.length === 1 ? args[0] : args; }
      et.forEach(function emitter (listen) {
        if (opts.async) { debounce(listen, args, ctx); } else { listen.apply(ctx, args); }
        if (listen._once) { thing.off(type, listen); }
      });
      return thing;
    };
  };
  return thing;
};


/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = function atoa (a, n) { return Array.prototype.slice.call(a, n); }


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ticky = __webpack_require__(92);

module.exports = function debounce (fn, args, ctx) {
  if (!fn) { return; }
  ticky(function run () {
    fn.apply(ctx || null, args || []);
  });
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {var si = typeof setImmediate === 'function', tick;
if (si) {
  tick = function (fn) { setImmediate(fn); };
} else {
  tick = function (fn) { setTimeout(fn, 0); };
}

module.exports = tick;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32).setImmediate))

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var customEvent = __webpack_require__(94);
var eventmap = __webpack_require__(95);
var doc = global.document;
var addEvent = addEventEasy;
var removeEvent = removeEventEasy;
var hardCache = [];

if (!global.addEventListener) {
  addEvent = addEventHard;
  removeEvent = removeEventHard;
}

module.exports = {
  add: addEvent,
  remove: removeEvent,
  fabricate: fabricateEvent
};

function addEventEasy (el, type, fn, capturing) {
  return el.addEventListener(type, fn, capturing);
}

function addEventHard (el, type, fn) {
  return el.attachEvent('on' + type, wrap(el, type, fn));
}

function removeEventEasy (el, type, fn, capturing) {
  return el.removeEventListener(type, fn, capturing);
}

function removeEventHard (el, type, fn) {
  var listener = unwrap(el, type, fn);
  if (listener) {
    return el.detachEvent('on' + type, listener);
  }
}

function fabricateEvent (el, type, model) {
  var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
  if (el.dispatchEvent) {
    el.dispatchEvent(e);
  } else {
    el.fireEvent('on' + type, e);
  }
  function makeClassicEvent () {
    var e;
    if (doc.createEvent) {
      e = doc.createEvent('Event');
      e.initEvent(type, true, true);
    } else if (doc.createEventObject) {
      e = doc.createEventObject();
    }
    return e;
  }
  function makeCustomEvent () {
    return new customEvent(type, { detail: model });
  }
}

function wrapperFactory (el, type, fn) {
  return function wrapper (originalEvent) {
    var e = originalEvent || global.event;
    e.target = e.target || e.srcElement;
    e.preventDefault = e.preventDefault || function preventDefault () { e.returnValue = false; };
    e.stopPropagation = e.stopPropagation || function stopPropagation () { e.cancelBubble = true; };
    e.which = e.which || e.keyCode;
    fn.call(el, e);
  };
}

function wrap (el, type, fn) {
  var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
  hardCache.push({
    wrapper: wrapper,
    element: el,
    type: type,
    fn: fn
  });
  return wrapper;
}

function unwrap (el, type, fn) {
  var i = find(el, type, fn);
  if (i) {
    var wrapper = hardCache[i].wrapper;
    hardCache.splice(i, 1); // free up a tad of memory
    return wrapper;
  }
}

function find (el, type, fn) {
  var i, item;
  for (i = 0; i < hardCache.length; i++) {
    item = hardCache[i];
    if (item.element === el && item.type === type && item.fn === fn) {
      return i;
    }
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
var NativeCustomEvent = global.CustomEvent;

function useNative () {
  try {
    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
    return  'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {
  }
  return false;
}

/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */

module.exports = useNative() ? NativeCustomEvent :

// IE >= 9
'function' === typeof document.createEvent ? function CustomEvent (type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :

// IE <= 8
function CustomEvent (type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var eventmap = [];
var eventname = '';
var ron = /^on/;

for (eventname in global) {
  if (ron.test(eventname)) {
    eventmap.push(eventname.slice(2));
  }
}

module.exports = eventmap;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cache = {};
var start = '(?:^|\\s)';
var end = '(?:\\s|$)';

function lookupClass (className) {
  var cached = cache[className];
  if (cached) {
    cached.lastIndex = 0;
  } else {
    cache[className] = cached = new RegExp(start + className + end, 'g');
  }
  return cached;
}

function addClass (el, className) {
  var current = el.className;
  if (!current.length) {
    el.className = className;
  } else if (!lookupClass(className).test(current)) {
    el.className += ' ' + className;
  }
}

function rmClass (el, className) {
  el.className = el.className.replace(lookupClass(className), ' ').trim();
}

module.exports = {
  add: addClass,
  rm: rmClass
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.VueSlicksort = {})));
}(this, (function (exports) { 'use strict';

// Export Sortable Element Component Mixin
var ElementMixin = {
  inject: ['manager'],
  props: {
    index: {
      type: Number,
      required: true
    },
    collection: {
      type: [String, Number],
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  mounted: function mounted() {
    var _$props = this.$props,
        collection = _$props.collection,
        disabled = _$props.disabled,
        index = _$props.index;


    if (!disabled) {
      this.setDraggable(collection, index);
    }
  },


  watch: {
    index: function index(newIndex) {
      if (this.$el && this.$el.sortableInfo) {
        this.$el.sortableInfo.index = newIndex;
      }
    },
    disabled: function disabled(isDisabled) {
      if (isDisabled) {
        this.removeDraggable(this.collection);
      } else {
        this.setDraggable(this.collection, this.index);
      }
    },
    collection: function collection(newCollection, oldCollection) {
      this.removeDraggable(oldCollection);
      this.setDraggable(newCollection, this.index);
    }
  },

  beforeDestroy: function beforeDestroy() {
    var collection = this.collection,
        disabled = this.disabled;


    if (!disabled) this.removeDraggable(collection);
  },

  methods: {
    setDraggable: function setDraggable(collection, index) {
      var node = this.$el;

      node.sortableInfo = {
        index: index,
        collection: collection,
        manager: this.manager
      };

      this.ref = { node: node };
      this.manager.add(collection, this.ref);
    },
    removeDraggable: function removeDraggable(collection) {
      this.manager.remove(collection, this.ref);
    }
  }
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();



























var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var Manager = function () {
  function Manager() {
    classCallCheck(this, Manager);

    this.refs = {};
  }

  createClass(Manager, [{
    key: "add",
    value: function add(collection, ref) {
      if (!this.refs[collection]) {
        this.refs[collection] = [];
      }

      this.refs[collection].push(ref);
    }
  }, {
    key: "remove",
    value: function remove(collection, ref) {
      var index = this.getIndex(collection, ref);

      if (index !== -1) {
        this.refs[collection].splice(index, 1);
      }
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return this.active;
    }
  }, {
    key: "getActive",
    value: function getActive() {
      var _this = this;

      return this.refs[this.active.collection].find(function (_ref) {
        var node = _ref.node;
        return node.sortableInfo.index == _this.active.index;
      });
    }
  }, {
    key: "getIndex",
    value: function getIndex(collection, ref) {
      return this.refs[collection].indexOf(ref);
    }
  }, {
    key: "getOrderedRefs",
    value: function getOrderedRefs() {
      var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.active.collection;

      return this.refs[collection].sort(function (a, b) {
        return a.node.sortableInfo.index - b.node.sortableInfo.index;
      });
    }
  }]);
  return Manager;
}();

function arrayMove(arr, previousIndex, newIndex) {
  var array = arr.slice(0);
  if (newIndex >= array.length) {
    var k = newIndex - array.length;
    while (k-- + 1) {
      array.push(undefined);
    }
  }
  array.splice(newIndex, 0, array.splice(previousIndex, 1)[0]);
  return array;
}

var events = {
  start: ['touchstart', 'mousedown'],
  move: ['touchmove', 'mousemove'],
  end: ['touchend', 'touchcancel', 'mouseup']
};

var vendorPrefix = function () {
  if (typeof window === 'undefined' || typeof document === 'undefined') return ''; // server environment
  // fix for:
  //    https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  //    window.getComputedStyle() returns null inside an iframe with display: none
  // in this case return an array with a fake mozilla style in it.
  var styles = window.getComputedStyle(document.documentElement, '') || ['-moz-hidden-iframe'];
  var pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || styles.OLink === '' && ['', 'o'])[1];

  switch (pre) {
    case 'ms':
      return 'ms';
    default:
      return pre && pre.length ? pre[0].toUpperCase() + pre.substr(1) : '';
  }
}();

function closest(el, fn) {
  while (el) {
    if (fn(el)) return el;
    el = el.parentNode;
  }
}

function limit(min, max, value) {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}

function getCSSPixelValue(stringValue) {
  if (stringValue.substr(-2) === 'px') {
    return parseFloat(stringValue);
  }
  return 0;
}

function getElementMargin(element) {
  var style = window.getComputedStyle(element);

  return {
    top: getCSSPixelValue(style.marginTop),
    right: getCSSPixelValue(style.marginRight),
    bottom: getCSSPixelValue(style.marginBottom),
    left: getCSSPixelValue(style.marginLeft)
  };
}

// Export Sortable Container Component Mixin
var ContainerMixin = {
  data: function data() {
    return {
      sorting: false,
      sortingIndex: null,
      manager: new Manager(),
      events: {
        start: this.handleStart,
        move: this.handleMove,
        end: this.handleEnd
      }
    };
  },


  props: {
    value: { type: Array, required: true },
    axis: { type: String, default: 'y' }, // 'x', 'y', 'xy'
    distance: { type: Number, default: 0 },
    pressDelay: { type: Number, default: 0 },
    pressThreshold: { type: Number, default: 5 },
    useDragHandle: { type: Boolean, default: false },
    useWindowAsScrollContainer: { type: Boolean, default: false },
    hideSortableGhost: { type: Boolean, default: true },
    lockToContainerEdges: { type: Boolean, default: false },
    lockOffset: { type: [String, Number, Array], default: '50%' },
    transitionDuration: { type: Number, default: 300 },
    lockAxis: String,
    helperClass: String,
    contentWindow: Object,
    shouldCancelStart: {
      type: Function,
      default: function _default(e) {
        // Cancel sorting if the event target is an `input`, `textarea`, `select` or `option`
        var disabledElements = ['input', 'textarea', 'select', 'option', 'button'];
        return disabledElements.indexOf(e.target.tagName.toLowerCase()) !== -1;
      }
    },
    getHelperDimensions: {
      type: Function,
      default: function _default(_ref) {
        var node = _ref.node;
        return {
          width: node.offsetWidth,
          height: node.offsetHeight
        };
      }
    }
  },

  provide: function provide() {
    return {
      manager: this.manager
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.container = this.$el;
    this.document = this.container.ownerDocument || document;
    this._window = this.contentWindow || window;
    this.scrollContainer = this.useWindowAsScrollContainer ? this.document.body : this.container;

    var _loop = function _loop(key) {
      if (_this.events.hasOwnProperty(key)) {
        events[key].forEach(function (eventName) {
          return _this.container.addEventListener(eventName, _this.events[key], false);
        });
      }
    };

    for (var key in this.events) {
      _loop(key);
    }
  },
  beforeDestroy: function beforeDestroy() {
    var _this2 = this;

    var _loop2 = function _loop2(key) {
      if (_this2.events.hasOwnProperty(key)) {
        events[key].forEach(function (eventName) {
          return _this2.container.removeEventListener(eventName, _this2.events[key]);
        });
      }
    };

    for (var key in this.events) {
      _loop2(key);
    }
  },


  methods: {
    handleStart: function handleStart(e) {
      var _this3 = this;

      var _$props = this.$props,
          distance = _$props.distance,
          shouldCancelStart = _$props.shouldCancelStart;


      if (e.button === 2 || shouldCancelStart(e)) {
        return false;
      }

      this._touched = true;
      this._pos = {
        x: e.pageX,
        y: e.pageY
      };

      var node = closest(e.target, function (el) {
        return el.sortableInfo != null;
      });

      if (node && node.sortableInfo && this.nodeIsChild(node) && !this.sorting) {
        var useDragHandle = this.$props.useDragHandle;
        var _node$sortableInfo = node.sortableInfo,
            index = _node$sortableInfo.index,
            collection = _node$sortableInfo.collection;


        if (useDragHandle && !closest(e.target, function (el) {
          return el.sortableHandle != null;
        })) return;

        this.manager.active = { index: index, collection: collection };

        /*
        * Fixes a bug in Firefox where the :active state of anchor tags
        * prevent subsequent 'mousemove' events from being fired
        * (see https://github.com/clauderic/react-sortable-hoc/issues/118)
        */
        if (e.target.tagName.toLowerCase() === 'a') {
          e.preventDefault();
        }

        if (!distance) {
          if (this.$props.pressDelay === 0) {
            this.handlePress(e);
          } else {
            this.pressTimer = setTimeout(function () {
              return _this3.handlePress(e);
            }, this.$props.pressDelay);
          }
        }
      }
    },
    nodeIsChild: function nodeIsChild(node) {
      return node.sortableInfo.manager === this.manager;
    },
    handleMove: function handleMove(e) {
      var _$props2 = this.$props,
          distance = _$props2.distance,
          pressThreshold = _$props2.pressThreshold;


      if (!this.sorting && this._touched) {
        this._delta = {
          x: this._pos.x - e.pageX,
          y: this._pos.y - e.pageY
        };
        var delta = Math.abs(this._delta.x) + Math.abs(this._delta.y);

        if (!distance && (!pressThreshold || pressThreshold && delta >= pressThreshold)) {
          clearTimeout(this.cancelTimer);
          this.cancelTimer = setTimeout(this.cancel, 0);
        } else if (distance && delta >= distance && this.manager.isActive()) {
          this.handlePress(e);
        }
      }
    },
    handleEnd: function handleEnd() {
      var distance = this.$props.distance;


      this._touched = false;

      if (!distance) {
        this.cancel();
      }
    },
    cancel: function cancel() {
      if (!this.sorting) {
        clearTimeout(this.pressTimer);
        this.manager.active = null;
      }
    },
    handlePress: function handlePress(e) {
      var _this4 = this;

      var active = this.manager.getActive();

      if (active) {
        var _$props3 = this.$props,
            axis = _$props3.axis,
            getHelperDimensions = _$props3.getHelperDimensions,
            helperClass = _$props3.helperClass,
            hideSortableGhost = _$props3.hideSortableGhost,
            useWindowAsScrollContainer = _$props3.useWindowAsScrollContainer;
        var node = active.node,
            collection = active.collection;
        var index = node.sortableInfo.index;

        var margin = getElementMargin(node);

        var containerBoundingRect = this.container.getBoundingClientRect();
        var dimensions = getHelperDimensions({ index: index, node: node, collection: collection });

        this.node = node;
        this.margin = margin;
        this.width = dimensions.width;
        this.height = dimensions.height;
        this.marginOffset = {
          x: this.margin.left + this.margin.right,
          y: Math.max(this.margin.top, this.margin.bottom)
        };
        this.boundingClientRect = node.getBoundingClientRect();
        this.containerBoundingRect = containerBoundingRect;
        this.index = index;
        this.newIndex = index;

        this._axis = {
          x: axis.indexOf('x') >= 0,
          y: axis.indexOf('y') >= 0
        };
        this.offsetEdge = this.getEdgeOffset(node);
        this.initialOffset = this.getOffset(e);
        this.initialScroll = {
          top: this.scrollContainer.scrollTop,
          left: this.scrollContainer.scrollLeft
        };

        this.initialWindowScroll = {
          top: window.pageYOffset,
          left: window.pageXOffset
        };

        var fields = node.querySelectorAll('input, textarea, select');
        var clonedNode = node.cloneNode(true);
        var clonedFields = [].concat(toConsumableArray(clonedNode.querySelectorAll('input, textarea, select'))); // Convert NodeList to Array

        clonedFields.forEach(function (field, index) {
          if (field.type !== 'file' && fields[index]) {
            field.value = fields[index].value;
          }
        });

        this.helper = this.document.body.appendChild(clonedNode);

        this.helper.style.position = 'fixed';
        this.helper.style.top = this.boundingClientRect.top - margin.top + 'px';
        this.helper.style.left = this.boundingClientRect.left - margin.left + 'px';
        this.helper.style.width = this.width + 'px';
        this.helper.style.height = this.height + 'px';
        this.helper.style.boxSizing = 'border-box';
        this.helper.style.pointerEvents = 'none';

        if (hideSortableGhost) {
          this.sortableGhost = node;
          node.style.visibility = 'hidden';
          node.style.opacity = 0;
        }

        this.minTranslate = {};
        this.maxTranslate = {};
        if (this._axis.x) {
          this.minTranslate.x = (useWindowAsScrollContainer ? 0 : containerBoundingRect.left) - this.boundingClientRect.left - this.width / 2;
          this.maxTranslate.x = (useWindowAsScrollContainer ? this._window.innerWidth : containerBoundingRect.left + containerBoundingRect.width) - this.boundingClientRect.left - this.width / 2;
        }
        if (this._axis.y) {
          this.minTranslate.y = (useWindowAsScrollContainer ? 0 : containerBoundingRect.top) - this.boundingClientRect.top - this.height / 2;
          this.maxTranslate.y = (useWindowAsScrollContainer ? this._window.innerHeight : containerBoundingRect.top + containerBoundingRect.height) - this.boundingClientRect.top - this.height / 2;
        }

        if (helperClass) {
          var _helper$classList;

          (_helper$classList = this.helper.classList).add.apply(_helper$classList, toConsumableArray(helperClass.split(' ')));
        }

        this.listenerNode = e.touches ? node : this._window;
        events.move.forEach(function (eventName) {
          return _this4.listenerNode.addEventListener(eventName, _this4.handleSortMove, false);
        });
        events.end.forEach(function (eventName) {
          return _this4.listenerNode.addEventListener(eventName, _this4.handleSortEnd, false);
        });

        this.sorting = true;
        this.sortingIndex = index;

        this.$emit('sortStart', { event: e, node: node, index: index, collection: collection });
      }
    },
    handleSortMove: function handleSortMove(e) {
      e.preventDefault(); // Prevent scrolling on mobile

      this.updatePosition(e);
      this.animateNodes();
      this.autoscroll();

      this.$emit('sortMove', { event: e });
    },
    handleSortEnd: function handleSortEnd(e) {
      var _this5 = this;

      var collection = this.manager.active.collection;

      // Remove the event listeners if the node is still in the DOM

      if (this.listenerNode) {
        events.move.forEach(function (eventName) {
          return _this5.listenerNode.removeEventListener(eventName, _this5.handleSortMove);
        });
        events.end.forEach(function (eventName) {
          return _this5.listenerNode.removeEventListener(eventName, _this5.handleSortEnd);
        });
      }

      // Remove the helper from the DOM
      this.helper.parentNode.removeChild(this.helper);

      if (this.hideSortableGhost && this.sortableGhost) {
        this.sortableGhost.style.visibility = '';
        this.sortableGhost.style.opacity = '';
      }

      var nodes = this.manager.refs[collection];
      for (var i = 0, len = nodes.length; i < len; i++) {
        var node = nodes[i];
        var el = node.node;

        // Clear the cached offsetTop / offsetLeft value
        node.edgeOffset = null;

        // Remove the transforms / transitions
        el.style[vendorPrefix + 'Transform'] = '';
        el.style[vendorPrefix + 'TransitionDuration'] = '';
      }

      // Stop autoscroll
      clearInterval(this.autoscrollInterval);
      this.autoscrollInterval = null;

      // Update state
      this.manager.active = null;

      this.sorting = false;
      this.sortingIndex = null;

      this.$emit('sortEnd', {
        event: e,
        oldIndex: this.index,
        newIndex: this.newIndex,
        collection: collection
      });
      this.$emit('input', arrayMove(this.value, this.index, this.newIndex));

      this._touched = false;
    },
    getEdgeOffset: function getEdgeOffset(node) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { top: 0, left: 0 };

      // Get the actual offsetTop / offsetLeft value, no matter how deep the node is nested
      if (node) {
        var nodeOffset = {
          top: offset.top + node.offsetTop,
          left: offset.left + node.offsetLeft
        };
        if (node.parentNode !== this.container) {
          return this.getEdgeOffset(node.parentNode, nodeOffset);
        } else {
          return nodeOffset;
        }
      }
    },
    getOffset: function getOffset(e) {
      return {
        x: e.touches ? e.touches[0].pageX : e.pageX,
        y: e.touches ? e.touches[0].pageY : e.pageY
      };
    },
    getLockPixelOffsets: function getLockPixelOffsets() {
      var lockOffset = this.$props.lockOffset;


      if (!Array.isArray(this.lockOffset)) {
        lockOffset = [lockOffset, lockOffset];
      }

      if (lockOffset.length !== 2) {
        throw new Error('lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given ' + lockOffset);
      }

      var _lockOffset = lockOffset,
          _lockOffset2 = slicedToArray(_lockOffset, 2),
          minLockOffset = _lockOffset2[0],
          maxLockOffset = _lockOffset2[1];

      return [this.getLockPixelOffset(minLockOffset), this.getLockPixelOffset(maxLockOffset)];
    },
    getLockPixelOffset: function getLockPixelOffset(lockOffset) {
      var offsetX = lockOffset;
      var offsetY = lockOffset;
      var unit = 'px';

      if (typeof lockOffset === 'string') {
        var match = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(lockOffset);

        if (match === null) {
          throw new Error('lockOffset value should be a number or a string of a number followed by "px" or "%". Given ' + lockOffset);
        }

        offsetX = offsetY = parseFloat(lockOffset);
        unit = match[1];
      }

      if (!isFinite(offsetX) || !isFinite(offsetY)) {
        throw new Error('lockOffset value should be a finite. Given ' + lockOffset);
      }

      if (unit === '%') {
        offsetX = offsetX * this.width / 100;
        offsetY = offsetY * this.height / 100;
      }

      return {
        x: offsetX,
        y: offsetY
      };
    },
    updatePosition: function updatePosition(e) {
      var _$props4 = this.$props,
          lockAxis = _$props4.lockAxis,
          lockToContainerEdges = _$props4.lockToContainerEdges;


      var offset = this.getOffset(e);
      var translate = {
        x: offset.x - this.initialOffset.x,
        y: offset.y - this.initialOffset.y
      };
      // Adjust for window scroll
      translate.y -= window.pageYOffset - this.initialWindowScroll.top;
      translate.x -= window.pageXOffset - this.initialWindowScroll.left;

      this.translate = translate;

      if (lockToContainerEdges) {
        var _getLockPixelOffsets = this.getLockPixelOffsets(),
            _getLockPixelOffsets2 = slicedToArray(_getLockPixelOffsets, 2),
            minLockOffset = _getLockPixelOffsets2[0],
            maxLockOffset = _getLockPixelOffsets2[1];

        var minOffset = {
          x: this.width / 2 - minLockOffset.x,
          y: this.height / 2 - minLockOffset.y
        };
        var maxOffset = {
          x: this.width / 2 - maxLockOffset.x,
          y: this.height / 2 - maxLockOffset.y
        };

        translate.x = limit(this.minTranslate.x + minOffset.x, this.maxTranslate.x - maxOffset.x, translate.x);
        translate.y = limit(this.minTranslate.y + minOffset.y, this.maxTranslate.y - maxOffset.y, translate.y);
      }

      if (lockAxis === 'x') {
        translate.y = 0;
      } else if (lockAxis === 'y') {
        translate.x = 0;
      }

      this.helper.style[vendorPrefix + 'Transform'] = 'translate3d(' + translate.x + 'px,' + translate.y + 'px, 0)';
    },
    animateNodes: function animateNodes() {
      var _$props5 = this.$props,
          transitionDuration = _$props5.transitionDuration,
          hideSortableGhost = _$props5.hideSortableGhost;

      var nodes = this.manager.getOrderedRefs();
      var deltaScroll = {
        left: this.scrollContainer.scrollLeft - this.initialScroll.left,
        top: this.scrollContainer.scrollTop - this.initialScroll.top
      };
      var sortingOffset = {
        left: this.offsetEdge.left + this.translate.x + deltaScroll.left,
        top: this.offsetEdge.top + this.translate.y + deltaScroll.top
      };
      var scrollDifference = {
        top: window.pageYOffset - this.initialWindowScroll.top,
        left: window.pageXOffset - this.initialWindowScroll.left
      };
      this.newIndex = null;

      for (var i = 0, len = nodes.length; i < len; i++) {
        var node = nodes[i].node;

        var index = node.sortableInfo.index;
        var width = node.offsetWidth;
        var height = node.offsetHeight;
        var offset = {
          width: this.width > width ? width / 2 : this.width / 2,
          height: this.height > height ? height / 2 : this.height / 2
        };

        var translate = {
          x: 0,
          y: 0
        };
        var edgeOffset = nodes[i].edgeOffset;

        // If we haven't cached the node's offsetTop / offsetLeft value

        if (!edgeOffset) {
          nodes[i].edgeOffset = edgeOffset = this.getEdgeOffset(node);
        }

        // Get a reference to the next and previous node
        var nextNode = i < nodes.length - 1 && nodes[i + 1];
        var prevNode = i > 0 && nodes[i - 1];

        // Also cache the next node's edge offset if needed.
        // We need this for calculating the animation in a grid setup
        if (nextNode && !nextNode.edgeOffset) {
          nextNode.edgeOffset = this.getEdgeOffset(nextNode.node);
        }

        // If the node is the one we're currently animating, skip it
        if (index === this.index) {
          if (hideSortableGhost) {
            /*
            * With windowing libraries such as `react-virtualized`, the sortableGhost
            * node may change while scrolling down and then back up (or vice-versa),
            * so we need to update the reference to the new node just to be safe.
            */
            this.sortableGhost = node;
            node.style.visibility = 'hidden';
            node.style.opacity = 0;
          }
          continue;
        }

        if (transitionDuration) {
          node.style[vendorPrefix + 'TransitionDuration'] = transitionDuration + 'ms';
        }

        if (this._axis.x) {
          if (this._axis.y) {
            // Calculations for a grid setup
            if (index < this.index && (sortingOffset.left + scrollDifference.left - offset.width <= edgeOffset.left && sortingOffset.top + scrollDifference.top <= edgeOffset.top + offset.height || sortingOffset.top + scrollDifference.top + offset.height <= edgeOffset.top)) {
              // If the current node is to the left on the same row, or above the node that's being dragged
              // then move it to the right
              translate.x = this.width + this.marginOffset.x;
              if (edgeOffset.left + translate.x > this.containerBoundingRect.width - offset.width) {
                // If it moves passed the right bounds, then animate it to the first position of the next row.
                // We just use the offset of the next node to calculate where to move, because that node's original position
                // is exactly where we want to go
                translate.x = nextNode.edgeOffset.left - edgeOffset.left;
                translate.y = nextNode.edgeOffset.top - edgeOffset.top;
              }
              if (this.newIndex === null) {
                this.newIndex = index;
              }
            } else if (index > this.index && (sortingOffset.left + scrollDifference.left + offset.width >= edgeOffset.left && sortingOffset.top + scrollDifference.top + offset.height >= edgeOffset.top || sortingOffset.top + scrollDifference.top + offset.height >= edgeOffset.top + height)) {
              // If the current node is to the right on the same row, or below the node that's being dragged
              // then move it to the left
              translate.x = -(this.width + this.marginOffset.x);
              if (edgeOffset.left + translate.x < this.containerBoundingRect.left + offset.width) {
                // If it moves passed the left bounds, then animate it to the last position of the previous row.
                // We just use the offset of the previous node to calculate where to move, because that node's original position
                // is exactly where we want to go
                translate.x = prevNode.edgeOffset.left - edgeOffset.left;
                translate.y = prevNode.edgeOffset.top - edgeOffset.top;
              }
              this.newIndex = index;
            }
          } else {
            if (index > this.index && sortingOffset.left + scrollDifference.left + offset.width >= edgeOffset.left) {
              translate.x = -(this.width + this.marginOffset.x);
              this.newIndex = index;
            } else if (index < this.index && sortingOffset.left + scrollDifference.left <= edgeOffset.left + offset.width) {
              translate.x = this.width + this.marginOffset.x;
              if (this.newIndex == null) {
                this.newIndex = index;
              }
            }
          }
        } else if (this._axis.y) {
          if (index > this.index && sortingOffset.top + scrollDifference.top + offset.height >= edgeOffset.top) {
            translate.y = -(this.height + this.marginOffset.y);
            this.newIndex = index;
          } else if (index < this.index && sortingOffset.top + scrollDifference.top <= edgeOffset.top + offset.height) {
            translate.y = this.height + this.marginOffset.y;
            if (this.newIndex == null) {
              this.newIndex = index;
            }
          }
        }
        node.style[vendorPrefix + 'Transform'] = 'translate3d(' + translate.x + 'px,' + translate.y + 'px,0)';
      }

      if (this.newIndex == null) {
        this.newIndex = this.index;
      }
    },
    autoscroll: function autoscroll() {
      var _this6 = this;

      var translate = this.translate;
      var direction = {
        x: 0,
        y: 0
      };
      var speed = {
        x: 1,
        y: 1
      };
      var acceleration = {
        x: 10,
        y: 10
      };

      if (translate.y >= this.maxTranslate.y - this.height / 2) {
        direction.y = 1; // Scroll Down
        speed.y = acceleration.y * Math.abs((this.maxTranslate.y - this.height / 2 - translate.y) / this.height);
      } else if (translate.x >= this.maxTranslate.x - this.width / 2) {
        direction.x = 1; // Scroll Right
        speed.x = acceleration.x * Math.abs((this.maxTranslate.x - this.width / 2 - translate.x) / this.width);
      } else if (translate.y <= this.minTranslate.y + this.height / 2) {
        direction.y = -1; // Scroll Up
        speed.y = acceleration.y * Math.abs((translate.y - this.height / 2 - this.minTranslate.y) / this.height);
      } else if (translate.x <= this.minTranslate.x + this.width / 2) {
        direction.x = -1; // Scroll Left
        speed.x = acceleration.x * Math.abs((translate.x - this.width / 2 - this.minTranslate.x) / this.width);
      }

      if (this.autoscrollInterval) {
        clearInterval(this.autoscrollInterval);
        this.autoscrollInterval = null;
        this.isAutoScrolling = false;
      }

      if (direction.x !== 0 || direction.y !== 0) {
        this.autoscrollInterval = setInterval(function () {
          _this6.isAutoScrolling = true;
          var offset = {
            left: 1 * speed.x * direction.x,
            top: 1 * speed.y * direction.y
          };
          _this6.scrollContainer.scrollTop += offset.top;
          _this6.scrollContainer.scrollLeft += offset.left;
          _this6.translate.x += offset.left;
          _this6.translate.y += offset.top;
          _this6.animateNodes();
        }, 5);
      }
    }
  }
};

// Export Sortable Element Handle Directive
var HandleDirective = {
  bind: function bind(el) {
    el.sortableHandle = true;
  }
};

var SlickList = {
  name: 'slick-list',
  mixins: [ContainerMixin],
  render: function render(h) {
    return h('div', this.$slots.default);
  }
};

var SlickItem = {
  name: 'slick-item',
  mixins: [ElementMixin],
  render: function render(h) {
    return h('div', this.$slots.default);
  }
};

exports.ElementMixin = ElementMixin;
exports.ContainerMixin = ContainerMixin;
exports.HandleDirective = HandleDirective;
exports.SlickList = SlickList;
exports.SlickItem = SlickItem;
exports.arrayMove = arrayMove;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _main = __webpack_require__(99);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_main2.default.install = function (Vue) {
    Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(100)
}
var Component = __webpack_require__(34)(
  /* script */
  __webpack_require__(102),
  /* template */
  __webpack_require__(104),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0186be78",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\www\\github-zhouhuafei\\suibianxiexie\\app\\admin\\assets\\js\\components_vue\\g-hot-area\\src\\main.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0186be78", Component.options)
  } else {
    hotAPI.reload("data-v-0186be78", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(101);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(33)("411e272a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0186be78\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0186be78\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "\n.g-hot-area[data-v-0186be78] {\n    position: relative;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    overflow: hidden;\n}\n.g-hot-area-item[data-v-0186be78] {\n    position: absolute;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 80px;\n    height: 80px;\n    left: 0;\n    top: 0;\n    background: rgba(36, 186, 171, 0.4);\n    border: 1px solid #24baab;\n    z-index: 2;\n    overflow: hidden;\n    cursor: move;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.g-hot-area-item.g-hot-area-item_active[data-v-0186be78] {\n    background: rgba(255, 0, 0, 0.4);\n    border-color: #E75C45;\n}\n.g-hot-area-item-zoom[data-v-0186be78] {\n    position: absolute;\n    right: -8px;\n    bottom: -8px;\n    z-index: 3;\n    width: 0;\n    height: 0;\n    border: 8px solid transparent;\n    border-top-color: rgba(255, 255, 255, 0.96);\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    cursor: nwse-resize;\n}\n", ""]);

// exports


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _zhf = __webpack_require__(103);

var _zhf2 = _interopRequireDefault(_zhf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var downL = 0; //
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

var downT = 0;
var disL = 0;
var disT = 0;

exports.default = {
    name: 'g-hot-area',
    props: {
        data: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },
    data: function data() {
        return {
            items: [{
                isSelected: false,
                l: 0,
                t: 0,
                w: 100,
                h: 100
            }, {
                isSelected: false,
                l: 0,
                t: 0,
                w: 100,
                h: 100
            }]
        };
    },

    methods: {
        mouseDown: function mouseDown(v, i, a, ev) {
            var vm = this;
            a.forEach(function (v) {
                v.isSelected = false;
            });
            v.isSelected = true;
            downL = ev.clientX;
            downT = ev.clientY;
            v.initL = v.l;
            v.initT = v.t;
            document.addEventListener('mousemove', mouseMove);
            document.addEventListener('mouseup', mouseUp);

            function mouseMove(ev) {
                disL = ev.clientX - downL;
                disT = ev.clientY - downT;
                v.l = v.initL + disL;
                v.t = v.initT + disT;
                console.log(disL, disT);
            }

            function mouseUp() {
                v.initL = v.l;
                v.initT = v.t;
                document.removeEventListener('mousemove', mouseMove);
                document.removeEventListener('mouseup', mouseUp);
            }
        }
    },
    mounted: function mounted() {
        console.log(this.items);
    }
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var getDomArray=__webpack_require__(17);function offset(e){var t=0,r=0;for(e=getDomArray(e)[0];e;)t+=e.offsetTop,r+=e.offsetLeft,e=e.offsetParent;return{top:t,left:r}}module.exports=offset;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "g-hot-area",
    staticClass: "g-hot-area"
  }, [_vm._t("default"), _vm._v(" "), _vm._l((_vm.items), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "g-hot-area-item",
      class: {
        'g-hot-area-item_active': item.isSelected
      },
      style: ({
        left: ((item.l) + "px"),
        top: ((item.t) + "px")
      }),
      on: {
        "mousedown": function($event) {
          _vm.mouseDown(item, index, _vm.items, $event)
        }
      }
    }, [_c('div', {
      staticClass: "g-hot-area-item-zoom"
    })])
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0186be78", module.exports)
  }
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('div', {
    staticClass: "components-collection"
  }, [_c('div', {
    staticClass: "components-wrap"
  }, [_c('div', {
    staticClass: "components"
  }, _vm._l((_vm.components), function(item, index) {
    return _c('div', {
      staticClass: "components-item",
      class: [item.isHighlight ? 'components-item_highlight' : '']
    }, [_vm._v("\n                    " + _vm._s(item.text) + "\n                ")])
  }))])]), _vm._v(" "), _c('div', {
    staticClass: "components-simulator"
  }, [_c('div', {
    staticClass: "simulator-wrap"
  }, [_c('SortableList', {
    attrs: {
      "lockAxis": "y"
    },
    model: {
      value: (_vm.pageSelectedComponents),
      callback: function($$v) {
        _vm.pageSelectedComponents = $$v
      },
      expression: "pageSelectedComponents"
    }
  }, _vm._l((_vm.pageSelectedComponents), function(item, index) {
    return _c('SortableItem', {
      key: index,
      attrs: {
        "index": index,
        "item": item
      }
    })
  }))], 1)]), _vm._v(" "), _c('div', {
    staticClass: "components-editor"
  }, [_c('div', {
    staticClass: "editor-wrap"
  }, [_c('div', {
    staticClass: "editor"
  }, _vm._l((_vm.pageSelectedComponents), function(item, index) {
    return _c('div', {
      staticClass: "editor-item",
      class: [item.isHighlight ? 'editor-item_active' : '']
    }, [_c('div', [_vm._v(_vm._s(item.text) + "编辑区域")]), _vm._v(" "), _c('div', {
      staticStyle: {
        "margin": "20px",
        "width": "500px",
        "height": "500px",
        "background": "#eeeeee",
        "position": "relative"
      }
    }, [_c('vue-draggable-resizable', {
      staticClass: "vue-draggable-resizable",
      attrs: {
        "w": 100,
        "h": 100,
        "parent": true
      },
      on: {
        "dragging": _vm.onDrag,
        "resizing": _vm.onResize
      }
    }, [_c('div', [_vm._v("X: " + _vm._s(_vm.x))]), _vm._v(" "), _c('div', [_vm._v("Y: " + _vm._s(_vm.y))]), _vm._v(" "), _c('div', [_vm._v("Width: " + _vm._s(_vm.width))]), _vm._v(" "), _c('div', [_vm._v("Height: " + _vm._s(_vm.height))])])], 1)])
  }))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-232fccf7", module.exports)
  }
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueDraggableResizable=e():t.VueDraggableResizable=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=39)}([function(t,e,n){var i=n(34)("wks"),r=n(22),o=n(1).Symbol,s="function"==typeof o;(t.exports=function(t){return i[t]||(i[t]=s&&o[t]||(s?o:r)("Symbol."+t))}).store=i},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){t.exports=!n(12)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var i=n(5),r=n(32);t.exports=n(2)?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var i=n(6),r=n(54),o=n(70),s=Object.defineProperty;e.f=n(2)?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var i=n(4);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var i=n(23);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var i=n(1),r=n(11),o=n(7),s=n(3),u=function(t,e,n){var a,c,f,h=t&u.F,l=t&u.G,p=t&u.S,d=t&u.P,m=t&u.B,v=t&u.W,g=l?r:r[e]||(r[e]={}),y=g.prototype,x=l?i:p?i[e]:(i[e]||{}).prototype;l&&(n=e);for(a in n)(c=!h&&x&&void 0!==x[a])&&a in g||(f=c?x[a]:n[a],g[a]=l&&"function"!=typeof x[a]?n[a]:m&&c?o(f,i):v&&x[a]==f?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):d&&"function"==typeof f?o(Function.call,f):f,d&&((g.virtual||(g.virtual={}))[a]=f,t&u.R&&y&&!y[a]&&s(y,a,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports={}},function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var i=n(7),r=n(57),o=n(55),s=n(6),u=n(21),a=n(71),c={},f={},e=t.exports=function(t,e,n,h,l){var p,d,m,v,g=l?function(){return t}:a(t),y=i(n,h,e?2:1),x=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(o(g)){for(p=u(t.length);p>x;x++)if((v=e?y(s(d=t[x])[0],d[1]):y(t[x]))===c||v===f)return v}else for(m=g.call(t);!(d=m.next()).done;)if((v=r(m,y,d.value,e))===c||v===f)return v};e.BREAK=c,e.RETURN=f},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){"use strict";var i=n(59),r=n(8),o=n(64),s=n(3),u=n(9),a=n(10),c=n(58),f=n(17),h=n(61),l=n(0)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,m,v,g,y){c(n,e,m);var x,b,w,_=function(t){if(!p&&t in M)return M[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},E=e+" Iterator",O="values"==v,S=!1,M=t.prototype,Y=M[l]||M["@@iterator"]||v&&M[v],X=Y||_(v),z=v?O?_("entries"):X:void 0,L="Array"==e?M.entries||Y:Y;if(L&&(w=h(L.call(new t)))!==Object.prototype&&w.next&&(f(w,E,!0),i||u(w,l)||s(w,l,d)),O&&Y&&"values"!==Y.name&&(S=!0,X=function(){return Y.call(this)}),i&&!y||!p&&!S&&M[l]||s(M,l,X),a[e]=X,a[E]=d,v)if(x={values:O?X:_("values"),keys:g?X:_("keys"),entries:z},y)for(b in x)b in M||o(M,b,x[b]);else r(r.P+r.F*(p||S),e,x);return x}},function(t,e,n){var i=n(5).f,r=n(9),o=n(0)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,o)&&i(t,o,{configurable:!0,value:e})}},function(t,e,n){var i=n(34)("keys"),r=n(22);t.exports=function(t){return i[t]||(i[t]=r(t))}},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},function(t,e,n){var i=n(28),r=n(15);t.exports=function(t){return i(r(t))}},function(t,e,n){var i=n(19),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(t,e,n,i){if(!(t instanceof e)||void 0!==i&&i in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var i=n(14),r=n(0)("toStringTag"),o="Arguments"==i(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=s(e=Object(t),r))?n:o?i(e):"Object"==(u=i(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){var i=n(4),r=n(1).document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var i=n(14);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var i=n(22)("meta"),r=n(4),o=n(9),s=n(5).f,u=0,a=Object.isExtensible||function(){return!0},c=!n(12)(function(){return a(Object.preventExtensions({}))}),f=function(t){s(t,i,{value:{i:"O"+ ++u,w:{}}})},h=function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,i)){if(!a(t))return"F";if(!e)return"E";f(t)}return t[i].i},l=function(t,e){if(!o(t,i)){if(!a(t))return!0;if(!e)return!1;f(t)}return t[i].w},p=function(t){return c&&d.NEED&&a(t)&&!o(t,i)&&f(t),t},d=t.exports={KEY:i,NEED:!1,fastKey:h,getWeak:l,onFreeze:p}},function(t,e,n){var i=n(6),r=n(60),o=n(27),s=n(18)("IE_PROTO"),u=function(){},a=function(){var t,e=n(26)("iframe"),i=o.length;for(e.style.display="none",n(53).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;i--;)delete a.prototype[o[i]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=i(t),n=new u,u.prototype=null,n[s]=t):n=a(),void 0===e?n:r(n,e)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var i=n(3);t.exports=function(t,e,n){for(var r in e)n&&t[r]?t[r]=e[r]:i(t,r,e[r]);return t}},function(t,e,n){var i=n(1),r=i["__core-js_shared__"]||(i["__core-js_shared__"]={});t.exports=function(t){return r[t]||(r[t]={})}},function(t,e,n){var i=n(15);t.exports=function(t){return Object(i(t))}},function(t,e,n){var i=n(4);t.exports=function(t,e){if(!i(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},function(t,e,n){n(84);var i=n(82)(n(38),n(83),"data-v-2bcd502f",null);i.options.__file="/Applications/mampstack-7.0.26-1/apache2/htdocs/vdr/src/components/vue-draggable-resizable.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] vue-draggable-resizable.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(42),r=n.n(i),o=n(40);e.default={replace:!0,name:"VueDraggableResizable",props:{active:{type:Boolean,default:!1},draggable:{type:Boolean,default:!0},resizable:{type:Boolean,default:!0},w:{type:Number,default:200,validator:function(t){return t>0}},h:{type:Number,default:200,validator:function(t){return t>0}},minw:{type:Number,default:50,validator:function(t){return t>=0}},minh:{type:Number,default:50,validator:function(t){return t>=0}},x:{type:Number,default:0,validator:function(t){return"number"==typeof t}},y:{type:Number,default:0,validator:function(t){return"number"==typeof t}},z:{type:[String,Number],default:"auto",validator:function(t){return"string"==typeof t?"auto"===t:t>=0}},handles:{type:Array,default:function(){return["tl","tm","tr","mr","br","bm","bl","ml"]},validator:function(t){var e=new r.a(["tl","tm","tr","mr","br","bm","bl","ml"]);return new r.a(t.filter(function(t){return e.has(t)})).size===t.length}},dragHandle:{type:String,default:null},dragCancel:{type:String,default:null},axis:{type:String,default:"both",validator:function(t){return-1!==["x","y","both"].indexOf(t)}},grid:{type:Array,default:function(){return[1,1]}},parent:{type:Boolean,default:!1},maximize:{type:Boolean,default:!1}},created:function(){this.parentX=0,this.parentW=9999,this.parentY=0,this.parentH=9999,this.mouseX=0,this.mouseY=0,this.lastMouseX=0,this.lastMouseY=0,this.mouseOffX=0,this.mouseOffY=0,this.elmX=0,this.elmY=0,this.elmW=0,this.elmH=0},mounted:function(){document.documentElement.addEventListener("mousemove",this.handleMove,!0),document.documentElement.addEventListener("mousedown",this.deselect,!0),document.documentElement.addEventListener("mouseup",this.handleUp,!0),document.documentElement.addEventListener("touchmove",this.handleMove,!0),document.documentElement.addEventListener("touchend touchcancel",this.deselect,!0),document.documentElement.addEventListener("touchstart",this.handleUp,!0),this.elmX=parseInt(this.$el.style.left),this.elmY=parseInt(this.$el.style.top),this.elmW=this.$el.offsetWidth||this.$el.clientWidth,this.elmH=this.$el.offsetHeight||this.$el.clientHeight,this.reviewDimensions()},beforeDestroy:function(){document.documentElement.removeEventListener("mousemove",this.handleMove,!0),document.documentElement.removeEventListener("mousedown",this.deselect,!0),document.documentElement.removeEventListener("mouseup",this.handleUp,!0),document.documentElement.addEventListener("touchmove",this.handleMove,!0),document.documentElement.addEventListener("touchend touchcancel",this.deselect,!0),document.documentElement.addEventListener("touchstart",this.handleUp,!0)},data:function(){return{top:this.y,left:this.x,width:this.w,height:this.h,resizing:!1,dragging:!1,enabled:this.active,handle:null,zIndex:this.z}},methods:{reviewDimensions:function(){if(this.minw>this.w&&(this.width=this.minw),this.minh>this.h&&(this.height=this.minh),this.parent){var t=parseInt(this.$el.parentNode.clientWidth,10),e=parseInt(this.$el.parentNode.clientHeight,10);this.parentW=t,this.parentH=e,this.w>this.parentW&&(this.width=t),this.h>this.parentH&&(this.height=e),this.x+this.w>this.parentW&&(this.width=t-this.x),this.y+this.h>this.parentH&&(this.height=e-this.y)}this.elmW=this.width,this.elmH=this.height,this.$emit("resizing",this.left,this.top,this.width,this.height)},elmDown:function(t){var e=t.target||t.srcElement;if(this.$el.contains(e)){if(this.dragHandle&&!n.i(o.a)(e,this.dragHandle,this.$el)||this.dragCancel&&n.i(o.a)(e,this.dragCancel,this.$el))return;t.stopPropagation(),t.preventDefault(),this.reviewDimensions(),this.enabled||(this.enabled=!0,this.$emit("activated"),this.$emit("update:active",!0)),this.draggable&&(this.dragging=!0)}},deselect:function(t){-1!==t.type.indexOf("touch")?(this.mouseX=t.changedTouches[0].clientX,this.mouseY=t.changedTouches[0].clientY):(this.mouseX=t.pageX||t.clientX+document.documentElement.scrollLeft,this.mouseY=t.pageY||t.clientY+document.documentElement.scrollTop),this.lastMouseX=this.mouseX,this.lastMouseY=this.mouseY;var e=t.target||t.srcElement,n=new RegExp("handle-([trmbl]{2})","");this.$el.contains(e)||n.test(e.className)||this.enabled&&(this.enabled=!1,this.$emit("deactivated"),this.$emit("update:active",!1))},handleDown:function(t,e){this.handle=t,e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),this.resizing=!0},fillParent:function(t){var e=this;if(this.parent&&this.resizable&&this.maximize){var n=!1,i=function t(){n||window.requestAnimationFrame(t),"x"===e.axis?e.width===e.parentW&&e.left===e.parentX&&(n=!0):"y"===e.axis?e.height===e.parentH&&e.top===e.parentY&&(n=!0):"both"===e.axis&&e.width===e.parentW&&e.height===e.parentH&&e.top===e.parentY&&e.left===e.parentX&&(n=!0),"x"!==e.axis&&"both"!==e.axis||(e.width<e.parentW&&(e.width++,e.elmW++),e.left>e.parentX&&(e.left--,e.elmX--)),"y"!==e.axis&&"both"!==e.axis||(e.height<e.parentH&&(e.height++,e.elmH++),e.top>e.parentY&&(e.top--,e.elmY--)),e.$emit("resizing",e.left,e.top,e.width,e.height)};window.requestAnimationFrame(i)}},handleMove:function(t){var e=-1!==t.type.indexOf("touchmove");this.mouseX=e?t.touches[0].clientX:t.pageX||t.clientX+document.documentElement.scrollLeft,this.mouseY=e?t.touches[0].clientY:t.pageY||t.clientY+document.documentElement.scrollTop;var n=this.mouseX-this.lastMouseX+this.mouseOffX,i=this.mouseY-this.lastMouseY+this.mouseOffY;this.mouseOffX=this.mouseOffY=0,this.lastMouseX=this.mouseX,this.lastMouseY=this.mouseY;var r=n,o=i;this.resizing?(this.handle.indexOf("t")>=0&&(this.elmH-o<this.minh?this.mouseOffY=o-(i=this.elmH-this.minh):this.parent&&this.elmY+o<this.parentY&&(this.mouseOffY=o-(i=this.parentY-this.elmY)),this.elmY+=i,this.elmH-=i),this.handle.indexOf("b")>=0&&(this.elmH+o<this.minh?this.mouseOffY=o-(i=this.minh-this.elmH):this.parent&&this.elmY+this.elmH+o>this.parentH&&(this.mouseOffY=o-(i=this.parentH-this.elmY-this.elmH)),this.elmH+=i),this.handle.indexOf("l")>=0&&(this.elmW-r<this.minw?this.mouseOffX=r-(n=this.elmW-this.minw):this.parent&&this.elmX+r<this.parentX&&(this.mouseOffX=r-(n=this.parentX-this.elmX)),this.elmX+=n,this.elmW-=n),this.handle.indexOf("r")>=0&&(this.elmW+r<this.minw?this.mouseOffX=r-(n=this.minw-this.elmW):this.parent&&this.elmX+this.elmW+r>this.parentW&&(this.mouseOffX=r-(n=this.parentW-this.elmX-this.elmW)),this.elmW+=n),this.left=Math.round(this.elmX/this.grid[0])*this.grid[0],this.top=Math.round(this.elmY/this.grid[1])*this.grid[1],this.width=Math.round(this.elmW/this.grid[0])*this.grid[0],this.height=Math.round(this.elmH/this.grid[1])*this.grid[1],this.$emit("resizing",this.left,this.top,this.width,this.height)):this.dragging&&(this.parent&&(this.elmX+r<this.parentX?this.mouseOffX=r-(n=this.parentX-this.elmX):this.elmX+this.elmW+r>this.parentW&&(this.mouseOffX=r-(n=this.parentW-this.elmX-this.elmW)),this.elmY+o<this.parentY?this.mouseOffY=o-(i=this.parentY-this.elmY):this.elmY+this.elmH+o>this.parentH&&(this.mouseOffY=o-(i=this.parentH-this.elmY-this.elmH))),this.elmX+=n,this.elmY+=i,"x"!==this.axis&&"both"!==this.axis||(this.left=Math.round(this.elmX/this.grid[0])*this.grid[0]),"y"!==this.axis&&"both"!==this.axis||(this.top=Math.round(this.elmY/this.grid[1])*this.grid[1]),this.$emit("dragging",this.left,this.top))},handleUp:function(t){-1!==t.type.indexOf("touch")&&(this.lastMouseX=t.changedTouches[0].clientX,this.lastMouseY=t.changedTouches[0].clientY),this.handle=null,this.resizing&&(this.resizing=!1,this.$emit("resizestop",this.left,this.top,this.width,this.height)),this.dragging&&(this.dragging=!1,this.$emit("dragstop",this.left,this.top)),this.elmX=this.left,this.elmY=this.top}},computed:{style:function(){return{top:this.top+"px",left:this.left+"px",width:this.width+"px",height:this.height+"px",zIndex:this.zIndex}}},watch:{active:function(t){this.enabled=t},z:function(t){(t>=0||"auto"===t)&&(this.zIndex=t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(37),r=n.n(i);n.d(e,"default",function(){return r.a})},function(t,e,n){"use strict";function i(t,e,i){var o=t,s=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].find(function(t){return n.i(r.a)(o[t])});if(!n.i(r.a)(o[s]))return!1;do{if(o[s](e))return!0;if(o===i)return!1;o=o.parentNode}while(o);return!1}e.a=i;var r=n(41)},function(t,e,n){"use strict";function i(t){return"function"==typeof t||"[object Function]"===Object.prototype.toString.call(t)}e.a=i},function(t,e,n){t.exports={default:n(43),__esModule:!0}},function(t,e,n){n(73),n(75),n(79),n(74),n(78),n(77),n(76),t.exports=n(11).Set},function(t,e){t.exports=function(){}},function(t,e,n){var i=n(13);t.exports=function(t,e){var n=[];return i(t,!1,n.push,n,e),n}},function(t,e,n){var i=n(20),r=n(21),o=n(69);t.exports=function(t){return function(e,n,s){var u,a=i(e),c=r(a.length),f=o(s,c);if(t&&n!=n){for(;c>f;)if((u=a[f++])!=u)return!0}else for(;c>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var i=n(7),r=n(28),o=n(35),s=n(21),u=n(49);t.exports=function(t,e){var n=1==t,a=2==t,c=3==t,f=4==t,h=6==t,l=5==t||h,p=e||u;return function(e,u,d){for(var m,v,g=o(e),y=r(g),x=i(u,d,3),b=s(y.length),w=0,_=n?p(e,b):a?p(e,0):void 0;b>w;w++)if((l||w in y)&&(m=y[w],v=x(m,w,g),t))if(n)_[w]=v;else if(v)switch(t){case 3:return!0;case 5:return m;case 6:return w;case 2:_.push(m)}else if(f)return!1;return h?-1:c||f?f:_}}},function(t,e,n){var i=n(4),r=n(56),o=n(0)("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)||(e=void 0),i(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){var i=n(48);t.exports=function(t,e){return new(i(t))(e)}},function(t,e,n){"use strict";var i=n(5).f,r=n(31),o=n(33),s=n(7),u=n(24),a=n(13),c=n(16),f=n(29),h=n(67),l=n(2),p=n(30).fastKey,d=n(36),m=l?"_s":"size",v=function(t,e){var n,i=p(e);if("F"!==i)return t._i[i];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,c){var f=t(function(t,i){u(t,f,e,"_i"),t._t=e,t._i=r(null),t._f=void 0,t._l=void 0,t[m]=0,void 0!=i&&a(i,n,t[c],t)});return o(f.prototype,{clear:function(){for(var t=d(this,e),n=t._i,i=t._f;i;i=i.n)i.r=!0,i.p&&(i.p=i.p.n=void 0),delete n[i.i];t._f=t._l=void 0,t[m]=0},delete:function(t){var n=d(this,e),i=v(n,t);if(i){var r=i.n,o=i.p;delete n._i[i.i],i.r=!0,o&&(o.n=r),r&&(r.p=o),n._f==i&&(n._f=r),n._l==i&&(n._l=o),n[m]--}return!!i},forEach:function(t){d(this,e);for(var n,i=s(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(i(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!v(d(this,e),t)}}),l&&i(f.prototype,"size",{get:function(){return d(this,e)[m]}}),f},def:function(t,e,n){var i,r,o=v(t,e);return o?o.v=n:(t._l=o={i:r=p(e,!0),k:e,v:n,p:i=t._l,n:void 0,r:!1},t._f||(t._f=o),i&&(i.n=o),t[m]++,"F"!==r&&(t._i[r]=o)),t},getEntry:v,setStrong:function(t,e,n){c(t,e,function(t,n){this._t=d(t,e),this._k=n,this._l=void 0},function(){for(var t=this,e=t._k,n=t._l;n&&n.r;)n=n.p;return t._t&&(t._l=n=n?n.n:t._t._f)?"keys"==e?f(0,n.k):"values"==e?f(0,n.v):f(0,[n.k,n.v]):(t._t=void 0,f(1))},n?"entries":"values",!n,!0),h(e)}}},function(t,e,n){var i=n(25),r=n(45);t.exports=function(t){return function(){if(i(this)!=t)throw TypeError(t+"#toJSON isn't generic");return r(this)}}},function(t,e,n){"use strict";var i=n(1),r=n(8),o=n(30),s=n(12),u=n(3),a=n(33),c=n(13),f=n(24),h=n(4),l=n(17),p=n(5).f,d=n(47)(0),m=n(2);t.exports=function(t,e,n,v,g,y){var x=i[t],b=x,w=g?"set":"add",_=b&&b.prototype,E={};return m&&"function"==typeof b&&(y||_.forEach&&!s(function(){(new b).entries().next()}))?(b=e(function(e,n){f(e,b,t,"_c"),e._c=new x,void 0!=n&&c(n,g,e[w],e)}),d("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var e="add"==t||"set"==t;t in _&&(!y||"clear"!=t)&&u(b.prototype,t,function(n,i){if(f(this,b,t),!e&&y&&!h(n))return"get"==t&&void 0;var r=this._c[t](0===n?0:n,i);return e?this:r})}),y||p(b.prototype,"size",{get:function(){return this._c.size}})):(b=v.getConstructor(e,t,g,w),a(b.prototype,n),o.NEED=!0),l(b,t),E[t]=b,r(r.G+r.W+r.F,E),y||v.setStrong(b,t,g),b}},function(t,e,n){var i=n(1).document;t.exports=i&&i.documentElement},function(t,e,n){t.exports=!n(2)&&!n(12)(function(){return 7!=Object.defineProperty(n(26)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var i=n(10),r=n(0)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[r]===t)}},function(t,e,n){var i=n(14);t.exports=Array.isArray||function(t){return"Array"==i(t)}},function(t,e,n){var i=n(6);t.exports=function(t,e,n,r){try{return r?e(i(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&i(o.call(t)),e}}},function(t,e,n){"use strict";var i=n(31),r=n(32),o=n(17),s={};n(3)(s,n(0)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=i(s,{next:r(1,n)}),o(t,e+" Iterator")}},function(t,e){t.exports=!0},function(t,e,n){var i=n(5),r=n(6),o=n(63);t.exports=n(2)?Object.defineProperties:function(t,e){r(t);for(var n,s=o(e),u=s.length,a=0;u>a;)i.f(t,n=s[a++],e[n]);return t}},function(t,e,n){var i=n(9),r=n(35),o=n(18)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),i(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,n){var i=n(9),r=n(20),o=n(46)(!1),s=n(18)("IE_PROTO");t.exports=function(t,e){var n,u=r(t),a=0,c=[];for(n in u)n!=s&&i(u,n)&&c.push(n);for(;e.length>a;)i(u,n=e[a++])&&(~o(c,n)||c.push(n));return c}},function(t,e,n){var i=n(62),r=n(27);t.exports=Object.keys||function(t){return i(t,r)}},function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";var i=n(8),r=n(23),o=n(7),s=n(13);t.exports=function(t){i(i.S,t,{from:function(t){var e,n,i,u,a=arguments[1];return r(this),e=void 0!==a,e&&r(a),void 0==t?new this:(n=[],e?(i=0,u=o(a,arguments[2],2),s(t,!1,function(t){n.push(u(t,i++))})):s(t,!1,n.push,n),new this(n))}})}},function(t,e,n){"use strict";var i=n(8);t.exports=function(t){i(i.S,t,{of:function(){for(var t=arguments.length,e=Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},function(t,e,n){"use strict";var i=n(1),r=n(11),o=n(5),s=n(2),u=n(0)("species");t.exports=function(t){var e="function"==typeof r[t]?r[t]:i[t];s&&e&&!e[u]&&o.f(e,u,{configurable:!0,get:function(){return this}})}},function(t,e,n){var i=n(19),r=n(15);t.exports=function(t){return function(e,n){var o,s,u=String(r(e)),a=i(n),c=u.length;return a<0||a>=c?t?"":void 0:(o=u.charCodeAt(a),o<55296||o>56319||a+1===c||(s=u.charCodeAt(a+1))<56320||s>57343?t?u.charAt(a):o:t?u.slice(a,a+2):s-56320+(o-55296<<10)+65536)}}},function(t,e,n){var i=n(19),r=Math.max,o=Math.min;t.exports=function(t,e){return t=i(t),t<0?r(t+e,0):o(t,e)}},function(t,e,n){var i=n(4);t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var i=n(25),r=n(0)("iterator"),o=n(10);t.exports=n(11).getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||o[i(t)]}},function(t,e,n){"use strict";var i=n(44),r=n(29),o=n(10),s=n(20);t.exports=n(16)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):"keys"==e?r(0,n):"values"==e?r(0,t[n]):r(0,[n,t[n]])},"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},function(t,e){},function(t,e,n){"use strict";var i=n(50),r=n(36);t.exports=n(52)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return i.def(r(this,"Set"),t=0===t?0:t,t)}},i)},function(t,e,n){"use strict";var i=n(68)(!0);n(16)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=i(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){n(65)("Set")},function(t,e,n){n(66)("Set")},function(t,e,n){var i=n(8);i(i.P+i.R,"Set",{toJSON:n(51)("Set")})},function(t,e,n){n(72);for(var i=n(1),r=n(3),o=n(10),s=n(0)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<u.length;a++){var c=u[a],f=i[c],h=f&&f.prototype;h&&!h[s]&&r(h,s,c),o[c]=o.Array}},function(t,e,n){e=t.exports=n(81)(),e.push([t.i,"\n.vdr[data-v-2bcd502f] {\n  position: absolute;\n  box-sizing: border-box;\n}\n.handle[data-v-2bcd502f] {\n  box-sizing: border-box;\n  display: none;\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  font-size: 1px;\n  background: #EEE;\n  border: 1px solid #333;\n}\n.handle-tl[data-v-2bcd502f] {\n  top: -10px;\n  left: -10px;\n  cursor: nw-resize;\n}\n.handle-tm[data-v-2bcd502f] {\n  top: -10px;\n  left: 50%;\n  margin-left: -5px;\n  cursor: n-resize;\n}\n.handle-tr[data-v-2bcd502f] {\n  top: -10px;\n  right: -10px;\n  cursor: ne-resize;\n}\n.handle-ml[data-v-2bcd502f] {\n  top: 50%;\n  margin-top: -5px;\n  left: -10px;\n  cursor: w-resize;\n}\n.handle-mr[data-v-2bcd502f] {\n  top: 50%;\n  margin-top: -5px;\n  right: -10px;\n  cursor: e-resize;\n}\n.handle-bl[data-v-2bcd502f] {\n  bottom: -10px;\n  left: -10px;\n  cursor: sw-resize;\n}\n.handle-bm[data-v-2bcd502f] {\n  bottom: -10px;\n  left: 50%;\n  margin-left: -5px;\n  cursor: s-resize;\n}\n.handle-br[data-v-2bcd502f] {\n  bottom: -10px;\n  right: -10px;\n  cursor: se-resize;\n}\n@media only screen and (max-width: 768px) {\n  /* For mobile phones: */\n[class*=\"handle-\"][data-v-2bcd502f]:before {\n    content: '';\n    left: -10px;\n    right: -10px;\n    bottom: -10px;\n    top: -10px;\n    position: absolute;\n}\n}\n",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(t,e){t.exports=function(t,e,n,i){var r,o=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(r=t,o=t.default);var u="function"==typeof o?o.options:o;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),i){var a=Object.create(u.computed||null);Object.keys(i).forEach(function(t){var e=i[t];a[t]=function(){return e}}),u.computed=a}return{esModule:r,exports:o,options:u}}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vdr",class:{draggable:t.draggable,resizable:t.resizable,active:t.enabled,dragging:t.dragging,resizing:t.resizing},style:t.style,on:{mousedown:t.elmDown,touchstart:function(e){e.stopPropagation(),t.elmDown(e)},dblclick:t.fillParent}},[t._l(t.handles,function(e){return t.resizable?n("div",{key:e,staticClass:"handle",class:"handle-"+e,style:{display:t.enabled?"block":"none"},on:{mousedown:function(n){n.stopPropagation(),n.preventDefault(),t.handleDown(e,n)},touchstart:function(n){n.stopPropagation(),n.preventDefault(),t.handleDown(e,n)}}}):t._e()}),t._v(" "),t._t("default")],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e,n){var i=n(80);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(85)("4764308c",i,!1)},function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=f[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(o(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(o(n.parts[r]));f[n.id]={id:n.id,refs:1,parts:s}}}}function r(){var t=document.createElement("style");return t.type="text/css",h.appendChild(t),t}function o(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(d)return m;i.parentNode.removeChild(i)}if(v){var o=p++;i=l||(l=r()),e=s.bind(null,i,o,!1),n=s.bind(null,i,o,!0)}else i=r(),e=u.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function s(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function u(t,e){var n=e.css,i=e.media,r=e.sourceMap;if(i&&t.setAttribute("media",i),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(86),f={},h=a&&(document.head||document.getElementsByTagName("head")[0]),l=null,p=0,d=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){d=n;var r=c(t,e);return i(r),function(e){for(var n=[],o=0;o<r.length;o++){var s=r[o],u=f[s.id];u.refs--,n.push(u)}e?(r=c(t,e),i(r)):r=[];for(var o=0;o<n.length;o++){var u=n[o];if(0===u.refs){for(var a=0;a<u.parts.length;a++)u.parts[a]();delete f[u.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],s=o[0],u=o[1],a=o[2],c=o[3],f={id:t+":"+r,css:u,media:a,sourceMap:c};i[s]?i[s].parts.push(f):n.push(i[s]={id:s,parts:[f]})}return n}}])});

/***/ }),
/* 107 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 108 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[82]);