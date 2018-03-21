const tools = require('zhf.tools'); // 工具方法集合
const applications = require('zhf.applications'); // 应用方法集合
const domAddPosition = require('zhf.dom-add-position');

function ValidateForm(json) {
    this.opts = tools.extend({
        element: '',
        hintClass: 'g-validate-form-hint',
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
    const self = this;
    self.element.forEach(function (v) {
        if (v.parentNode) {
            domAddPosition(v.parentNode, 'relative');
        }
        v.customValidateRule = {}; // 自定义规则
        v.hintDom = document.createElement('span');
        v.hintDom.classList.add(self.opts.hintClass);
    });
};
ValidateForm.prototype.renderHintAdd = function (opts = {}) {
    // 只有没被隐藏的才进行验证
    const input = opts.input;
    const hintDom = input.hintDom;
    if (input.offsetWidth && hintDom) {
        hintDom.innerHTML = opts.txt;
        input.parentNode.appendChild(hintDom);
    }
};
ValidateForm.prototype.renderHintRemove = function (opts = {}) {
    const input = opts.input;
    const parentDom = input.parentNode;
    const hintDom = input.parentNode.querySelector(`.${this.opts.hintClass}`);
    if (parentDom && hintDom) {
        parentDom.removeChild(input.hintDom);
    }
};
ValidateForm.prototype.validateInput = function (input) {
    const self = this;
    const customValidateRule = input.customValidateRule;
    Object.keys(customValidateRule).forEach((keys) => {
        const obj = customValidateRule[keys];
        obj.isValidateSuccess = obj.fn(input.value);
    });
    const validateType = input.dataset.validate || 'undefined';
    const validateHintTxt = input.dataset.hint || 'undefined';
    const type = validateType.split(' ');
    const hintTxt = validateHintTxt.split(' ');
    const value = input.value;
    let isValidateSuccess = true; // 是否验证成功了
    type.forEach(function (v, i) {
        if (isValidateSuccess && customValidateRule[v]) {
            if (isValidateSuccess && customValidateRule[v].isValidateSuccess) {
                self.renderHintRemove({input: input});
                isValidateSuccess = true;
            } else {
                self.renderHintAdd({txt: hintTxt[i], input: input});
                isValidateSuccess = false;
            }
        }
        if (isValidateSuccess && !customValidateRule[v]) {
            if (isValidateSuccess && v === 'no-empty') { // 设置了非空验证
                if (tools.isEmpty(value)) {
                    self.renderHintAdd({txt: hintTxt[i], input: input});
                    isValidateSuccess = false;
                } else {
                    self.renderHintRemove({input: input});
                    isValidateSuccess = true;
                }
            }
            if (isValidateSuccess && v === 'no-zero') { // 设置了非零验证
                if (tools.isZero(value)) {
                    self.renderHintAdd({txt: hintTxt[i], input: input});
                    isValidateSuccess = false;
                } else {
                    self.renderHintRemove({input: input});
                    isValidateSuccess = true;
                }
            }
            if (isValidateSuccess && v === 'yes-positive-integer') { // 设置了正整数验证
                if (tools.isPositiveInteger(value)) {
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
            isValidateSuccess: fn(v.value),
        };
    });
};

module.exports = ValidateForm;
