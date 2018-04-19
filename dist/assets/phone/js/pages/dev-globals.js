webpackJsonp([8],{

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(95);
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
                var ValidateInput = __webpack_require__(96);
                var validateInput = new ValidateInput({ element: '.page-validate-form' });
                validateInput.setValidate('no-999', function (value) {
                    return Number(value) !== 999;
                });
            })();
        }
    }]);

    return Sub;
}(Super);

new Sub();

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(0); // 工具方法集合
var applications = __webpack_require__(1); // 应用方法集合
var domAddPosition = __webpack_require__(14);

function ValidateForm(json) {
    this.opts = tools.extend({
        element: '',
        hintClass: 'g-validate-form-hint'
    }, json);
    if (this.opts.element) {
        this.element = applications.getDomArray(this.opts.element);
    }
    if (this.element.length) {
        this.init();
    }
}

ValidateForm.prototype.init = function () {
    this.render();
    this.power();
};
ValidateForm.prototype.render = function () {
    var self = this;
    self.element.forEach(function (v) {
        if (v.parentNode) {
            domAddPosition(v.parentNode, 'relative');
        }
        v.customValidateRule = {}; // 自定义规则
        v.hintDom = document.createElement('span');
        v.hintDom.classList.add(self.opts.hintClass);
    });
};
ValidateForm.prototype.renderHintAdd = function () {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    // 只有没被隐藏的才进行验证
    var input = opts.input;
    var hintDom = input.hintDom;
    if (input.offsetWidth && hintDom) {
        hintDom.innerHTML = opts.txt;
        input.parentNode.appendChild(hintDom);
    }
};
ValidateForm.prototype.renderHintRemove = function () {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var input = opts.input;
    var parentDom = input.parentNode;
    var hintDom = input.parentNode.querySelector('.' + this.opts.hintClass);
    if (parentDom && hintDom) {
        parentDom.removeChild(input.hintDom);
    }
};
ValidateForm.prototype.validateInput = function (input) {
    var self = this;
    var customValidateRule = input.customValidateRule;
    Object.keys(customValidateRule).forEach(function (keys) {
        var obj = customValidateRule[keys];
        obj.isValidateSuccess = obj.fn(input.value);
    });
    var validateType = input.dataset.validate || 'undefined';
    var validateHintTxt = input.dataset.hint || 'undefined';
    var type = validateType.split(' ');
    var hintTxt = validateHintTxt.split(' ');
    var value = input.value;
    var isValidateSuccess = true; // 是否验证成功了
    type.forEach(function (v, i) {
        if (isValidateSuccess && customValidateRule[v]) {
            if (isValidateSuccess && customValidateRule[v].isValidateSuccess) {
                self.renderHintRemove({ input: input });
                isValidateSuccess = true;
            } else {
                self.renderHintAdd({ txt: hintTxt[i], input: input });
                isValidateSuccess = false;
            }
        }
        if (isValidateSuccess && !customValidateRule[v]) {
            if (isValidateSuccess && v === 'no-empty') {
                // 设置了非空验证
                if (tools.isEmpty(value)) {
                    self.renderHintAdd({ txt: hintTxt[i], input: input });
                    isValidateSuccess = false;
                } else {
                    self.renderHintRemove({ input: input });
                    isValidateSuccess = true;
                }
            }
            if (isValidateSuccess && v === 'no-zero') {
                // 设置了非零验证
                if (tools.isZero(value)) {
                    self.renderHintAdd({ txt: hintTxt[i], input: input });
                    isValidateSuccess = false;
                } else {
                    self.renderHintRemove({ input: input });
                    isValidateSuccess = true;
                }
            }
            if (isValidateSuccess && v === 'yes-positive-integer') {
                // 设置了正整数验证
                if (tools.isPositiveInteger(value)) {
                    self.renderHintRemove({ input: input });
                    isValidateSuccess = true;
                } else {
                    self.renderHintAdd({ txt: hintTxt[i], input: input });
                    isValidateSuccess = false;
                }
            }
        }
    });
    input.isValidateSuccess = isValidateSuccess;
};
ValidateForm.prototype.isAllPassValidate = function () {
    var self = this;
    var isValidateSuccess = true;
    self.element.forEach(function (v) {
        self.validateInput(v);
        if (v.isValidateSuccess !== true) {
            isValidateSuccess = false;
        }
    });
    return isValidateSuccess;
};
ValidateForm.prototype.power = function () {
    var self = this;
    self.element.forEach(function (v) {
        var eventsType = v.dataset.event || 'blur';
        v.addEventListener(eventsType, function () {
            self.validateInput(this);
        });
    });
};

// 自定义验证规则
ValidateForm.prototype.setValidate = function (name, fn) {
    this.element.forEach(function (v) {
        v.customValidateRule[name] = {
            fn: fn,
            isValidateSuccess: fn(v.value)
        };
    });
};

module.exports = ValidateForm;

/***/ })

},[94]);