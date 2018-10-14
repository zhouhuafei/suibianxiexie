webpackJsonp([7],{

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(127);
var Super = __webpack_require__(3);
var SelectAll = __webpack_require__(128);

var _require = __webpack_require__(10),
    Message = _require.Message,
    Confirm = _require.Confirm,
    Validate = _require.Validate,
    GoTop = _require.GoTop,
    TooltipApp = _require.TooltipApp,
    Copyright = _require.Copyright,
    LazyLoad = _require.LazyLoad;

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub() {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).apply(this, arguments));
    }

    _createClass(Sub, [{
        key: 'power',

        // (功)(覆)功能(覆盖超类型)
        value: function power() {
            var self = this;

            // base函数测试
            (function () {
                // 测试全选
                new SelectAll({
                    items: '.g-checkbox-body-main',
                    callback: {
                        click: function click(obj) {
                            console.log(obj);
                        }
                    }
                });
            })();

            // 验证
            (function () {
                var validateInput = new Validate({ element: '.js-validate-form' });
                validateInput.setValidate('no-999', function (value) {
                    return Number(value) !== 999;
                });
            })();

            // 弹窗测试
            (function () {
                document.querySelector('.js-button-dialog').addEventListener('click', function () {
                    new Confirm({
                        callback: {
                            confirm: function confirm() {
                                new Message({ config: { icon: 'icon-success', content: '已确认' } });
                            },
                            cancel: function cancel() {
                                new Message({ config: { icon: 'icon-success', content: '已取消' } });
                            },
                            close: function close() {
                                new Message({ config: { icon: 'icon-success', content: '已关闭' } });
                            }
                        }
                    });
                });
            })();
        }
    }]);

    return Sub;
}(Super);

new Sub();

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var extend = __webpack_require__(0),
    getDomArray = __webpack_require__(6),
    eventDelegate = __webpack_require__(129);function SelectAll(e) {
  this.opts = extend({ items: null, isOpenEventDelegate: !1, isFilterDisabled: !0, isUseCheckboxBtnSelectAll: !1, checkboxBtn: null, callback: { click: function click() {} } }, e), this.init();
}SelectAll.prototype.init = function () {
  this.itemsDom = getDomArray(this.opts.items), this.power();
}, SelectAll.prototype.selectNothing = function () {
  var e = this,
      t = e.opts;t.isOpenEventDelegate && (e.itemsDom = getDomArray(t.items)), e.itemsDom.forEach(function (e) {
    t.isFilterDisabled && e.disabled || (e.checked = !1);
  });
}, SelectAll.prototype.selectAll = function () {
  var e = this,
      t = e.opts;t.isOpenEventDelegate && (e.itemsDom = getDomArray(t.items)), e.itemsDom.forEach(function (e) {
    t.isFilterDisabled && e.disabled || (e.checked = !0);
  });
}, SelectAll.prototype.selectReverse = function () {
  var e = this,
      t = e.opts;t.isOpenEventDelegate && (e.itemsDom = getDomArray(t.items)), e.itemsDom.forEach(function (e) {
    t.isFilterDisabled && e.disabled || (e.checked = !e.checked);
  });
}, SelectAll.prototype.isSelectAll = function () {
  var e = this,
      t = e.opts;t.isOpenEventDelegate && (e.itemsDom = getDomArray(t.items));var l = !0;return e.itemsDom.forEach(function (e) {
    t.isFilterDisabled && e.disabled || !1 === e.checked && (l = !1);
  }), l;
}, SelectAll.prototype.power = function () {
  var e = this,
      t = e.opts,
      l = t.isUseCheckboxBtnSelectAll,
      i = document.querySelector(t.checkboxBtn),
      c = !!i && "checkbox" === i.type;l && c && (i.isBindSelectAllClick || (i.isBindSelectAllClick = !0, i.addEventListener("click", function () {
    this.checked ? e.selectAll() : e.selectNothing();
  }))), t.isOpenEventDelegate ? document.isBindSelectAllClick || (document.isBindSelectAllClick = !0, eventDelegate.on(document, "click", t.items, function () {
    var s = e.isSelectAll();l && c && (i.checked = s), t.callback.click({ element: this, isCheckedAll: s });
  })) : e.itemsDom.forEach(function (s) {
    s.isBindSelectAllClick || (s.isBindSelectAllClick = !0, s.addEventListener("click", function () {
      var s = e.isSelectAll();l && c && (i.checked = s), t.callback.click({ element: this, isCheckedAll: s });
    }));
  });
}, module.exports = SelectAll;

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _createClass = function () {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }return function (t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t;
  };
}();function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}var getDomArray = __webpack_require__(6),
    typeOf = __webpack_require__(16),
    isDomParent = __webpack_require__(58),
    _require = __webpack_require__(130),
    isEnterOrLeave = _require.isEnterOrLeave;function fnMouse(e, t, n) {
  var r = n === e,
      o = isDomParent(e, n);r || o || t && t.call(e, e);
}var EventDelegate = function () {
  function e() {
    _classCallCheck(this, e);
  }return _createClass(e, [{ key: "on", value: function value(t) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "click",
          r = arguments[2],
          o = arguments[3],
          a = "function" === typeOf(r);"string" !== typeOf(n) || "string" !== typeOf(r) && !a || !a && "function" !== typeOf(o) ? console.log("event-delegate on 方法参数错误") : getDomArray(t).forEach(function (t) {
        var i = e.getName(n, r);if (!t[i]) {
          t[i] = { currentElement: r, fn: [] };var f = ["focus", "blur"];"function" !== typeOf(t[i].currentElement) && (f.push("mouseenter"), f.push("mouseleave"));var l = -1 !== f.indexOf(n),
              u = n;"mouseenter" === u && (u = "mouseover"), "mouseleave" === u && (u = "mouseout"), t.addEventListener(u, function (e) {
            var r = this;(e = e || window.event, "function" === typeOf(t[i].currentElement)) ? t[i].fn.forEach(function (t) {
              "mouseenter" === n || "mouseleave" === n ? isEnterOrLeave(r, e.relatedTarget) && t.call(r, e) : t.call(r, e);
            }) : getDomArray(t[i].currentElement, t).reverse().forEach(function (r) {
              for (var o = e.target || e.srcElement, a = o === t; o !== r && !a;) {
                o === t ? a = !0 : o = o.parentNode;
              }o === r && t[i].fn.forEach(function (t) {
                "mouseenter" === n || "mouseleave" === n ? isEnterOrLeave(o, e.relatedTarget) && t.call(o, e) : t.call(o, e);
              });
            });
          }, l);
        }t[i].fn.push(a ? r : o);
      });
    } }, { key: "off", value: function value(t) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "click",
          r = arguments[2],
          o = arguments[3];if (2 === arguments.length) {
        if ("string" !== typeOf(n)) return void console.log("event-delegate off 方法参数错误");
      } else if (3 === arguments.length && ("string" !== typeOf(n) || "string" !== typeOf(r))) return void console.log("event-delegate off 方法参数错误");getDomArray(t).forEach(function (t) {
        var a = e.getName(n, r);t[a] && (isNaN(Number(o)) ? t[a].fn.length = 0 : t[a].fn.splice(o, 1));
      });
    } }, { key: "emit", value: function value(t) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "click",
          r = arguments[2],
          o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};if (2 === arguments.length) {
        if ("string" !== typeOf(n)) return void console.log("event-delegate emit 方法参数错误");
      } else if (3 === arguments.length) {
        var a = "object" === typeOf(r);if ("string" !== typeOf(n) || "string" !== typeOf(r) && !a) return void console.log("event-delegate emit 方法参数错误");a && (o = r, r = void 0);
      } else if (4 === arguments.length) {
        if ("string" !== typeOf(n) || "string" !== typeOf(r)) return void console.log("event-delegate emit 方法参数错误");"object" !== typeOf(o) && console.log("event-delegate emit 第四参数错误 第四参数是数据必须为对象");
      }getDomArray(t).forEach(function (t) {
        var a = e.getName(n, r);t[a] && t[a].fn.forEach(function (e) {
          e(t, o);
        });
      });
    } }], [{ key: "getName", value: function value(e, t) {
      var n = "unique" + e;return "function" !== typeOf(t) && void 0 !== t && (n += t), n;
    } }]), e;
}(),
    eventDelegate = new EventDelegate();module.exports = eventDelegate;

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getDomArray = __webpack_require__(6),
    isDomParent = __webpack_require__(58);function isEnterOrLeave(e, r) {
  var t = r === e,
      n = isDomParent(e, r);return !t && !n;
}module.exports = { isEnterOrLeave: isEnterOrLeave, mouseenter: function mouseenter(e, r) {
    var t = getDomArray(e)[0];t.addEventListener("mouseover", function (e) {
      isEnterOrLeave(t, e.relatedTarget) && "function" == typeof r && r && r.call(t, e);
    });
  }, mouseleave: function mouseleave(e, r) {
    var t = getDomArray(e)[0];t.addEventListener("mouseout", function (e) {
      isEnterOrLeave(t, e.relatedTarget) && "function" == typeof r && r && r.call(t, e);
    });
  } };

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getDomArray = __webpack_require__(6),
    typeOf = __webpack_require__(16);function isDomParent(r, e) {
  var t = getDomArray(r)[0],
      o = getDomArray(e)[0];if (!t || !o) return console.log("参数错误"), !1;if ("string" === typeOf(e)) return null !== t.querySelector(e);for (var n = o; n !== t && null !== n;) {
    n = n.parentNode;
  }return n === t;
}module.exports = isDomParent;

/***/ })

},[126]);