webpackJsonp([6],{

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(83);
var Super = __webpack_require__(3);

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub() {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).apply(this, arguments));
    }

    _createClass(Sub, [{
        key: 'power',
        value: function power() {
            var self = this;
            var applications = self.applications;

            // base函数测试
            (function () {
                // 测试全选
                var Select = applications.select();
                new Select({
                    items: '.g-checkbox-checkbox',
                    callback: {
                        click: function click(obj) {
                            console.log(obj);
                        }
                    }
                });
            })();

            // 验证
            (function () {
                var ValidateInput = __webpack_require__(84);
                var aInput = [].slice.call(document.querySelectorAll('.page-validate-form'));
                aInput.forEach(function (v) {
                    new ValidateInput({ element: v });
                });
            })();
        }
    }]);

    return Sub;
}(Super);

new Sub();

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(0); // 工具方法集合
var applications = __webpack_require__(1); // 应用方法集合

function ValidateForm(json) {
    this.opts = json || {};
    this.element = applications.getDomArray(this.opts.element)[0];
    this.hintClass = this.opts.hintClass || 'g-validate-form-hint';
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
    if (this.wrapDom && getComputedStyle(this.wrapDom).position === 'static') {
        this.wrapDom.style.position = 'relative';
    }
};
ValidateForm.prototype.renderHint = function () {
    this.hintDom = document.createElement('span');
    this.hintDom.classList.add(this.hintClass);
};
ValidateForm.prototype.renderHintAdd = function (json) {
    // 只有没被隐藏的才进行验证
    if (this.element.offsetWidth) {
        var opts = json || {};
        this.hintDom.innerHTML = opts.txt || '本项必填';
        this.wrapDom.appendChild(this.hintDom);
    }
};
ValidateForm.prototype.renderHintRemove = function () {
    var isHaveHintDom = this.wrapDom.querySelector('.' + this.hintClass);
    if (isHaveHintDom) {
        this.wrapDom.removeChild(this.hintDom);
    }
};
ValidateForm.prototype.validateSave = function () {
    var self = this;
    var type = self.validateType.split(' ');
    var hintTxt = self.validateHintTxt.split(' ');
    var value = this.element.value;
    this.isValidateSuccess = true; // 是否验证成功了
    type.forEach(function (v, i) {
        if (v === 'no-empty' && self.isValidateSuccess) {
            // 设置了非空验证
            if (tools.isEmpty(value)) {
                self.renderHintAdd({ txt: hintTxt[i] });
                self.isValidateSuccess = false;
            } else {
                self.renderHintRemove();
                self.isValidateSuccess = true;
            }
        }
        if (v === 'no-zero' && self.isValidateSuccess) {
            // 设置了非零验证
            if (tools.isZero(value)) {
                self.renderHintAdd({ txt: hintTxt[i] });
                self.isValidateSuccess = false;
            } else {
                self.renderHintRemove();
                self.isValidateSuccess = true;
            }
        }
        if (v === 'yes-positive-integer' && self.isValidateSuccess) {
            // 设置了正整数验证
            if (tools.isPositiveInteger(value)) {
                self.renderHintRemove();
                self.isValidateSuccess = true;
            } else {
                self.renderHintAdd({ txt: hintTxt[i] });
                self.isValidateSuccess = false;
            }
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

/***/ })

},[82]);