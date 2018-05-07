webpackJsonp([2],{

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(114);
var Super = __webpack_require__(11);

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub() {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).apply(this, arguments));
    }

    _createClass(Sub, [{
        key: 'power',
        value: function power() {
            var superSelf = this;
            var dataInfo = superSelf.dataInfo;
            var routes = dataInfo.routes;

            // 验证
            (function () {
                var ValidateInput = __webpack_require__(9);
                var validateInput = new ValidateInput({ element: '.page-validate-form' });
                validateInput.setValidate('no-999', function (value) {
                    return Number(value) !== 999;
                });
                var isAllPassValidate = validateInput.isAllPassValidate();
                console.log('isAllPassValidate', isAllPassValidate);
            })();
        }
    }]);

    return Sub;
}(Super);

new Sub();

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(0); // 工具方法集合
var applications = __webpack_require__(2); // 应用方法集合
var domAddPosition = __webpack_require__(10);
var checkStr = tools.checkStr;
var getParent = applications.getParent;
var getDomArray = applications.getDomArray;

function ValidateForm(json) {
    this.opts = tools.extend({
        element: '',
        hintClass: 'g-validate-form-hint'
    }, json);
    if (this.opts.element) {
        this.element = getDomArray(this.opts.element);
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
        var inputWrapDom = self.getInputParent(v);
        if (inputWrapDom) {
            domAddPosition(inputWrapDom, 'relative');
            v.inputWrapDom = inputWrapDom;
        }
        v.customValidateRule = {}; // 自定义规则
        v.hintDom = document.createElement('span');
        v.hintDom.classList.add(self.opts.hintClass);
    });
};
ValidateForm.prototype.getInputParent = function (input) {
    var parent = getParent(input, '.g-form'); // 把这个放上面，是为了少调用一次getParent方法，因为g-form布局用的居多，g-validate-form-hint-wrap没怎么使用。
    if (!parent) {
        parent = getParent(input, '.g-validate-form-hint-wrap');
    }
    if (!parent) {
        parent = input.parentNode;
    }
    return parent;
};
ValidateForm.prototype.renderHintAdd = function () {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    // 只有没被隐藏的才进行验证
    var input = opts.input;
    var hintDom = input.hintDom;
    if (input.offsetWidth && hintDom) {
        hintDom.innerHTML = opts.txt;
        var inputWrapDom = input.inputWrapDom;
        var hintDomIsExist = inputWrapDom.querySelector('.' + this.opts.hintClass);
        if (inputWrapDom && !hintDomIsExist) {
            inputWrapDom.appendChild(hintDom);
        }
    }
};
ValidateForm.prototype.renderHintRemove = function () {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var input = opts.input;
    var inputWrapDom = input.inputWrapDom;
    var hintDom = inputWrapDom.querySelector('.' + this.opts.hintClass);
    if (inputWrapDom && hintDom) {
        inputWrapDom.removeChild(hintDom);
    }
};
ValidateForm.prototype.validateInput = function (input) {
    var self = this;
    var validateType = input.dataset.validate || 'undefined';
    var validateHintTxt = input.dataset.hint || 'undefined';
    var type = validateType.split(' ');
    var hintTxt = validateHintTxt.split(' ');
    var inputWrapDom = input.inputWrapDom;
    var inputType = input.type;
    var inputName = input.name;
    var isPassword = inputType === 'password';
    var isRadio = inputType === 'radio';
    var isCheckbox = inputType === 'checkbox';
    var isFile = inputType === 'file';
    var isHidden = inputType === 'hidden';
    var value = input.value;
    if (isFile) {
        // 如果是file类型的input，值就是input身上的自定义属性data-value
        value = input.dataset.value;
    }
    // 验证自定义的规则
    var customValidateRule = input.customValidateRule;
    Object.keys(customValidateRule).forEach(function (keys) {
        var obj = customValidateRule[keys];
        obj.isValidateSuccess = obj.fn(value);
    });
    // 验证非自定义的规则
    var isValidateSuccess = true; // 是否验证成功了，假设验证通过了。
    type.forEach(function (v, i) {
        if (isValidateSuccess && customValidateRule[v]) {
            // 验证通过了且自定义验证存在则校验自定义的规则是否通过了
            if (isValidateSuccess && customValidateRule[v].isValidateSuccess) {
                self.renderHintRemove({ input: input });
                isValidateSuccess = true;
            } else {
                self.renderHintAdd({ txt: hintTxt[i], input: input });
                isValidateSuccess = false;
            }
        }
        if (isValidateSuccess && !customValidateRule[v]) {
            // 验证通过了且自定义验证不存在则校验非自定义的规则是否通过了
            if (isValidateSuccess && v === 'no-empty') {
                // 设置了非空验证
                var isEmpty = checkStr.isEmpty(value);
                if (isPassword) {
                    // input为password类型的进行特殊处理
                    isEmpty = value === ''; // 因为密码可以输入空格，所以没必要去除首尾空格。
                }
                if (isRadio || isCheckbox) {
                    // input为radio类型和input为checkbox类型的进行特殊处理（这两种类型只验证是否必填就够用了，file类型和select下拉框也是只验证必填就够用了。）
                    var isChecked = inputWrapDom.querySelector('input[name=' + inputName + ']:checked');
                    isEmpty = isChecked === null;
                }
                if (isEmpty) {
                    self.renderHintAdd({ txt: hintTxt[i], input: input });
                    isValidateSuccess = false;
                } else {
                    self.renderHintRemove({ input: input });
                    isValidateSuccess = true;
                }
            }
            if (isValidateSuccess && v === 'no-zero') {
                // 设置了非零验证
                if (checkStr.isZero(value)) {
                    self.renderHintAdd({ txt: hintTxt[i], input: input });
                    isValidateSuccess = false;
                } else {
                    self.renderHintRemove({ input: input });
                    isValidateSuccess = true;
                }
            }
            if (isValidateSuccess && v === 'yes-positive-integer') {
                // 设置了正整数验证
                if (checkStr.isPositiveInteger(value)) {
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
            isValidateSuccess: false
        };
    });
};

module.exports = ValidateForm;

/***/ })

},[113]);