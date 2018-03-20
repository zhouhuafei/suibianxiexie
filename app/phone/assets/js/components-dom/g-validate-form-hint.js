const tools = require('zhf.tools'); // 工具方法集合
const applications = require('zhf.applications'); // 应用方法集合
const domAddPosition = require('zhf.dom-add-position');

function ValidateForm(json) {
    this.opts = tools.extend({
        element: '',
        hintClass: 'g-validate-form-hint',
    }, json);
    this.customValidateRule = {}; // 自定义验证规则
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
        v.hintDom = document.createElement('span');
        v.hintDom.classList.add(self.hintClass);
    });
};
ValidateForm.prototype.renderHintAdd = function (opts = {}) {
    // 只有没被隐藏的才进行验证
    const input = opts.input;
    const hintDom = input.hintDom;
    if (input.offsetWidth && hintDom) {
        // hintDom.innerHTML = opts.txt || '本项必填';
        hintDom.innerHTML = opts.txt;
        input.parentNode.appendChild(hintDom);
    }
};
ValidateForm.prototype.renderHintRemove = function (opts = {}) {
    const input = opts.input;
    const parentDom = input.parentNode;
    const hintDom = input.parentNode.querySelector(`.${this.hintClass}`);
    if (parentDom && hintDom) {
        parentDom.removeChild(input.hintDom);
    }
};
ValidateForm.prototype.validateInput = function (input) {
    const self = this;
    const customValidateRule = self.customValidateRule;
    const validateType = input.dataset.validate || 'undefined';
    const validateHintTxt = input.dataset.hint || 'undefined';
    const type = validateType.split(' ');
    const hintTxt = validateHintTxt.split(' ');
    const value = input.value;
    let isValidateSuccess = true; // 是否验证成功了
    type.forEach(function (v, i) {
        if (customValidateRule[v]) {
            if (customValidateRule[v].isValidateSuccess && isValidateSuccess) {
                self.renderHintRemove({input: input});
                isValidateSuccess = true;
            } else {
                self.renderHintAdd({txt: hintTxt[i], input: input});
                isValidateSuccess = false;
            }
        } else {
            if (v === 'no-empty' && isValidateSuccess) { // 设置了非空验证
                if (tools.isEmpty(value)) {
                    self.renderHintAdd({txt: hintTxt[i], input: input});
                    isValidateSuccess = false;
                } else {
                    self.renderHintRemove({input: input});
                    isValidateSuccess = true;
                }
            }
            if (v === 'no-zero' && isValidateSuccess) { // 设置了非零验证
                if (tools.isZero(value)) {
                    self.renderHintAdd({txt: hintTxt[i], input: input});
                    isValidateSuccess = false;
                } else {
                    self.renderHintRemove({input: input});
                    isValidateSuccess = true;
                }
            }
            if (v === 'yes-positive-integer' && isValidateSuccess) { // 设置了正整数验证
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
    this.customValidateRule[name] = {
        isValidateSuccess: fn(),
    };
};

module.exports = ValidateForm;
