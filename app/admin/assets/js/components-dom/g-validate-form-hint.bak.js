const tools = require('zhf.tools'); // 工具方法集合
const applications = require('zhf.applications'); // 应用方法集合
const domAddPosition = require('zhf.dom-add-position');
const checkStr = tools.checkStr;
const getParent = applications.getParent;
const getDomArray = applications.getDomArray;

function ValidateForm(json) {
    this.opts = tools.extend({
        element: '',
        hintClass: 'g-validate-form-hint',
        hintWrapClass: 'g-form', // 指定提示框的父级
        fileActiveClass: 'g-upload-active', // 文件或者图片上传成功之后的class，做限制个数需要这个
        isBindEvent: true, // 是否绑定事件
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
    if (this.opts.isBindEvent) {
        this.power();
    }
};
ValidateForm.prototype.render = function () {
    const self = this;
    self.element.forEach(function (v) {
        const hintWrapDom = self.getHintWrapDom(v);
        if (hintWrapDom) {
            domAddPosition(hintWrapDom, 'relative');
            v.hintWrapDom = hintWrapDom;
        }
        v.customValidateRule = {}; // 自定义规则
        v.hintDom = document.createElement('span');
        v.hintDom.classList.add(self.opts.hintClass);
    });
};
ValidateForm.prototype.getHintWrapDom = function (input) {
    const hintWrapClass = this.opts.hintWrapClass;
    let parent = getParent(input, `.${hintWrapClass}`); // 把这个放上面，是为了少调用一次getParent方法，因为g-form布局用的居多，g-validate-form-hint-wrap没怎么使用。
    if (!parent) {
        parent = getParent(input, '.g-validate-form-hint-wrap');
    }
    if (!parent) {
        parent = input.parentNode;
    }
    return parent;
};
ValidateForm.prototype.renderHintAdd = function (opts = {}) {
    // 只有没被隐藏的才进行验证
    const input = opts.input;
    const hintDom = input.hintDom;
    if (input.offsetWidth && hintDom) {
        hintDom.innerHTML = opts.txt;
        const hintWrapDom = input.hintWrapDom;
        const hintDomIsExist = hintWrapDom.querySelector(`.${this.opts.hintClass}`);
        if (hintWrapDom && !hintDomIsExist) {
            hintWrapDom.appendChild(hintDom);
        }
    }
};
ValidateForm.prototype.renderHintRemove = function (opts = {}) {
    const input = opts.input;
    const hintWrapDom = input.hintWrapDom;
    const hintDom = hintWrapDom.querySelector(`.${this.opts.hintClass}`);
    if (hintWrapDom && hintDom) {
        hintWrapDom.removeChild(hintDom);
    }
};
ValidateForm.prototype.validateInput = function (input) {
    const self = this;
    const opts = self.opts;
    const validateType = input.dataset.validate || 'undefined';
    const validateHintTxt = input.dataset.hint || 'undefined';
    const type = validateType.split(' ');
    const hintTxt = validateHintTxt.split(' ');
    const hintWrapDom = input.hintWrapDom;
    const inputType = input.type;
    const inputName = input.name; // 这个不能使用，因为有些name名称是这种格式 hobby[] 此时通过name获取会报错
    const isPassword = inputType === 'password';
    const isRadio = inputType === 'radio';
    const isCheckbox = inputType === 'checkbox';
    const isFile = inputType === 'file';
    let value = input.value;
    if (isFile) { // 如果是file类型的input，值就是input身上的自定义属性data-value
        value = input.dataset.value;
    }
    // 验证自定义的规则
    const customValidateRule = input.customValidateRule;
    Object.keys(customValidateRule).forEach((keys) => {
        const obj = customValidateRule[keys];
        obj.isValidateSuccess = obj.fn(value);
    });
    // 验证非自定义的规则
    let isValidateSuccess = true; // 是否验证成功了，假设验证通过了。
    type.forEach(function (v, i) {
        if (isValidateSuccess && customValidateRule[v]) { // 验证通过了且自定义验证存在则校验自定义的规则是否通过了
            if (isValidateSuccess && customValidateRule[v].isValidateSuccess) {
                self.renderHintRemove({input: input});
                isValidateSuccess = true;
            } else {
                self.renderHintAdd({txt: hintTxt[i], input: input});
                isValidateSuccess = false;
            }
        }
        if (isValidateSuccess && !customValidateRule[v]) { // 验证通过了且自定义验证不存在则校验非自定义的规则是否通过了
            if (isValidateSuccess && v === 'no-empty') { // 设置了非空验证
                let isEmpty = checkStr.isEmpty(value);
                if (isPassword) { // input为password类型的进行特殊处理
                    isEmpty = value === ''; // 因为密码可以输入空格，所以没必要去除首尾空格。
                }
                if (isRadio || isCheckbox) { // input为radio类型和input为checkbox类型的进行特殊处理（这两种类型只验证是否必填就够用了，file类型和select下拉框也是只验证必填就够用了。）
                    const isChecked = hintWrapDom.querySelector(`input:checked`);
                    isEmpty = isChecked === null;
                }
                if (isEmpty) {
                    self.renderHintAdd({txt: hintTxt[i], input: input});
                    isValidateSuccess = false;
                } else {
                    self.renderHintRemove({input: input});
                    isValidateSuccess = true;
                }
            }
            if (isValidateSuccess && v === 'no-zero') { // 设置了非零验证
                if (checkStr.isZero(value)) {
                    self.renderHintAdd({txt: hintTxt[i], input: input});
                    isValidateSuccess = false;
                } else {
                    self.renderHintRemove({input: input});
                    isValidateSuccess = true;
                }
            }
            if (isValidateSuccess && v === 'yes-positive-integer') { // 设置了正整数验证
                if (checkStr.isPositiveInteger(value)) {
                    self.renderHintRemove({input: input});
                    isValidateSuccess = true;
                } else {
                    self.renderHintAdd({txt: hintTxt[i], input: input});
                    isValidateSuccess = false;
                }
            }
            if (isValidateSuccess && v === 'yes-positive-float') { // 设置了正浮点数验证
                if (checkStr.isPositiveFloat(value)) {
                    self.renderHintRemove({input: input});
                    isValidateSuccess = true;
                } else {
                    self.renderHintAdd({txt: hintTxt[i], input: input});
                    isValidateSuccess = false;
                }
            }
            if (isValidateSuccess && v === 'yes-phone') { // 设置了电话验证
                if (checkStr.isPhoneNumEasy(value)) {
                    self.renderHintRemove({input: input});
                    isValidateSuccess = true;
                } else {
                    self.renderHintAdd({txt: hintTxt[i], input: input});
                    isValidateSuccess = false;
                }
            }
            if (isValidateSuccess && v === 'yes-email') { // 设置了邮箱验证
                if (checkStr.isEmail(value)) {
                    self.renderHintRemove({input: input});
                    isValidateSuccess = true;
                } else {
                    self.renderHintAdd({txt: hintTxt[i], input: input});
                    isValidateSuccess = false;
                }
            }
            if (isValidateSuccess && v === 'yes-url') { // 设置了网址验证
                if (checkStr.isUrl(value)) {
                    self.renderHintRemove({input: input});
                    isValidateSuccess = true;
                } else {
                    self.renderHintAdd({txt: hintTxt[i], input: input});
                    isValidateSuccess = false;
                }
            }
            const yesLimitLength = /yes-limit-length-(\d+)/.exec(v);
            if (isValidateSuccess && yesLimitLength) { // 设置了限制长度
                const length = yesLimitLength[1];
                let isPassLimitLength = value.length > length;
                if (isCheckbox) { // input为checkbox类型的进行特殊处理
                    const checkboxAll = hintWrapDom.querySelectorAll(`input:checked`);
                    isPassLimitLength = length >= checkboxAll.length;
                }
                if (isFile) { // input为file类型的进行特殊处理
                    const fileAll = hintWrapDom.querySelectorAll(`.${opts.fileActiveClass}`); // 这个class应该放到opts里，是可配置的。
                    isPassLimitLength = length >= fileAll.length;
                }
                if (isPassLimitLength) {
                    self.renderHintRemove({input: input});
                    isValidateSuccess = true;
                } else {
                    self.renderHintAdd({txt: hintTxt[i], input: input});
                    isValidateSuccess = false;
                }
            }
        }
    });
    input.isValidateSuccess = isValidateSuccess;
};
ValidateForm.prototype.isAllPassValidate = function () {
    const self = this;
    let isValidateSuccess = true;
    self.element.forEach(function (v) {
        self.validateInput(v);
        if (v.isValidateSuccess !== true) {
            isValidateSuccess = false;
        }
    });
    return isValidateSuccess;
};
ValidateForm.prototype.power = function () {
    const self = this;
    self.element.forEach(function (v) {
        const eventsType = v.dataset.event || 'blur';
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
            isValidateSuccess: false,
        };
    });
};

module.exports = ValidateForm;
