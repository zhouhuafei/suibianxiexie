webpackJsonp([5],{

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(118);
var Super = __webpack_require__(10);

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
            var superSelf = this;
            var dataInfo = superSelf.dataInfo;
            var routes = dataInfo.routes;
            var api = dataInfo.api;
            var axios = superSelf.axios;

            // 验证
            (function () {
                var ValidateInput = __webpack_require__(4);
                new ValidateInput({ element: '.js-validate-form' });
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
                        if (json.status === 'failure') {
                            document.querySelector('.g-verify-code-canvas img').click();
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

/***/ 118:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(0); // 工具方法集合
var applications = __webpack_require__(2); // 应用方法集合
var domAddPosition = __webpack_require__(7);
var checkStr = tools.checkStr;
var getParent = applications.getParent;
var getDomArray = applications.getDomArray;

function ValidateForm(json) {
    this.opts = tools.extend({
        element: '',
        hintClass: 'g-validate-form-hint',
        hintWrapClass: 'g-form', // 指定提示框的父级
        fileActiveClass: 'g-upload-active', // 文件或者图片上传成功之后的class，做限制个数需要这个
        isBindEvent: true // 是否绑定事件
    }, json);
    this.init();
}

ValidateForm.prototype.init = function () {
    this.render();
    if (this.opts.isBindEvent) {
        this.power();
    }
};
ValidateForm.prototype.render = function () {
    var self = this;
    self.element = getDomArray(this.opts.element); // 为了兼容未来动态创建的元素，此方法会被多次调用，元素要重新获取。
    self.element.forEach(function (v) {
        if (!v.hintWrapDom) {
            // 为了兼容未来动态创建的元素，此方法会被多次调用，为了提高性能，所以这里不重新赋值，虽然此处可以重新赋值。
            var hintWrapDom = self.getHintWrapDom(v);
            if (hintWrapDom) {
                domAddPosition(hintWrapDom, 'relative');
                v.hintWrapDom = hintWrapDom;
            }
        }
        if (!v.hintDom) {
            // 为了兼容未来动态创建的元素，此方法会被多次调用，但是这里却不能重新赋值，否则会导致引用消失，以至于renderHintAdd时修改hintDom的innerHTML失效。
            v.hintDom = document.createElement('span');
            v.hintDom.classList.add(self.opts.hintClass);
        }
    });
};
ValidateForm.prototype.getHintWrapDom = function (input) {
    var hintWrapClass = this.opts.hintWrapClass;
    var parent = getParent(input, '.' + hintWrapClass); // 把这个放上面，是为了少调用一次getParent方法，因为g-form布局用的居多，g-validate-form-hint-wrap没怎么使用。
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

    var input = opts.input;
    var hintDom = input.hintDom;
    if (hintDom) {
        hintDom.innerHTML = opts.txt;
        var hintWrapDom = input.hintWrapDom;
        var hintDomIsExist = hintWrapDom.querySelector('.' + this.opts.hintClass);
        if (hintWrapDom && !hintDomIsExist) {
            // hintWrapDom.appendChild(hintDom);
            hintWrapDom.insertBefore(hintDom, hintWrapDom.children[0]);
        }
    }
};
ValidateForm.prototype.renderHintRemove = function () {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var input = opts.input;
    var hintWrapDom = input.hintWrapDom;
    var hintDom = hintWrapDom.querySelector('.' + this.opts.hintClass);
    if (hintWrapDom && hintDom) {
        hintWrapDom.removeChild(hintDom);
    }
};
ValidateForm.prototype.validateInput = function (input) {
    var self = this;
    var opts = self.opts;
    if (input.offsetWidth === 0) {
        // 不验证宽度为0的input(display为none时不验证)(只有没被隐藏的才进行验证)
        return;
    }
    var validateType = input.dataset.validate || 'undefined';
    var validateHintTxt = input.dataset.hint || 'undefined';
    var type = validateType.split(' ');
    var hintTxt = validateHintTxt.split(' ');
    var hintWrapDom = input.hintWrapDom;
    var inputType = input.type;
    var inputName = input.name; // 这个不能使用，因为有些name名称是这种格式 hobby[] 此时通过name获取会报错 -> 纠正 其实不会报错 只需要 input[name=""] 把变量放在双引号里拼接一下就行了
    var isPassword = inputType === 'password';
    var isRadio = inputType === 'radio';
    var isCheckbox = inputType === 'checkbox';
    var isFile = inputType === 'file';
    var value = input.value;
    if (isFile) {
        // 如果是file类型的input，值就是input身上的自定义属性data-value
        value = input.dataset.value;
    }
    // 验证自定义的规则
    var customValidateRule = input.customValidateRule || {};
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
                    var isChecked = hintWrapDom.querySelector('input:checked');
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
            if (isValidateSuccess && v === 'yes-positive-float') {
                // 设置了正浮点数验证
                if (checkStr.isPositiveFloat(value)) {
                    self.renderHintRemove({ input: input });
                    isValidateSuccess = true;
                } else {
                    self.renderHintAdd({ txt: hintTxt[i], input: input });
                    isValidateSuccess = false;
                }
            }
            if (isValidateSuccess && v === 'yes-phone') {
                // 设置了电话验证
                if (checkStr.isPhoneNumEasy(value)) {
                    self.renderHintRemove({ input: input });
                    isValidateSuccess = true;
                } else {
                    self.renderHintAdd({ txt: hintTxt[i], input: input });
                    isValidateSuccess = false;
                }
            }
            if (isValidateSuccess && v === 'yes-email') {
                // 设置了邮箱验证
                if (checkStr.isEmail(value)) {
                    self.renderHintRemove({ input: input });
                    isValidateSuccess = true;
                } else {
                    self.renderHintAdd({ txt: hintTxt[i], input: input });
                    isValidateSuccess = false;
                }
            }
            if (isValidateSuccess && v === 'yes-url') {
                // 设置了网址验证
                if (checkStr.isUrl(value)) {
                    self.renderHintRemove({ input: input });
                    isValidateSuccess = true;
                } else {
                    self.renderHintAdd({ txt: hintTxt[i], input: input });
                    isValidateSuccess = false;
                }
            }
            var yesLimitLength = /yes-limit-length-(\d+)/.exec(v);
            if (isValidateSuccess && yesLimitLength) {
                // 设置了限制长度
                var length = yesLimitLength[1];
                var isPassLimitLength = value.length > length;
                if (isCheckbox) {
                    // input为checkbox类型的进行特殊处理
                    var checkboxAll = hintWrapDom.querySelectorAll('input:checked');
                    isPassLimitLength = length >= checkboxAll.length;
                }
                if (isFile) {
                    // input为file类型的进行特殊处理
                    var fileAll = hintWrapDom.querySelectorAll('.' + opts.fileActiveClass); // 这个class应该放到opts里，是可配置的。
                    isPassLimitLength = length >= fileAll.length;
                }
                if (isPassLimitLength) {
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
    self.render(); // 为了兼容未来动态创建的元素，这里需要重新渲染并绑定属性
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
    var eventIsRepeat = {};
    self.element.forEach(function (v) {
        var eventsType = v.dataset.event || 'blur';
        // js原生事件无法给未来动态创建的元素加事件，除非我用自己封装的那个事件委托进行绑定，但是代码上百行，还是直接用jq的吧。
        // jq的事件委托很奇葩，如果input里有值，清空之后失去焦点会触发两次，没有值触发一次。
        // 奇葩的原因是因为委托了blur和change事件，blur的时候如果value改变了，会触发blur和change，所以会触发两次，没毛病。
        // jq的事件委托可以给未来动态创建的元素加事件，但是事件会被绑定多次，所以我定义了一个eventIsRepeat来进行过滤。
        var name = eventsType + self.opts.element;
        if (!eventIsRepeat[name]) {
            eventIsRepeat[name] = true;
            $(document).on(eventsType, self.opts.element, function () {
                self.render(); // 为了兼容未来动态创建的元素，这里需要重新渲染并绑定属性
                self.validateInput(this);
            });
        }
    });
};

// 自定义验证规则
ValidateForm.prototype.setValidate = function (name, fn) {
    this.element.forEach(function (v) {
        if (!v.customValidateRule) {
            v.customValidateRule = {}; // 自定义规则
        }
        v.customValidateRule[name] = {
            fn: fn,
            isValidateSuccess: false
        };
    });
};

module.exports = ValidateForm;

/***/ })

},[117]);