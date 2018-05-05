webpackJsonp([4],{

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(21);
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
            var api = dataInfo.api;
            var axios = superSelf.axios;

            // 验证
            (function () {
                var ValidateInput = __webpack_require__(9);
                new ValidateInput({ element: '.page-validate-form' });
            })();

            // 修改
            (function () {
                var form = document.querySelector('#form');
                var username = document.querySelector('#username');
                var oldPassword = document.querySelector('#old-password');
                var newPassword = document.querySelector('#new-password');
                var repeatNewPassword = document.querySelector('#repeat-new-password');
                var btn = document.querySelector('.js-button');
                btn.addEventListener('click', function () {
                    axios({
                        url: form.action,
                        method: form.method,
                        /*
                        data: {
                            username: username.value,
                            'old-password': oldPassword.value,
                            'new-password': newPassword.value,
                            'repeat-password': repeatNewPassword.value,
                        },
                        */
                        data: $(form).serialize()
                        // data: new FormData(form),
                    }).then(function (json) {
                        if (json.status === 'success') {
                            window.location.href = routes['login'].route;
                            /*
                            const DialogJumpLink = require('../components-dom/g-dialog-jump-link');
                            new DialogJumpLink({
                                title: json.message,
                                seconds: 3,
                                pageTitle: routes['login'].title,
                                href: routes['login'].route,
                            });
                            */
                        }
                    });
                });
            })();

            // 忘记密码,去删库
            document.querySelector('.js-del-db').addEventListener('click', function () {
                new superSelf.Dialog({
                    config: {
                        type: 'confirm', // 默认是提示框
                        confirm: {
                            content: '<div class="page-dialog-del-db">\n                            <div>1. \u94FE\u63A5\u4F60\u7684mongodb\u6570\u636E\u5E93\u3002</div>\n                            <div>2. \u627E\u5230\u540D\u4E3Asuibianxiexie\u7684\u6570\u636E\u5E93\u3002</div>\n                            <div>3. \u627E\u5230\u540D\u4E3Aadmins\u7684\u96C6\u5408\u3002</div>\n                            <div>4. \u5220\u9664\u540D\u4E3Aadmins\u7684\u96C6\u5408\u3002</div>\n                            <div>5. \u5728\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u91CC\u91CD\u65B0\u6CE8\u518C\u7BA1\u7406\u5458\u8D26\u53F7\u3002</div>\n                        </div>'
                        }
                    }
                });
            });
        }
    }]);

    return Sub;
}(Super);

new Sub();

/***/ }),

/***/ 21:
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
            // domAddPosition(v.parentNode, 'relative');
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
    var inputType = input.type;
    var isPassword = inputType === 'password';
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
                var isEmpty = checkStr.isEmpty(value);
                if (isPassword) {
                    isEmpty = value === ''; // input为password类型的进行特殊处理
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
            isValidateSuccess: fn(v.value)
        };
    });
};

module.exports = ValidateForm;

/***/ })

},[111]);