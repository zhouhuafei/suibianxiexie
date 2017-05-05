var base = require('../base/base');//底层方法
var validate = require('../function/validate');//表单验证

function ValidateForm(json) {
    this.opt = json || {};
    this.element = base.getDomArray({element: this.opt.element})[0];
    this.hintClass = this.opt.hintClass || 'm-validate-form-hint';
    this.eventsType = this.opt.eventsType || 'blur';
    this.validateType = this.element.dataset.validate || 'undefined';
    this.validateHintTxt = this.element.dataset.hint || 'undefined';
    this.isValidateSuccess = true;//是否验证成功了
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
    if (this.wrapDom && getComputedStyle(this.wrapDom).position == 'static') {
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
        var opt = json || {};
        this.hintDom.innerHTML = opt.txt || '本项必填';
        this.wrapDom.appendChild(this.hintDom);
    }
};
ValidateForm.prototype.renderHintRemove = function () {
    var isHaveHintDom = this.wrapDom.querySelector(`.${this.hintClass}`);
    if (isHaveHintDom) {
        this.wrapDom.removeChild(this.hintDom);
    }
};
ValidateForm.prototype.validateSave = function () {
    var self = this;
    var type = self.validateType.split(' ');
    var hintTxt = self.validateHintTxt.split(' ');
    var value = this.element.value;
    type.forEach(function (v, i) {
        if (v == 'no-space' && self.isValidateSuccess) {//设置了非空验证
            validate.isSpace({
                value: value,
                success: function () {//空
                    self.renderHintAdd({txt: hintTxt[i]});
                    self.isValidateSuccess = false;
                },
                fail: function () {//非空
                    self.renderHintRemove();
                    self.isValidateSuccess = true;
                }
            });
        }
        if (v == 'no-zero' && self.isValidateSuccess) {//设置了非零验证
            validate.isZero({
                value: value,
                success: function () {//零
                    self.renderHintAdd({txt: hintTxt[i]});
                    self.isValidateSuccess = false;
                },
                fail: function () {//非零
                    self.renderHintRemove();
                    self.isValidateSuccess = true;
                }
            });
        }
        if (v == 'yes-integer' && self.isValidateSuccess) {//设置了整数验证
            validate.isInteger({
                value: value,
                success: function () {//整数
                    self.renderHintRemove();
                    self.isValidateSuccess = true;
                },
                fail: function () {//非整数
                    self.renderHintAdd({txt: hintTxt[i]});
                    self.isValidateSuccess = false;
                }
            });
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