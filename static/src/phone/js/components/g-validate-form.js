let tools = require('../base/tools');//工具方法集合
let applications = require('../base/applications');//应用方法集合

function ValidateForm(json) {
    this.opts = json || {};
    this.element = applications.getDomArray({element: this.opts.element})[0];
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
    //只有没被隐藏的才进行验证
    if (this.element.offsetWidth) {
        let opts = json || {};
        this.hintDom.innerHTML = opts.txt || '本项必填';
        this.wrapDom.appendChild(this.hintDom);
    }
};
ValidateForm.prototype.renderHintRemove = function () {
    let isHaveHintDom = this.wrapDom.querySelector(`.${this.hintClass}`);
    if (isHaveHintDom) {
        this.wrapDom.removeChild(this.hintDom);
    }
};
ValidateForm.prototype.validateSave = function () {
    let self = this;
    let type = self.validateType.split(' ');
    let hintTxt = self.validateHintTxt.split(' ');
    let value = this.element.value;
    this.isValidateSuccess = true;//是否验证成功了
    type.forEach(function (v, i) {
        if (v === 'no-space' && self.isValidateSuccess) {//设置了非空验证
            if (tools.isSpace(value)) {
                self.renderHintAdd({txt: hintTxt[i]});
                self.isValidateSuccess = false;
            } else {
                self.renderHintRemove();
                self.isValidateSuccess = true;
            }
        }
        if (v === 'no-zero' && self.isValidateSuccess) {//设置了非零验证
            if (tools.isZero(value)) {
                self.renderHintAdd({txt: hintTxt[i]});
                self.isValidateSuccess = false;
            } else {
                self.renderHintRemove();
                self.isValidateSuccess = true;
            }
        }
        if (v === 'yes-integer' && self.isValidateSuccess) {//设置了整数验证
            if (tools.isInteger(value)) {
                self.renderHintRemove();
                self.isValidateSuccess = true;
            } else {
                self.renderHintAdd({txt: hintTxt[i]});
                self.isValidateSuccess = false;
            }
        }
    });
};
ValidateForm.prototype.validateEvents = function () {
    let self = this;
    if (self.element) {
        self.element.addEventListener(self.eventsType, function () {
            self.validateSave();
        });
    }
};

module.exports = ValidateForm;