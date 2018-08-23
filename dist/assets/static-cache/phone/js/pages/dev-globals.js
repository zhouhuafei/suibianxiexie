webpackJsonp([8],{

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(139);
var Super = __webpack_require__(3);

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
            var applications = self.applications;

            // base函数测试
            (function () {
                // 测试全选
                var SelectAll = applications.SelectAll;
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
                var ValidateInput = __webpack_require__(140);
                var validateInput = new ValidateInput({ element: '.js-validate-form' });
                validateInput.setValidate('no-999', function (value) {
                    return Number(value) !== 999;
                });
            })();

            // 弹窗测试
            (function () {
                var DialogConfirm = __webpack_require__(29);
                var Message = __webpack_require__(13);
                document.querySelector('.js-button-dialog').addEventListener('click', function () {
                    new DialogConfirm({
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

/***/ 139:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(0); // 工具方法集合
var applications = __webpack_require__(1); // 应用方法集合
var domAddPosition = __webpack_require__(141);
var checkStr = tools.checkStr;
var getParent = applications.getParent;
var getDomArray = applications.getDomArray;

function ValidateForm(json) {
    this.opts = tools.extend({
        element: '',
        hintWrapClass: 'g-form', // 指定提示框的父级
        fileActiveClass: 'g-upload_active', // 文件或者图片上传成功之后的class，做限制个数需要这个
        isBindEvent: true // 是否绑定事件
    }, json);
    this.init();
}

ValidateForm.prototype.init = function () {
    this.hintClass = 'g-validate-form-hint';
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
            // 为了兼容未来动态创建的元素，此方法会被多次调用，但是这里却不能重新赋值，否则会导致引用消失，以至于renderHintAdd时修改hintDom内g-validate-form-hint-text的innerHTML失效。
            v.hintDom = document.createElement('span');
            v.hintDom.innerHTML = '\n                <span class="g-validate-form-hint-text"></span>\n                <span class="g-validate-form-hint-icon"></span>\n            ';
            v.hintDom.classList.add(self.hintClass);
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
        hintDom.querySelector('.g-validate-form-hint-text').innerHTML = opts.txt;
        var hintWrapDom = input.hintWrapDom;
        var hintDomIsExist = hintWrapDom.querySelector('.' + this.hintClass);
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
    var hintDom = hintWrapDom.querySelector('.' + this.hintClass);
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
                    var isChecked = hintWrapDom.querySelector('input[name="' + inputName + '"]:checked');
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
                    var checkboxAll = hintWrapDom.querySelectorAll('input[name="' + inputName + '"]:checked');
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
        // jq的事件委托可以给未来动态创建的元素加事件，但是事件会被绑定多次(因为外部的forEach循环)，所以我定义了一个eventIsRepeat来进行过滤。
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

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var getDomArray=__webpack_require__(6),DomPosition=__webpack_require__(142);function domAddPosition(o){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"relative",t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],e=getDomArray(o)[0];e?t?e.style.position=i:new DomPosition(e).hasPosition()||(e.style.position=i):console.log("no find dom")}module.exports=domAddPosition;

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function t(t,i){for(var o=0;o<i.length;o++){var n=i[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(i,o,n){return o&&t(i.prototype,o),n&&t(i,n),i}}();function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var getDomArray=__webpack_require__(6),DomPosition=function(){function t(i){_classCallCheck(this,t);var o=getDomArray(i)[0];o?(this.dom=o,this.init()):console.log("no find dom")}return _createClass(t,[{key:"init",value:function(){this.domHasPosition=!1,this.domPositionType="static";var t=this.dom,i=getComputedStyle(t).position;"static"!==i&&""!==i&&(this.domHasPosition=!0,this.domPositionType=i)}},{key:"hasPosition",value:function(t){return this.init(),void 0===t?this.domHasPosition:this.domPositionType===t}},{key:"getPosition",value:function(){return this.init(),this.domPositionType}},{key:"setPosition",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"relative",i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=this.dom;i?o.style.position=t:this.hasPosition()||(o.style.position=t)}}]),t}();module.exports=DomPosition;

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(0); // 工具方法集合
var applications = __webpack_require__(1); // 应用方法集合
var Super = __webpack_require__(2); // 超类型(子类型继承的对象)

// 子类型
var Sub = tools.constructorInherit(Super, {
    wrap: '.g-wrap',
    // 回调
    callback: {
        // 确认
        confirm: function confirm() {},
        // 取消
        cancel: function cancel() {},
        // 关闭
        close: function close() {}
    },
    // 配置
    config: {
        positionLocation: 'center', // 弹窗的定位位置('top'，'center'，'bottom')。positionMethod定位方式强制fixed。
        isShowClose: true, // 是否显示关闭按钮
        closeContent: '<div class="iconfont icon-close"></div>', // 关闭按钮的内容
        isShowHeader: true, // 是否显示头部
        headerContent: '提示:', // 头部内容
        isShowBody: true, // 是否显示主体
        isShowIcon: false, // 是否显示icon
        icon: 'icon-warning', // icon的类型
        isCustom: false, // 是否自定义
        content: '<div>确定要执行这个操作?</div>', // 主体内容
        isShowFooter: true, // 是否显示尾部
        isShowConfirm: true, // 是否显示确认按钮
        confirmContent: '确认', // 确认按钮的内容
        isShowCancel: true, // 是否显示取消按钮
        cancelContent: '取消', // 取消按钮的内容
        isShowMask: true, // 是否显示遮罩
        isHandHide: false // 是否手动隐藏(一般只用于点击确认时)
    },
    // 数据
    data: {}
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    var config = this.opts.config;
    var positionLocation = 'g-dialog-confirm-wrap_' + config.positionLocation; // 弹窗的定位位置
    // 弹窗结构
    var html = this.renderConfirm();
    this.moduleDom = applications.createElement({
        style: config.moduleDomStyle,
        customAttribute: config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-dialog-confirm-wrap ' + positionLocation,
            innerHTML: html
        }
    });
};

// 确认框
Sub.prototype.renderConfirm = function () {
    var config = this.opts.config;
    var htmlHeader = '';
    if (config.isShowHeader) {
        htmlHeader = '<div class="g-dialog-confirm-header">' + config.headerContent + '</div>';
    }
    var htmlBody = '';
    if (config.isShowBody) {
        var htmlIcon = '';
        if (config.isShowIcon) {
            htmlIcon = '<div class="g-dialog-confirm-body-system-icon iconfont ' + config.icon + '"></div>';
        }
        var bodyClass = 'g-dialog-confirm-body-system';
        var bodyContent = '\n            ' + htmlIcon + '\n            <div class="g-dialog-confirm-body-system-text">' + config.content + '</div>\n        ';
        if (config.isCustom) {
            bodyClass = 'g-dialog-confirm-body-custom';
            bodyContent = config.content;
        }
        htmlBody = '\n            <div class="g-dialog-confirm-body">\n                <div class="' + bodyClass + '">\n                    ' + bodyContent + '\n                </div>\n            </div>\n        ';
    }
    var htmlFooter = '';
    if (config.isShowFooter) {
        var htmlCancel = '';
        if (config.isShowCancel) {
            htmlCancel = '<div class="g-button g-button_cancel g-dialog-confirm-footer-cancel">' + config.cancelContent + '</div>';
        }
        var htmlConfirm = '';
        if (config.isShowConfirm) {
            htmlConfirm = '<div class="g-button g-dialog-confirm-footer-confirm">' + config.confirmContent + '</div>';
        }
        htmlFooter = '<div class="g-dialog-confirm-footer">' + htmlCancel + htmlConfirm + '</div>';
    }
    var htmlClose = '';
    if (config.isShowClose) {
        htmlClose = '<div class="g-dialog-confirm-close">' + config.closeContent + '</div>';
    }
    var htmlMask = '';
    if (config.isShowMask) {
        htmlMask = '<div class="g-mask"></div>';
    }
    return '\n        ' + htmlMask + '\n        <div class="g-dialog-confirm">\n            ' + htmlHeader + '\n            ' + htmlBody + '\n            ' + htmlFooter + '\n            ' + htmlClose + ' \n        </div>\n    ';
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
    var self = this;
    var config = this.opts.config;
    var callback = this.opts.callback;
    // 关闭
    var close = this.moduleDom.querySelector('.g-dialog-confirm-close');
    if (close) {
        close.addEventListener('click', function () {
            self.moduleDomHide();
            callback.close();
        });
    }
    // 取消
    var cancel = this.moduleDom.querySelector('.g-dialog-confirm-footer-cancel');
    if (cancel) {
        cancel.addEventListener('click', function () {
            self.moduleDomHide();
            callback.cancel();
        });
    }
    // 确认
    var confirm = this.moduleDom.querySelector('.g-dialog-confirm-footer-confirm');
    if (confirm) {
        confirm.addEventListener('click', function () {
            if (!config.isHandHide) {
                self.moduleDomHide();
            }
            callback.confirm();
        });
    }
};

module.exports = Sub;

/***/ })

},[138]);