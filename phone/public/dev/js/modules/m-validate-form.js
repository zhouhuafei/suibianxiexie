var base = require('../base/base');//底层方法
var validate = require('../function/validate');//表单验证

function ValidateInput(json) {
    this.opt = json || {};
    this.form = this.opt.form;
    this.hintClass = this.opt.hintClass || 'm-validate-form-hint';
    this.validateType = this.form.dataset.validate || 'undefined';
    this.validateHintTxt = this.form.dataset.hint || 'undefined';
    this.isValidateSuccess = true;//是否验证成功了
    this.init();
    this.validateEventBlur();
}
ValidateInput.prototype.init = function () {
    this.render();
};
ValidateInput.prototype.render = function () {
    this.renderWrap();
    this.renderHint();
};
ValidateInput.prototype.renderWrap = function () {
    this.wrapDom = this.form.parentNode;
    if (this.wrapDom && getComputedStyle(this.wrapDom).position == 'static') {
        this.wrapDom.style.position = 'relative';
    }
};
ValidateInput.prototype.renderHint = function () {
    this.hintDom = document.createElement('span');
    this.hintDom.classList.add(this.hintClass);
};
ValidateInput.prototype.renderHintAdd = function (json) {
    //只有没被隐藏的才进行验证
    if (this.form.offsetWidth) {
        var opt = json || {};
        this.hintDom.innerHTML = opt.txt || '本项必填';
        this.wrapDom.appendChild(this.hintDom);
    }
};
ValidateInput.prototype.renderHintRemove = function () {
    var isHaveHintDom = this.wrapDom.querySelector(`.${this.hintClass}`);
    if (isHaveHintDom) {
        this.wrapDom.removeChild(this.hintDom);
    }
};
ValidateInput.prototype.validateSave = function () {
    var self = this;
    var type = self.validateType.split(' ');
    var hintTxt = self.validateHintTxt.split(' ');
    var value = this.form.value;
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
ValidateInput.prototype.validateEventBlur = function () {
    var self = this;
    if (self.form) {
        self.form.addEventListener('blur', function () {
            self.validateSave();
        });
    }
};

module.exports = ValidateInput;