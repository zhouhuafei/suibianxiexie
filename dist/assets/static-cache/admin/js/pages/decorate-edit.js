webpackJsonp([1],{

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _super = __webpack_require__(4);

var _super2 = _interopRequireDefault(_super);

var _vue = __webpack_require__(14);

var _vue2 = _interopRequireDefault(_vue);

var _app = __webpack_require__(115);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(137);
__webpack_require__(138);


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

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(116)
}
var Component = __webpack_require__(39)(
  /* script */
  __webpack_require__(119),
  /* template */
  __webpack_require__(136),
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

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(117);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(38)("2c06cf11", content, false, {});
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

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n/*\r\n// px转rem(h5) 这个是给手机端用的。\r\n@function px2rem($px, $psd:320) {\r\n    @return $px / $psd * 10rem;\r\n}\r\n*/\nhtml[data-v-232fccf7], body[data-v-232fccf7], .g-wrap[data-v-232fccf7], .g-body[data-v-232fccf7], #app[data-v-232fccf7] {\n  height: 100%;\n}\n.g-wrap .g-body[data-v-232fccf7] {\n  padding: 0;\n}\n#app[data-v-232fccf7] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.components-collection[data-v-232fccf7] {\n  width: 300px;\n  min-width: 300px;\n  height: 100%;\n  background: #666666;\n  overflow: hidden;\n}\n.components[data-v-232fccf7] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.components-item[data-v-232fccf7] {\n  width: 50px;\n  height: 50px;\n  background: #ffffff;\n  margin: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  cursor: move;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.components-item.components-item_highlight[data-v-232fccf7] {\n    background: #fe313c;\n    color: #ffffff;\n}\n.components-item.components-item_selected[data-v-232fccf7] {\n    background: #fe313c;\n    color: #ffffff;\n    border: 2px dashed rgba(255, 0, 0, 0.5);\n}\n.components-item-drag[data-v-232fccf7] {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.components-simulator[data-v-232fccf7] {\n  width: 392px;\n  min-width: 375px;\n  height: 100%;\n  background: #777777;\n}\n.simulator[data-v-232fccf7] {\n  background: #888888;\n  height: 667px;\n  overflow: auto;\n}\n.simulator-item[data-v-232fccf7] {\n  position: relative;\n  height: 80px;\n  background: #f8f8f8;\n  cursor: move;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: 5;\n}\n.simulator-item.simulator-item_active .simulator-item-mask[data-v-232fccf7] {\n    display: block;\n    border: 2px dashed rgba(255, 0, 0, 0.5);\n}\n.simulator-item-hint[data-v-232fccf7] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  z-index: 2;\n}\n.simulator-item-mask[data-v-232fccf7] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(231, 91, 69, 0.5);\n  display: none;\n  z-index: 3;\n}\n.simulator-item-edit[data-v-232fccf7] {\n  height: 40px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 50%;\n  border-radius: 1000px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  display: none;\n  background: #ffffff;\n  z-index: 4;\n}\n.components-editor[data-v-232fccf7] {\n  background: #999999;\n  height: 100%;\n  width: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.editor-item[data-v-232fccf7] {\n  display: none;\n}\n.editor-item.editor-item_active[data-v-232fccf7] {\n    display: block;\n}\n", ""]);

// exports


/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] });
    } else {
      newStyles[id].parts.push(part);
    }
  }
  return styles;
};

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(14);

var _vue2 = _interopRequireDefault(_vue);

var _dragula = __webpack_require__(120);

var _dragula2 = _interopRequireDefault(_dragula);

var _vueSlicksort = __webpack_require__(129);

var _index = __webpack_require__(130);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var SortableList = {
    mixins: [_vueSlicksort.ContainerMixin],
    template: '<div class="simulator">\n        <slot></slot>\n    </div>'
};

var SortableItem = {
    mixins: [_vueSlicksort.ElementMixin],
    props: ['item'],
    template: '<div class="simulator-item"\n        :class="[item.isHighlight ? \'simulator-item_active\' : \'\', item.isSelected ? \'simulator-item_selected\' : \'\']"\n    >\n        <div class="simulator-item-hint">\u8BF7\u7F16\u8F91{{item.text}}\u7EC4\u4EF6\u5185\u5BB9</div>\n        <div class="simulator-item-edit">\u7F16\u8F91</div>\n        <div class="simulator-item-mask"></div>\n    </div>'
};

exports.default = {
    name: 'decorate-edit',
    data: function data() {
        return {
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

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var emitter = __webpack_require__(121);
var crossvent = __webpack_require__(125);
var classes = __webpack_require__(128);
var doc = document;
var documentElement = doc.documentElement;

function dragula(initialContainers, options) {
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
  if (o.moves === void 0) {
    o.moves = always;
  }
  if (o.accepts === void 0) {
    o.accepts = always;
  }
  if (o.invalid === void 0) {
    o.invalid = invalidTarget;
  }
  if (o.containers === void 0) {
    o.containers = initialContainers || [];
  }
  if (o.isContainer === void 0) {
    o.isContainer = never;
  }
  if (o.copy === void 0) {
    o.copy = false;
  }
  if (o.copySortSource === void 0) {
    o.copySortSource = false;
  }
  if (o.revertOnSpill === void 0) {
    o.revertOnSpill = false;
  }
  if (o.removeOnSpill === void 0) {
    o.removeOnSpill = false;
  }
  if (o.direction === void 0) {
    o.direction = 'vertical';
  }
  if (o.ignoreInputTextSelection === void 0) {
    o.ignoreInputTextSelection = true;
  }
  if (o.mirrorContainer === void 0) {
    o.mirrorContainer = doc.body;
  }

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

  function isContainer(el) {
    return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
  }

  function events(remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousedown', grab);
    touchy(documentElement, op, 'mouseup', release);
  }

  function eventualMovements(remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
  }

  function movements(remove) {
    var op = remove ? 'remove' : 'add';
    crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8
    crossvent[op](documentElement, 'click', preventGrabbed);
  }

  function destroy() {
    events(true);
    release({});
  }

  function preventGrabbed(e) {
    if (_grabbed) {
      e.preventDefault();
    }
  }

  function grab(e) {
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
      if (isInput(item)) {
        // see also: https://github.com/bevacqua/dragula/issues/208
        item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
      } else {
        e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
      }
    }
  }

  function startBecauseMouseMoved(e) {
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

  function canStart(item) {
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

  function canMove(item) {
    return !!canStart(item);
  }

  function manualStart(item) {
    var context = canStart(item);
    if (context) {
      start(context);
    }
  }

  function start(context) {
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

  function invalidTarget() {
    return false;
  }

  function end() {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    drop(item, getParent(item));
  }

  function ungrab() {
    _grabbed = false;
    eventualMovements(true);
    movements(true);
  }

  function release(e) {
    ungrab();

    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var clientX = getCoord('clientX', e);
    var clientY = getCoord('clientY', e);
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    if (dropTarget && (_copy && o.copySortSource || !_copy || dropTarget !== _source)) {
      drop(item, dropTarget);
    } else if (o.removeOnSpill) {
      remove();
    } else {
      cancel();
    }
  }

  function drop(item, target) {
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

  function remove() {
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

  function cancel(revert) {
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

  function cleanup() {
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

  function isInitialPlacement(target, s) {
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

  function findDropTarget(elementBehindCursor, clientX, clientY) {
    var target = elementBehindCursor;
    while (target && !accepted()) {
      target = getParent(target);
    }
    return target;

    function accepted() {
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

  function drag(e) {
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
    if (reference === null && changed || reference !== item && reference !== nextEl(item)) {
      _currentSibling = reference;
      dropTarget.insertBefore(item, reference);
      drake.emit('shadow', item, dropTarget, _source);
    }
    function moved(type) {
      drake.emit(type, item, _lastDropTarget, _source);
    }
    function over() {
      if (changed) {
        moved('over');
      }
    }
    function out() {
      if (_lastDropTarget) {
        moved('out');
      }
    }
  }

  function spillOver(el) {
    classes.rm(el, 'gu-hide');
  }

  function spillOut(el) {
    if (drake.dragging) {
      classes.add(el, 'gu-hide');
    }
  }

  function renderMirrorImage() {
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

  function removeMirrorImage() {
    if (_mirror) {
      classes.rm(o.mirrorContainer, 'gu-unselectable');
      touchy(documentElement, 'remove', 'mousemove', drag);
      getParent(_mirror).removeChild(_mirror);
      _mirror = null;
    }
  }

  function getImmediateChild(dropTarget, target) {
    var immediate = target;
    while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
      immediate = getParent(immediate);
    }
    if (immediate === documentElement) {
      return null;
    }
    return immediate;
  }

  function getReference(dropTarget, target, x, y) {
    var horizontal = o.direction === 'horizontal';
    var reference = target !== dropTarget ? inside() : outside();
    return reference;

    function outside() {
      // slower, but able to figure out any position
      var len = dropTarget.children.length;
      var i;
      var el;
      var rect;
      for (i = 0; i < len; i++) {
        el = dropTarget.children[i];
        rect = el.getBoundingClientRect();
        if (horizontal && rect.left + rect.width / 2 > x) {
          return el;
        }
        if (!horizontal && rect.top + rect.height / 2 > y) {
          return el;
        }
      }
      return null;
    }

    function inside() {
      // faster, but only available if dropped inside a child element
      var rect = target.getBoundingClientRect();
      if (horizontal) {
        return resolve(x > rect.left + getRectWidth(rect) / 2);
      }
      return resolve(y > rect.top + getRectHeight(rect) / 2);
    }

    function resolve(after) {
      return after ? nextEl(target) : target;
    }
  }

  function isCopy(item, container) {
    return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
  }
}

function touchy(el, op, type, fn) {
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

function whichMouseButton(e) {
  if (e.touches !== void 0) {
    return e.touches.length;
  }
  if (e.which !== void 0 && e.which !== 0) {
    return e.which;
  } // see https://github.com/bevacqua/dragula/issues/261
  if (e.buttons !== void 0) {
    return e.buttons;
  }
  var button = e.button;
  if (button !== void 0) {
    // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
    return button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
  }
}

function getOffset(el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
    top: rect.top + getScroll('scrollTop', 'pageYOffset')
  };
}

function getScroll(scrollProp, offsetProp) {
  if (typeof global[offsetProp] !== 'undefined') {
    return global[offsetProp];
  }
  if (documentElement.clientHeight) {
    return documentElement[scrollProp];
  }
  return doc.body[scrollProp];
}

function getElementBehindPoint(point, x, y) {
  var p = point || {};
  var state = p.className;
  var el;
  p.className += ' gu-hide';
  el = doc.elementFromPoint(x, y);
  p.className = state;
  return el;
}

function never() {
  return false;
}
function always() {
  return true;
}
function getRectWidth(rect) {
  return rect.width || rect.right - rect.left;
}
function getRectHeight(rect) {
  return rect.height || rect.bottom - rect.top;
}
function getParent(el) {
  return el.parentNode === doc ? null : el.parentNode;
}
function isInput(el) {
  return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el);
}
function isEditable(el) {
  if (!el) {
    return false;
  } // no parents were editable
  if (el.contentEditable === 'false') {
    return false;
  } // stop the lookup
  if (el.contentEditable === 'true') {
    return true;
  } // found a contentEditable element in the chain
  return isEditable(getParent(el)); // contentEditable is set to 'inherit'
}

function nextEl(el) {
  return el.nextElementSibling || manually();
  function manually() {
    var sibling = el;
    do {
      sibling = sibling.nextSibling;
    } while (sibling && sibling.nodeType !== 1);
    return sibling;
  }
}

function getEventHost(e) {
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

function getCoord(coord, e) {
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var atoa = __webpack_require__(122);
var debounce = __webpack_require__(123);

module.exports = function emitter(thing, options) {
  var opts = options || {};
  var evt = {};
  if (thing === undefined) {
    thing = {};
  }
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
      if (!et) {
        return thing;
      }
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
      if (type === 'error' && opts.throws !== false && !et.length) {
        throw args.length === 1 ? args[0] : args;
      }
      et.forEach(function emitter(listen) {
        if (opts.async) {
          debounce(listen, args, ctx);
        } else {
          listen.apply(ctx, args);
        }
        if (listen._once) {
          thing.off(type, listen);
        }
      });
      return thing;
    };
  };
  return thing;
};

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function atoa(a, n) {
  return Array.prototype.slice.call(a, n);
};

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ticky = __webpack_require__(124);

module.exports = function debounce(fn, args, ctx) {
  if (!fn) {
    return;
  }
  ticky(function run() {
    fn.apply(ctx || null, args || []);
  });
};

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

var si = typeof setImmediate === 'function',
    tick;
if (si) {
  tick = function tick(fn) {
    setImmediate(fn);
  };
} else {
  tick = function tick(fn) {
    setTimeout(fn, 0);
  };
}

module.exports = tick;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37).setImmediate))

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var customEvent = __webpack_require__(126);
var eventmap = __webpack_require__(127);
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

function addEventEasy(el, type, fn, capturing) {
  return el.addEventListener(type, fn, capturing);
}

function addEventHard(el, type, fn) {
  return el.attachEvent('on' + type, wrap(el, type, fn));
}

function removeEventEasy(el, type, fn, capturing) {
  return el.removeEventListener(type, fn, capturing);
}

function removeEventHard(el, type, fn) {
  var listener = unwrap(el, type, fn);
  if (listener) {
    return el.detachEvent('on' + type, listener);
  }
}

function fabricateEvent(el, type, model) {
  var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
  if (el.dispatchEvent) {
    el.dispatchEvent(e);
  } else {
    el.fireEvent('on' + type, e);
  }
  function makeClassicEvent() {
    var e;
    if (doc.createEvent) {
      e = doc.createEvent('Event');
      e.initEvent(type, true, true);
    } else if (doc.createEventObject) {
      e = doc.createEventObject();
    }
    return e;
  }
  function makeCustomEvent() {
    return new customEvent(type, { detail: model });
  }
}

function wrapperFactory(el, type, fn) {
  return function wrapper(originalEvent) {
    var e = originalEvent || global.event;
    e.target = e.target || e.srcElement;
    e.preventDefault = e.preventDefault || function preventDefault() {
      e.returnValue = false;
    };
    e.stopPropagation = e.stopPropagation || function stopPropagation() {
      e.cancelBubble = true;
    };
    e.which = e.which || e.keyCode;
    fn.call(el, e);
  };
}

function wrap(el, type, fn) {
  var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
  hardCache.push({
    wrapper: wrapper,
    element: el,
    type: type,
    fn: fn
  });
  return wrapper;
}

function unwrap(el, type, fn) {
  var i = find(el, type, fn);
  if (i) {
    var wrapper = hardCache[i].wrapper;
    hardCache.splice(i, 1); // free up a tad of memory
    return wrapper;
  }
}

function find(el, type, fn) {
  var i, item;
  for (i = 0; i < hardCache.length; i++) {
    item = hardCache[i];
    if (item.element === el && item.type === type && item.fn === fn) {
      return i;
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var NativeCustomEvent = global.CustomEvent;

function useNative() {
  try {
    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
    return 'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {}
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
'function' === typeof document.createEvent ? function CustomEvent(type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :

// IE <= 8
function CustomEvent(type, params) {
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
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 127:
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cache = {};
var start = '(?:^|\\s)';
var end = '(?:\\s|$)';

function lookupClass(className) {
  var cached = cache[className];
  if (cached) {
    cached.lastIndex = 0;
  } else {
    cache[className] = cached = new RegExp(start + className + end, 'g');
  }
  return cached;
}

function addClass(el, className) {
  var current = el.className;
  if (!current.length) {
    el.className = className;
  } else if (!lookupClass(className).test(current)) {
    el.className += ' ' + className;
  }
}

function rmClass(el, className) {
  el.className = el.className.replace(lookupClass(className), ' ').trim();
}

module.exports = {
  add: addClass,
  rm: rmClass
};

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.VueSlicksort = {});
})(undefined, function (exports) {
  'use strict';

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

  var classCallCheck = function classCallCheck(instance, Constructor) {
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

  var toConsumableArray = function toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }return arr2;
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
});

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _main = __webpack_require__(131);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_main2.default.install = function (Vue) {
    Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(132)
}
var Component = __webpack_require__(39)(
  /* script */
  __webpack_require__(134),
  /* template */
  __webpack_require__(135),
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

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(133);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(38)("411e272a", content, false, {});
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

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)(false);
// imports


// module
exports.push([module.i, "\n.g-hot-area[data-v-0186be78] {\n    position: relative;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    overflow: hidden;\n}\n.g-hot-area-item[data-v-0186be78] {\n    position: absolute;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 80px;\n    height: 80px;\n    left: 0;\n    top: 0;\n    background: rgba(36, 186, 171, 0.4);\n    border: 1px solid #24baab;\n    z-index: 2;\n    overflow: hidden;\n}\n.g-hot-area-item.g-hot-area-item_active[data-v-0186be78] {\n    background: rgba(255, 0, 0, 0.4);\n    border-color: #E75C45;\n}\n.g-hot-area-item-zoom[data-v-0186be78] {\n    position: absolute;\n    right: -8px;\n    bottom: -8px;\n    z-index: 3;\n    width: 0;\n    height: 0;\n    border: 8px solid transparent;\n    border-top-color: rgba(255, 255, 255, 0.96);\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    cursor: nwse-resize;\n}\n", ""]);

// exports


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = {
    name: 'g-hot-area',
    props: {
        items: {
            type: Array,
            default: function _default() {
                return [{
                    isSelected: false,
                    l: 0,
                    t: 0,
                    w: 100,
                    h: 100
                }, {
                    isSelected: true,
                    l: 150,
                    t: 150,
                    w: 100,
                    h: 100
                }];
            }
        }
    },
    methods: {
        mousedown: function mousedown() {},
        mousemove: function mousemove() {},
        mouseup: function mouseup() {}
    },
    mounted: function mounted() {
        console.log(this.items);
    }
};

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-hot-area"
  }, [_vm._t("default"), _vm._v(" "), _vm._l((_vm.items), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "g-hot-area-item",
      class: {
        'g-hot-area-item_active': item.isSelected
      },
      style: ({
        left: item.l,
        top: item.t
      }),
      on: {
        "mousedown": _vm.mousedown,
        "mouseup": _vm.mouseup,
        "mousemove": _vm.mousemove
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

/***/ 136:
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
    }, [_vm._v("\n                    " + _vm._s(item.text) + "编辑区域\n                    "), _c('g-hot-area', {
      staticStyle: {
        "width": "500px",
        "height": "500px",
        "background": "#eeeeee"
      }
    })], 1)
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

/***/ 137:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 38:
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

var listToStyles = __webpack_require__(118)

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

/***/ 39:
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

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
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
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
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

/***/ })

},[114]);